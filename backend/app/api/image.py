from fastapi import APIRouter, UploadFile, File

from app.services.image_service import ImageService
from app.services.disease_service import disease_service

router = APIRouter()


@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):

    image_path = ImageService.save_image(file)

    result = disease_service.predict(image_path)

    return {
        "success": True,
        "filename": file.filename,
        "disease": result["disease"],
        "confidence": result["confidence"]
    }