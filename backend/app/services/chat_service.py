from app.llm.ollama_client import ollama_client
from app.rag.retrieval import retriever


class ChatService:

    @staticmethod
    def generate_reply(message: str):

        if not message.strip():

            return "Please enter a valid question."

        documents = retriever.search(message)

        context = ""

        for doc in documents:

            context += doc["content"] + "\n\n"

        prompt = f"""
You are Kisan AI.

You are an agriculture expert.

Answer ONLY using the information provided below.

If the answer is not available in the documents,
then answer using your own agricultural knowledge.

============================

Knowledge Base:

{context}

============================

Farmer Question:

{message}

============================

Give a simple,
practical,
farmer-friendly answer.
"""

        return ollama_client.generate_response(prompt)