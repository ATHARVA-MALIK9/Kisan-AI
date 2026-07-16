from sentence_transformers import SentenceTransformer


class EmbeddingModel:
    """
    Generates vector embeddings using Sentence Transformers.
    """

    def __init__(self):
        self.model = SentenceTransformer("all-MiniLM-L6-v2")

    def encode_documents(self, documents):
        """
        Convert a list of document texts into embeddings.
        """

        return self.model.encode(
            documents,
            convert_to_numpy=True,
            show_progress_bar=True
        )

    def encode_query(self, query):
        """
        Convert a user query into an embedding.
        """

        return self.model.encode(
            query,
            convert_to_numpy=True
        )


# Singleton instance
embedding_model = EmbeddingModel()