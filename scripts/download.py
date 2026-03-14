import os
import urllib.request
from urllib.parse import urljoin

base_url = "https://pudding.cool/2022/06/aztec-gods/"
output_dir = "aztec-gods"

assets = [
    "_app/assets/start-c446e5f0.css",
    "_app/assets/pages/__layout.svelte-bcde33e9.css",
    "_app/assets/index-72194ee4.css",
    "_app/start-476544d6.js",
    "_app/chunks/vendor-ea8ed43c.js",
    "_app/chunks/preload-helper-1153c41b.js",
    "_app/pages/__layout.svelte-94229fb9.js",
    "_app/pages/index.svelte-75183b83.js",
    "_app/chunks/index-d573ac81.js",
    "assets/illustrations/imaginary-god-death.png",
    "assets/illustrations/imaginary-paper-doll-death.png",
    "assets/illustrations/imaginary-god-fertility.png",
    "assets/illustrations/imaginary-paper-doll-fertility.png",
    "_app/chunks/ScrollyPantheon-4f3ec2e9.js",
    "_app/assets/ScrollyPantheon-126c235f.css",
    "_app/chunks/Tlalte-8a550db9.js",
    "_app/chunks/iconographySetup-4e8e8521.js",
    "_app/assets/iconographySetup-f50c2c7e.css",
    "_app/chunks/linear-a465d416.js",
    "_app/chunks/Tezca-d2d0fbf0.js"
]

# Create directories
for asset in assets:
    path = os.path.join(output_dir, asset)
    os.makedirs(os.path.dirname(path), exist_ok=True)

# Download files
for asset in assets:
    url = urljoin(base_url, asset)
    path = os.path.join(output_dir, asset)
    print(f"Downloading {url} to {path}")
    try:
        urllib.request.urlretrieve(url, path)
    except Exception as e:
        print(f"Failed to download {asset}: {e}")
