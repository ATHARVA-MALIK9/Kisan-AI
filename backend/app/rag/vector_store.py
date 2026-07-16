import os
import faiss
import pickle
import numpy as np

from app.rag.document_loader import DocumentLoader
from app.rag.embedding import embedding_model


class VectorStore:

    def __init__(self):

        self.loader = DocumentLoader()

        self.index = None

        self.documents = []

        self.index_path = "vector_db/index.faiss"

        self.metadata_path = "vector_db/metadata.pkl"

    def build_index(self):

        print("Loading Documents...")

        docs = self.loader.load_documents()

        if len(docs) == 0:

            print("No documents found.")

            return

        self.documents = docs

        texts = [doc["content"] for doc in docs]

        print("Generating Embeddings...")

        embeddings = embedding_model.encode_documents(texts)

        embeddings = np.array(embeddings).astype("float32")

        dimension = embeddings.shape[1]

        self.index = faiss.IndexFlatL2(dimension)

        self.index.add(embeddings)

        os.makedirs("vector_db", exist_ok=True)

        faiss.write_index(self.index, self.index_path)

        with open(self.metadata_path, "wb") as f:

            pickle.dump(self.documents, f)

        print("Vector Database Created Successfully!")

    def load_index(self):

        if not os.path.exists(self.index_path):

            print("Index not found.")

            return False

        self.index = faiss.read_index(self.index_path)

        with open(self.metadata_path, "rb") as f:

            self.documents = pickle.load(f)

        print("Vector Database Loaded Successfully!")

        return True


vector_store = VectorStore()