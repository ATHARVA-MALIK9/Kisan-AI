import numpy as np

from app.rag.embedding import embedding_model
from app.rag.vector_store import vector_store


class Retriever:

    def __init__(self):

        if vector_store.index is None:
            vector_store.load_index()

    def search(self, query, top_k=3):
        """
        Search the vector database for the most relevant documents.
        """

        if vector_store.index is None:
            return []

        query_embedding = embedding_model.encode_query(query)

        query_embedding = np.array([query_embedding]).astype("float32")

        distances, indices = vector_store.index.search(
            query_embedding,
            top_k
        )

        results = []

        for idx in indices[0]:

            if idx < len(vector_store.documents):

                results.append(
                    vector_store.documents[idx]
                )

        return results


retriever = Retriever()