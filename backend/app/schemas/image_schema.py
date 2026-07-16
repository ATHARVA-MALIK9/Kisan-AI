from pydantic import BaseModel


class ImageUploadResponse(BaseModel):
    filename: str
    message: str