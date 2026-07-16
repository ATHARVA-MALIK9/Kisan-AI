from pathlib import Path
import shutil


UPLOAD_FOLDER = Path("uploads")

UPLOAD_FOLDER.mkdir(exist_ok=True)


class ImageService:

    @staticmethod
    def save_image(file):

        file_path = UPLOAD_FOLDER / file.filename

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return str(file_path)