from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATASET_PATH = BASE_DIR / "dataset"


def get_dataset_info():

    classes = sorted(
        [folder for folder in DATASET_PATH.iterdir() if folder.is_dir()]
    )

    print("=" * 70)
    print("PLANTVILLAGE DATASET")
    print("=" * 70)

    print(f"\nTotal Classes : {len(classes)}\n")

    total_images = 0

    for folder in classes:

        images = list(folder.glob("*"))

        image_count = len(images)

        total_images += image_count

        print(f"{folder.name:<40} {image_count:>6} images")

    print("\n" + "=" * 70)

    print(f"TOTAL IMAGES : {total_images}")

    print("=" * 70)


if __name__ == "__main__":
    get_dataset_info()