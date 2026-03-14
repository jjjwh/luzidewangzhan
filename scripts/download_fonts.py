import os
import urllib.request
from urllib.parse import urlparse

fonts = [
    "https://pudding.cool/assets/fonts/national/National2NarrowWeb-Black.woff2",
    "https://pudding.cool/assets/fonts/national/National2NarrowWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/national/National2NarrowWeb-Extralight.woff2",
    "https://pudding.cool/assets/fonts/national/National2NarrowWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2",
    "https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposHeadlineWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2"
]

base_dir = "aztec-gods"

for url in fonts:
    parsed = urlparse(url)
    # Extract path part: /assets/fonts/...
    path = parsed.path.lstrip('/')
    local_path = os.path.join(base_dir, path)
    
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    print(f"Downloading {url} to {local_path}")
    try:
        urllib.request.urlretrieve(url, local_path)
    except Exception as e:
        print(f"Failed to download {url}: {e}")
