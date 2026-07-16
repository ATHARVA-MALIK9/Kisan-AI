import torch
import timm
from torchvision import transforms
from PIL import Image
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent.parent

MODEL_PATH = BASE_DIR / "models" / "crop_disease_model.pth"


class DiseaseService:

    def __init__(self):

        checkpoint = torch.load(
            MODEL_PATH,
            map_location="cpu"
        )

        self.classes = checkpoint["classes"]

        self.model = timm.create_model(
            "efficientnet_b0",
            pretrained=False,
            num_classes=len(self.classes)
        )

        self.model.load_state_dict(
            checkpoint["model_state_dict"]
        )

        self.model.eval()

        self.transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor()
        ])

    def predict(self, image_path):

        image = Image.open(image_path).convert("RGB")

        image = self.transform(image)

        image = image.unsqueeze(0)

        with torch.no_grad():

            outputs = self.model(image)

            probabilities = torch.softmax(outputs, dim=1)

            confidence, predicted = torch.max(
                probabilities,
                1
            )

        return {
            "disease": self.classes[predicted.item()],
            "confidence": round(confidence.item() * 100, 2)
        }


disease_service = DiseaseService()