<div align="center">

# 🌾 Kisan AI

### AI-Powered Agriculture Assistant using Ollama, FastAPI, RAG & Computer Vision

![Python](https://img.shields.io/badge/Python-3.11+-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)
![Ollama](https://img.shields.io/badge/Ollama-Local%20LLM-black?style=for-the-badge)
![PyTorch](https://img.shields.io/badge/PyTorch-Deep%20Learning-red?style=for-the-badge&logo=pytorch)
![GitHub](https://img.shields.io/badge/Open%20Source-GitHub-success?style=for-the-badge&logo=github)

**An AI-powered assistant that helps farmers using Local LLMs, Retrieval-Augmented Generation (RAG), and Deep Learning for crop disease detection.**

⭐ If you found this project useful, consider starring the repository.

</div>

---

# 📌 Overview

Kisan AI is a complete AI-powered agriculture assistant developed to support farmers by answering agriculture-related questions and detecting crop diseases from leaf images.

Unlike traditional chatbot projects, Kisan AI combines **Large Language Models**, **Computer Vision**, and **Retrieval-Augmented Generation (RAG)** into a single application that works locally without relying on cloud AI APIs.

---

# ✨ Features

## 🤖 AI Chat Assistant

- Powered by **Ollama**
- Local LLM inference
- Farmer-friendly responses
- Agriculture-focused knowledge
- No external AI API required

---

## 📚 Retrieval-Augmented Generation (RAG)

- Agricultural PDF knowledge base
- Semantic document retrieval
- Context-aware responses
- Local vector search

---

## 🌿 Crop Disease Detection

- Upload crop leaf images
- EfficientNet-B0 classifier
- AI disease prediction
- Confidence score
- Fast image inference

---

## 💻 Modern User Interface

- Responsive design
- Image upload support
- AI chat interface
- Clean and minimal UI

---

# 🧠 AI Architecture

```text
                Farmer

                   │
                   ▼

          Ask Question / Upload Image

                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼

    AI Chat             Disease Detection

        │                     │

        ▼                     ▼

   Ollama LLM         EfficientNet-B0

        │

        ▼

Knowledge Retrieval (RAG)

        │

        ▼

 Agricultural PDFs

        │

        ▼

  Farmer-Friendly Answer
```

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | FastAPI, Python |
| LLM | Ollama |
| Machine Learning | PyTorch, TIMM |
| CNN Model | EfficientNet-B0 |
| Image Processing | Pillow, Torchvision |
| Retrieval | Sentence Transformers |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
Kisan-AI
│
├── backend
│   ├── app
│   │
│   ├── api
│   ├── database
│   ├── llm
│   ├── rag
│   ├── schemas
│   ├── services
│   │
│   ├── models
│   │   └── crop_disease_model.pth
│   │
│   ├── training
│   │
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

# 🚀 Installation

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

Windows

```bash
.venv\Scripts\activate
```

Linux / Mac

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

Download Ollama from

https://ollama.com/

Pull the model

```bash
ollama pull llama3.2:3b
```

Start Ollama

```bash
ollama serve
```

---

## Run Backend

```bash
cd backend

python -m uvicorn app.main:app --reload
```

Open

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## Run Frontend

Open the frontend using **Live Server** in VS Code.

---

# 🌿 Disease Detection Model

| Model | EfficientNet-B0 |
|--------|-----------------|
| Framework | PyTorch |
| Task | Image Classification |
| Input Size | 224 × 224 |
| Dataset | Tomato Leaf Images |

Predicted Classes

- Tomato Healthy
- Tomato Late Blight

---

# 📖 AI Workflow

```text
Leaf Image

      │

      ▼

FastAPI Upload

      │

      ▼

EfficientNet-B0

      │

      ▼

Disease Prediction

      │

      ▼

Confidence Score

      │

      ▼

Farmer Result
```

---



# 🎯 Future Scope

- Support multiple crop types
- Voice-based interaction
- Weather integration
- Fertilizer recommendation
- Pest detection
- Farmer history
- Database integration
- Mobile application

---

# 📚 Learning Outcomes

Through this project I learned:

- FastAPI
- REST API Development
- Local LLM Deployment
- Ollama
- Retrieval-Augmented Generation
- PyTorch
- Deep Learning
- Transfer Learning
- EfficientNet
- Computer Vision
- Image Classification
- Git & GitHub
- Full Stack AI Development

---

# 👨‍💻 Developer

## ATHARVA MALIK

**B.Tech CSE (AI & ML)**

Aspiring AI Engineer • Data Analytics Enthusiast • Python Developer

### GitHub

https://github.com/ATHARVA-MALIK9

### LinkedIn

(www.linkedin.com/in/
atharva-malik-864769384
)

---

<div align="center">

## ⭐ Support

If you found this project useful,

please consider giving it a ⭐ on GitHub.

Made with ❤️ using Python, FastAPI, Ollama & PyTorch

</div>
