# 🌾 Kisan AI
### AI-Powered Agriculture Assistant using Ollama, FastAPI, RAG & Computer Vision

Kisan AI is an intelligent agriculture assistant designed to help farmers with crop-related queries and disease detection. The project combines a local Large Language Model (LLM) using **Ollama**, **Retrieval-Augmented Generation (RAG)** for agriculture knowledge, and **Computer Vision** using **EfficientNet-B0** to identify crop diseases from leaf images.

---

## 🚀 Features

### 🤖 AI Agriculture Chatbot
- Local AI assistant powered by Ollama
- No external AI API required
- Farmer-friendly responses
- Agriculture-focused knowledge

### 📚 Retrieval-Augmented Generation (RAG)
- PDF-based agricultural knowledge base
- Context-aware answers
- Semantic search for relevant information
- Local vector database

### 🌿 Crop Disease Detection
- Upload leaf images
- AI-powered disease prediction
- EfficientNet-B0 image classification model
- Confidence score for predictions

### 🌍 User-Friendly Interface
- Responsive modern UI
- Image upload support
- AI chat interface
- Clean and intuitive design

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- FastAPI
- Python

## AI & Machine Learning
- Ollama
- PyTorch
- TIMM
- EfficientNet-B0
- Pillow
- Torchvision

## RAG
- Sentence Transformers
- Vector Embeddings
- Semantic Retrieval

---

# 📂 Project Structure

```text
Kisan-AI
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── services
│   │   ├── rag
│   │   ├── llm
│   │   ├── schemas
│   │   └── database
│   │
│   ├── models
│   │   └── crop_disease_model.pth
│   │
│   ├── training
│   └── requirements.txt
│
├── frontend
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── logo_square.png
│
├── knowledge_base
│
├── requirements.txt
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ATHARVA-MALIK9/Kisan-AI.git

cd Kisan-AI
```

---

## Create Virtual Environment

```bash
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux / Mac

```bash
source .venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Install Ollama

Download and install Ollama from:

https://ollama.com/

Pull the required model:

```bash
ollama pull llama3.2:3b
```

---

## Start Ollama

```bash
ollama serve
```

---

## Run FastAPI Backend

```bash
cd backend

python -m uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

API Documentation

```
http://127.0.0.1:8000/docs
```

---

## Run Frontend

Open the frontend using **Live Server** in VS Code.

---

# 🧠 AI Components

## Local LLM

- Ollama
- Llama 3.2 (3B)

---

## Retrieval-Augmented Generation

- PDF Knowledge Base
- Semantic Search
- Context Retrieval

---

## Disease Detection

Model:

```
EfficientNet-B0
```

Framework:

```
PyTorch
```

Prediction:

- Tomato Healthy
- Tomato Late Blight

---

# 📸 Screenshots

## Home Page

> Add Screenshot Here

---

## AI Chat

> Add Screenshot Here

---

## Disease Detection

> Add Screenshot Here

---

## API Documentation

> Add Screenshot Here

---

# 🎯 Future Improvements

- Support additional crops
- Voice interaction
- Weather integration
- Fertilizer recommendation
- Pest detection
- Multi-language expansion
- Mobile application
- Database integration
- Farmer history management

---

# 📖 Learning Outcomes

This project helped in learning:

- FastAPI
- REST APIs
- Retrieval-Augmented Generation (RAG)
- Ollama
- Local LLM deployment
- Computer Vision
- PyTorch
- Transfer Learning
- EfficientNet
- Image Classification
- Git & GitHub
- Full Stack AI Development

---

# 👨‍💻 Author

**ATHARVA MALIK**

B.Tech CSE (AI & ML)

Aspiring AI Engineer | Data Analytics Enthusiast | Python Developer

GitHub:
https://github.com/ATHARVA-MALIK9

LinkedIn:
(www.linkedin.com/in/
atharva-malik-864769384
)

---

# ⭐ If you like this project

Please consider giving this repository a ⭐ on GitHub.
