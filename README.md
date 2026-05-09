# 🎬 CINEMATA

<div align="center">

![CINEMATA Banner](https://img.shields.io/badge/CINEMATA-AI%20Movie%20Review%20Platform-0f172a?style=for-the-badge&logo=vercel&logoColor=white)

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![AI](https://img.shields.io/badge/AI-IndoBERT-ff6b6b?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

### 🚀 AI Powered Movie Review Platform with Sentiment Analysis using IndoBERT

</div>

---

# 📖 Overview

CINEMATA adalah platform review film modern berbasis AI yang memungkinkan pengguna memberikan ulasan film dan mendapatkan analisis sentimen secara real-time menggunakan model IndoBERT.

Project ini menggabungkan:

- 🎨 Modern React Frontend
- 🤖 AI Sentiment Analysis
- ⚡ FastAPI Backend
- 🧠 IndoBERT NLP Model
- 🗄️ PostgreSQL Database
- 🌐 Production Deployment with Nginx & SSL

---

# ✨ Features

## 🎬 Movie Platform

- Modern cinematic UI/UX
- Responsive design
- Random hero banner
- Movie detail modal
- Embedded trailer preview
- Dynamic movie categories
- Search movie feature
- AI movie statistics

---

## 🤖 AI Sentiment Analysis

- Real-time sentiment prediction
- IndoBERT fine-tuned model
- Positive & negative classification
- AI confidence scoring
- Automatic review analytics
- Review sentiment aggregation

---

## 📊 Analytics System

- Positive percentage
- Negative percentage
- AI confidence score
- Movie rating aggregation
- AI review summary
- Dynamic statistics panel

---

## 🌐 Production Ready

- HTTPS SSL support
- Nginx reverse proxy
- FastAPI production deployment
- Systemd backend service
- PostgreSQL database integration
- GitHub deployment ready

---

# 🧠 AI Model

CINEMATA menggunakan model:

```plaintext
IndoBERT Sentiment Analysis
```

Model dilatih menggunakan dataset review film berbahasa Indonesia untuk melakukan klasifikasi:

- 😊 Positif
- 😤 Negatif

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

- React.js
- Axios
- CSS3
- Responsive Layout

## Backend

- FastAPI
- Python
- Uvicorn

## AI & NLP

- Transformers
- PyTorch
- IndoBERT
- HuggingFace

## Database

- PostgreSQL
- SQLAlchemy

## Deployment

- Ubuntu Server
- Nginx
- SSL (Let's Encrypt)
- Systemd Service

---

# 📂 Project Structure

```plaintext
CINEMATA/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── model/
│   └── venv/
│
├── frontend/
│   └── cinemata-master/
│       ├── public/
│       ├── src/
│       ├── package.json
│       └── build/
│
├── notebook/
│   └── training.ipynb
│
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

# 🗄️ PostgreSQL Integration

CINEMATA mendukung PostgreSQL untuk menyimpan:

- User review
- Rating film
- AI sentiment history
- Analytics data

Install PostgreSQL:

```bash
sudo apt install postgresql postgresql-contrib -y
```

---

# 🚀 Production Deployment

## Frontend Build

```bash
npm run build
```

---

## Nginx Deployment

```nginx
server {

    listen 443 ssl http2;

    server_name movie.sysnetwork.biz.id;

    root /var/www/cinemata;

    index index.html;

    location / {

        try_files $uri $uri/ /index.html;
    }

    location /api/ {

        proxy_pass http://127.0.0.1:8000/;
    }
}
```

---

# 🌐 Live Demo

🔗 [https://movie.sysnetwork.biz.id](https://movie.sysnetwork.biz.id)

---

# 📸 Preview

## 🎬 Home Page

- Cinematic Hero Banner
- Dynamic Movie Cards
- AI Analytics
- Modern UI

## 🤖 AI Analysis

- Sentiment Percentage
- Confidence Score
- AI Review Summary

## 🎥 Movie Detail

- Embedded Trailer
- Rating Statistics
- Interactive Review Panel

---

# 🔥 Future Improvements

- 👤 Authentication System
- 🧠 AI Recommendation System
- 🎞️ TMDB API Integration
- 💾 Full Database Integration
- 📈 Trending Analytics
- 🐳 Docker Deployment
- ☁️ Cloud Deployment
- 📱 Mobile Responsive Optimization
- 🌙 Dark/Light Theme
- ❤️ Watchlist System

---

# 👨‍💻 Developer

### Adi Sani Alviga

- GitHub: [https://github.com/sanialviga](https://github.com/sanialviga)

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### 🎬 CINEMATA — AI Powered Movie Review Platform

Built with ❤️ using React, FastAPI, IndoBERT, and PostgreSQL.

</div>
