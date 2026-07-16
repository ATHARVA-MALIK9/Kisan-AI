import ollama
from app.config import OLLAMA_MODEL


class OllamaClient:
    def __init__(self):
        self.model = OLLAMA_MODEL

    def generate_response(self, prompt: str) -> str:
        """
        Generate a response using the local Ollama model.
        """

        try:
            response = ollama.chat(
                model=self.model,
                messages=[
                    {
                        "role": "system",
                        "content": (
                            "You are Kisan AI, an intelligent AI assistant "
                            "for Indian farmers. Give clear, practical, "
                            "easy-to-understand farming advice."
                        ),
                    },
                    {
                        "role": "user",
                        "content": prompt,
                    },
                ],
            )

            return response["message"]["content"]

        except Exception as e:
            return f"Error: {str(e)}"


# Singleton instance
ollama_client = OllamaClient()