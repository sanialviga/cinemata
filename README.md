# 🎬 CINEMATA

<div align="center">

![CINEMATA Banner](https://img.shields.io/badge/CINEMATA-AI%20Movie%20Review%20Platform-0f172a?style=for-the-badge\&logo=vercel\&logoColor=white)

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square\&logo=react\&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square\&logo=fastapi\&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square\&logo=python\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)
![AI](https://img.shields.io/badge/AI-IndoBERT-ff6b6b?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

### 🚀 AI Powered Movie Review Platform with IndoBERT Sentiment Analysis

</div>

---

# 📖 Overview

CINEMATA adalah platform review film modern berbasis AI yang mengintegrasikan teknologi Natural Language Processing (NLP) untuk melakukan analisis sentimen review pengguna secara real-time menggunakan model IndoBERT.

Project ini dibangun menggunakan arsitektur fullstack modern yang menggabungkan:

* 🎨 React Frontend
* ⚡ FastAPI Backend
* 🧠 IndoBERT NLP Model
* 🗄️ PostgreSQL Database
* 📊 AI Audience Analytics
* 🌐 Production Deployment (Nginx + SSL)

CINEMATA tidak hanya melakukan klasifikasi sentimen sederhana, tetapi juga mendukung:

* mixed sentiment review detection
* confidence scoring
* realtime analytics aggregation
* audience sentiment visualization
* semantic contextual understanding

Sistem AI menggunakan pendekatan hybrid:

* 🤖 IndoBERT → semantic sentiment engine
* 🎨 Frontend enhancer → UI/UX enhancement layer

Arsitektur ini memungkinkan CINEMATA memberikan pengalaman AI movie review platform yang lebih realistis dan interaktif.

---

# ✨ Features

## 🎬 Movie Platform

* Modern cinematic UI/UX
* Responsive design
* Random hero banner
* Movie detail modal
* Embedded trailer preview
* Dynamic movie categories
* Search movie feature
* AI movie statistics

---

## 🤖 AI Sentiment Analysis

* Real-time sentiment prediction
* IndoBERT fine-tuned sentiment model
* Contextual semantic understanding
* Mixed review polarity detection
* Positive & negative classification
* Confidence calibration system
* Audience sentiment aggregation
* Hybrid AI enhancer system
* Ambiguous review understanding
* Long-review sentiment analysis

---

## 📊 Analytics System

* Positive & negative percentage
* AI confidence aggregation
* Audience sentiment detection
* Neutral / mixed audience analysis
* Real-time analytics update
* Movie rating aggregation
* Dynamic AI review summary
* Sentiment-based movie insights
* Interactive statistics panel

---

## 🌐 Production Ready

* HTTPS SSL support
* Nginx reverse proxy
* FastAPI production deployment
* Systemd backend service
* PostgreSQL database integration
* GitHub deployment ready

---

# 🧠 AI Model

CINEMATA menggunakan model transformer:

```plaintext
indobenchmark/indobert-base-p1
```

yang di-fine-tuning khusus untuk task:

```plaintext
Binary Sentiment Classification
```

Model dilatih menggunakan kombinasi dataset:

* SmSA Indonesian Sentiment Dataset
* IMDb Movie Review Dataset
* Custom Ambiguous Review Dataset
* Long-form Indonesian Movie Review Dataset

Model dirancang untuk memahami:

* contextual sentiment
* contrastive sentence
* semantic polarity transition
* ambiguous sentiment
* mixed review sentiment

Contoh review yang dapat dipahami model:

```plaintext
"Visualnya bagus tapi ceritanya membosankan"
→ NEGATIF

"Awalnya lambat namun endingnya luar biasa"
→ POSITIF
```

Output model:

```json
{
  "sentiment": "positif",
  "confidence": 99.91,
  "scores": {
    "positif": 99.91,
    "negatif": 0.09
  }
}
```

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Axios
* CSS3
* Responsive Layout

## Backend

* FastAPI
* Python
* Uvicorn

## AI & NLP

* Transformers
* PyTorch
* IndoBERT
* HuggingFace

## Database

* PostgreSQL
* SQLAlchemy

## Deployment

* Ubuntu Server
* Nginx
* SSL (Let's Encrypt)
* Systemd Service

---

# 📂 Project Structure

```plaintext
CINEMATA/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── requirements.txt
│   ├── model/
│   ├── routes/
│   └── venv/
│
├── frontend/
│   └── cinemata-master/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── assets/
│       │   └── App.jsx
│       ├── package.json
│       └── build/
│
├── notebook/
│   ├── CINEMATA_IndoBERT_Sentiment_Analysis_V2.ipynb
│   ├── cinemata_long_review_positive_100.csv
│   └── cinemata_long_review_negative_100.csv
│
├── model/
├── ppt/
└── README.md
```

---

# ⚙️ Installation

# 1️⃣ Clone Repository

```bash
git clone https://github.com/sanialviga/cinemata.git
```

```bash
cd cinemata
```

---

# 2️⃣ Frontend Setup

```bash
cd frontend/cinemata-master
```

Install dependency:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend berjalan di:

```plaintext
http://localhost:3000
```

---

# 3️⃣ Backend Setup

Masuk backend:

```bash
cd backend
```

Buat virtual environment:

```bash
python -m venv venv
```

Aktifkan environment:

## Linux

```bash
source venv/bin/activate
```

## Windows

```bash
venv\Scripts\activate
```

Install dependency:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app:app --host 0.0.0.0 --port 8000
```

Backend berjalan di:

```plaintext
http://localhost:8000
```

---

# 🔌 API Endpoint

## Base URL

```plaintext
http://localhost:8000
```

---

## Health Check

### GET /

```json
{
  "message": "🎬 CINEMATA API Running"
}
```

---

## Predict Sentiment

### POST /predict

Request:

```json
{
  "text": "film ini sangat bagus"
}
```

Response:

```json
{
  "sentiment": "positif",
  "confidence": 99.91,
  "scores": {
    "positif": 99.91,
    "negatif": 0.09
  }
}
```

---

## Save Review

### POST /reviews

Request:

```json
{
  "movie_id": 1,
  "username": "Adi",
  "comment": "Film ini sangat bagus",
  "rating": 5
}
```

Response:

```json
{
  "id": 12,
  "movie_id": 1,
  "username": "Adi",
  "comment": "Film ini sangat bagus",
  "rating": 5,
  "sentiment": "positif",
  "confidence": 99.91
}
```

---

# 🗄️ PostgreSQL Integration

CINEMATA menggunakan PostgreSQL sebagai persistent storage untuk:

* User reviews
* Movie ratings
* AI sentiment results
* Confidence scores
* Audience analytics
* Historical review data

Sistem frontend tidak lagi menggunakan localStorage sebagai source of truth.

Seluruh review disimpan secara realtime melalui:

```plaintext id="nm08dr"
React Frontend
↓
FastAPI Backend
↓
IndoBERT Inference
↓
PostgreSQL Database
```

Install PostgreSQL:

```bash id="9xzvh1"
sudo apt install postgresql postgresql-contrib -y
```

---

# 🏛️ System Architecture

```plaintext id="e34t14"
Frontend React
│
├── UI Enhancer Layer
│   ├── emoji enhancement
│   ├── keyword highlighting
│   ├── sentiment visualization
│   └── UX helper system
│
↓
FastAPI Backend
│
├── IndoBERT Inference Engine
├── Sentiment Classification
├── Confidence Scoring
└── Review Processing
│
↓
PostgreSQL Database
│
├── Reviews
├── Ratings
├── Sentiment Results
└── Analytics Data
```

---

# 🚀 Production Deployment

## Frontend Build

```bash id="me4o7v"
npm run build
```

---

## Nginx Deployment

```nginx id="agw92z"
server {

    listen 80;

    server_name movie.sysnetwork.biz.id sysnetwork.biz.id;

    return 301 https://$host$request_uri;
}

server {

    listen 443 ssl http2;

    server_name movie.sysnetwork.biz.id sysnetwork.biz.id;

    root /var/www/cinemata;

    index index.html;

    ssl_certificate /etc/letsencrypt/live/movie.sysnetwork.biz.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/movie.sysnetwork.biz.id/privkey.pem;

    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {

        try_files $uri $uri/ /index.html;
    }

    location /api/ {

        proxy_pass http://127.0.0.1:8000/;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_http_version 1.1;

        proxy_read_timeout 300;
    }
}
```

---

# 🌐 Live Demo

🚀 Production Website:

https://movie.sysnetwork.biz.id

---

# 📸 Preview

## 🎬 Home Page

* Cinematic Hero Banner
* Dynamic Movie Cards
* AI Analytics
* Modern UI

## 🤖 AI Analysis

* Sentiment Percentage
* Confidence Score
* AI Review Summary

## 🎥 Movie Detail

* Embedded Trailer
* Rating Statistics
* Interactive Review Panel

---

# 🔥 Future Improvements

* 👤 Authentication & User Account
* 🧠 AI Recommendation System
* 🎞️ TMDB API Integration
* 📈 Trending Movie Analytics
* 🐳 Docker Deployment
* ☁️ Cloud AI Deployment
* 📱 Mobile Optimization
* 🌙 Dynamic Theme System
* ❤️ Watchlist & Favorites
* 🧠 Multi-class Emotion Detection
* 🎤 Voice Review Sentiment
* 📊 Advanced AI Dashboard
* 🔥 Real-time Trending Reviews

---

# 👨‍💻 Developers

| Nama              | NIM     | GitHub                          |
| ----------------- | ------- | ------------------------------- |
| Adi Sani Alviga   | 1221601 | https://github.com/sanialviga   |
| Vito Arsy Saputra | 1221623 | https://github.com/vitoas30     |
| Reza Anwar Sanusi | 3220002 | https://github.com/rezaanwar114 |

---

# 📌 Contributor Profiles

## Adi Sani Alviga

* GitHub: https://github.com/sanialviga

## Vito Arsy Saputra

* GitHub: https://github.com/vitoas30

## Reza Anwar Sanusi

* GitHub: https://github.com/rezaanwar114

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### 🎬 CINEMATA — AI Powered Movie Review Platform

Built with ❤️ using React, FastAPI, IndoBERT, and PostgreSQL.

</div>
