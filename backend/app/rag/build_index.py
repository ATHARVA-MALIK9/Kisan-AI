from app.rag.vector_store import vector_store

if __name__ == "__main__":

    print("=" * 50)
    print("Building Kisan AI Knowledge Base")
    print("=" * 50)

    vector_store.build_index()

    print("=" * 50)
    print("Knowledge Base Ready!")
    print("=" * 50)