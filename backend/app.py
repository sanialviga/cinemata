# ============================================================
# 🎬 CINEMATA — FastAPI Backend
# ============================================================

import json
import torch
import numpy as np

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification
)

# ============================================================
# FastAPI App
# ============================================================

app = FastAPI(
    title="CINEMATA API"
)

# ============================================================
# Enable CORS
# ============================================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# ============================================================
# Device
# ============================================================

device = (
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

# ============================================================
# Load Label Config
# ============================================================

with open(

    "model/label_config.json",

    "r",

    encoding="utf-8"

) as f:

    label_config = json.load(f)

ID2LABEL = {
    int(k): v
    for k, v in label_config["id2label"].items()
}

LABEL2ID = label_config["label2id"]

# ============================================================
# Load Tokenizer
# ============================================================

print("📥 Loading tokenizer...")

tokenizer = AutoTokenizer.from_pretrained(
    "model"
)

# ============================================================
# Load Model
# ============================================================

print("📥 Loading IndoBERT model...")

model = AutoModelForSequenceClassification.from_pretrained(
    "model"
)

model = model.to(device)

model.eval()

print("✅ Model loaded successfully")

# ============================================================
# Request Schema
# ============================================================

class PredictionRequest(BaseModel):

    text: str

# ============================================================
# Prediction Function
# ============================================================

def predict_sentiment(text):

    encoding = tokenizer(

        text,

        max_length=96,

        padding="max_length",

        truncation=True,

        return_tensors="pt"
    )

    input_ids = encoding[
        "input_ids"
    ].to(device)

    attention_mask = encoding[
        "attention_mask"
    ].to(device)

    with torch.no_grad():

        outputs = model(

            input_ids=input_ids,

            attention_mask=attention_mask
        )

        probs = torch.softmax(

            outputs.logits,

            dim=-1

        ).squeeze().cpu().numpy()

    label_id = int(
        np.argmax(probs)
    )

    sentiment = ID2LABEL[
        label_id
    ]

    confidence = round(
        float(probs[label_id]) * 100,
        2
    )

    return {

        "sentiment":
            sentiment,

        "confidence":
            confidence,

        "scores": {

            "negatif":
                round(
                    float(probs[0]) * 100,
                    2
                ),

            "positif":
                round(
                    float(probs[1]) * 100,
                    2
                )
        }
    }

# ============================================================
# Root Endpoint
# ============================================================

@app.get("/")

def root():

    return {

        "message":
            "🎬 CINEMATA API Running"
    }

# ============================================================
# Prediction Endpoint
# ============================================================

@app.post("/predict")

def predict(data: PredictionRequest):

    result = predict_sentiment(
        data.text
    )

    return result