import json
import os

topics = [
    "Swedish massage",
"Deep tissue massage",
"Aromatherapy massage",
"Hot stone massage",
"Head, neck & shoulder massage",
"Reflexology",
]

# Create output folder
output_dir = r"D:\Faces\faces-consent-data\aftercare\Massage"
os.makedirs(output_dir, exist_ok=True)

for topic in topics:
    data = {
        "topic": topic
    }

    # Safe filename (does NOT change topic name inside JSON)
    filename = topic.replace("/", "_").replace(":", "").replace(" ", "_") + ".json"
    filepath = os.path.join(output_dir, filename)

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

print("JSON files created successfully.")
