from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import ChatService

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):

    answer = ChatService.generate_reply(request.message)

    return {
        "success": True,
        "user_message": request.message,
        "ai_response": answer
    }