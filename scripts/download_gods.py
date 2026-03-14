import os
import urllib.request
from urllib.parse import urljoin
import time

base_url = "https://pudding.cool/2022/06/aztec-gods/assets/gods/svg/"
output_dir = "aztec-gods/assets/gods/svg"

os.makedirs(output_dir, exist_ok=True)

with open('gods_list_1.txt', 'r') as f:
    gods = [line.strip() for line in f if line.strip()]

print(f"Downloading {len(gods)} gods...")

for god in gods:
    filename = f"{god}.svg"
    url = urljoin(base_url, filename)
    path = os.path.join(output_dir, filename)
    
    if os.path.exists(path):
        print(f"Skipping {filename}")
        continue
        
    print(f"Downloading {url}")
    try:
        urllib.request.urlretrieve(url, path)
        # Be nice to the server
        # time.sleep(0.1) 
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
