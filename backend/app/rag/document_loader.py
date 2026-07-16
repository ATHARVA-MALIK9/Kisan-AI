from pathlib import Path
from pypdf import PdfReader


class DocumentLoader:
    """
    Loads all PDF files from the knowledge base.
    """

    def __init__(self, knowledge_base_path="knowledge_base"):
        self.knowledge_base_path = Path(knowledge_base_path)

    def load_documents(self):
        """
        Read every PDF inside the knowledge base folder.
        Returns a list of dictionaries.
        """

        documents = []

        if not self.knowledge_base_path.exists():
            print("Knowledge base folder not found.")
            return documents

        pdf_files = list(self.knowledge_base_path.glob("*.pdf"))

        if len(pdf_files) == 0:
            print("No PDF files found.")
            return documents

        for pdf in pdf_files:

            try:

                reader = PdfReader(pdf)

                text = ""

                for page in reader.pages:
                    page_text = page.extract_text()

                    if page_text:
                        text += page_text + "\n"

                documents.append(
                    {
                        "filename": pdf.name,
                        "content": text
                    }
                )

                print(f"Loaded: {pdf.name}")

            except Exception as e:

                print(f"Error reading {pdf.name}: {e}")

        return documents