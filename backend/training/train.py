import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader, random_split
from pathlib import Path
import timm

# -----------------------
# Paths
# -----------------------

BASE_DIR = Path(__file__).resolve().parent.parent

DATASET_PATH = BASE_DIR / "dataset"
MODEL_PATH = BASE_DIR / "models"

MODEL_PATH.mkdir(exist_ok=True)

# -----------------------
# Device
# -----------------------

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print("Using:", device)

# -----------------------
# Dataset
# -----------------------

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

dataset = datasets.ImageFolder(
    DATASET_PATH,
    transform=transform
)

print("Classes:", dataset.classes)
print("Total Images:", len(dataset))

train_size = int(len(dataset) * 0.8)
val_size = len(dataset) - train_size

train_dataset, val_dataset = random_split(
    dataset,
    [train_size, val_size]
)

train_loader = DataLoader(
    train_dataset,
    batch_size=2,
    shuffle=True,
    num_workers=0
)

val_loader = DataLoader(
    val_dataset,
    batch_size=2,
    shuffle=False,
    num_workers=0
)

# -----------------------
# Model
# -----------------------

model = timm.create_model(
    "efficientnet_b0",
    pretrained=True,
    num_classes=2
)

model.to(device)

criterion = nn.CrossEntropyLoss()

optimizer = optim.Adam(
    model.parameters(),
    lr=0.0001
)

# -----------------------
# Training
# -----------------------

epochs = 1

for epoch in range(epochs):

    model.train()

    running_loss = 0
    correct = 0
    total = 0

    for images, labels in train_loader:

        images = images.to(device)
        labels = labels.to(device)

        optimizer.zero_grad()

        outputs = model(images)

        loss = criterion(outputs, labels)

        loss.backward()

        optimizer.step()

        running_loss += loss.item()

        _, predicted = outputs.max(1)

        total += labels.size(0)
        correct += predicted.eq(labels).sum().item()

    accuracy = 100 * correct / total

    print(f"\nEpoch {epoch+1}/{epochs}")
    print(f"Loss : {running_loss:.4f}")
    print(f"Training Accuracy : {accuracy:.2f}%")

# -----------------------
# Save Model
# -----------------------

torch.save(
    {
        "model_state_dict": model.state_dict(),
        "classes": dataset.classes
    },
    MODEL_PATH / "crop_disease_model.pth"
)

print("\n==============================")
print("Model Saved Successfully")
print("==============================")