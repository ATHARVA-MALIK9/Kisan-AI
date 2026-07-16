import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# ===========================
# Project Information
# ===========================

PROJECT_NAME = "Kisan AI"
VERSION = "1.0.0"

# ===========================
# Ollama Configuration
# ===========================

OLLAMA_MODEL = "llama3.2:3b"
OLLAMA_HOST = "http://localhost:11434"

# ===========================
# Upload Folder
# ===========================

UPLOAD_FOLDER = "uploads"

# ===========================
# Knowledge Base
# ===========================

KNOWLEDGE_BASE = "knowledge_base"

# ===========================
# Vector Database
# ===========================

VECTOR_DB = "vector_db"

# ===========================
# Database Configuration
# ===========================

MYSQL_HOST = os.getenv("MYSQL_HOST", "localhost")
MYSQL_PORT = int(os.getenv("MYSQL_PORT", 3306))
MYSQL_USER = os.getenv("MYSQL_USER", "root")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD", "")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE", "kisan_ai")