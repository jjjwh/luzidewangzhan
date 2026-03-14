import os
import re

root_dir = "aztec-gods"
url_pattern = re.compile(r'url\s*\(([^)]+)\)')
string_pattern = re.compile(r'["\']([^"\']+\.(?:png|jpg|jpeg|gif|svg|webp))["\']')

found_urls = set()

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.css', '.js', '.html')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find url(...)
                    for match in url_pattern.finditer(content):
                        url = match.group(1).strip('"\'')
                        if not url.startswith('data:'):
                            found_urls.add(url)
                    # Find string paths
                    for match in string_pattern.finditer(content):
                        url = match.group(1)
                        if not url.startswith('http') and not url.startswith('//'):
                             found_urls.add(url)
            except Exception as e:
                print(f"Error reading {path}: {e}")

print("Found URLs:")
for url in sorted(found_urls):
    print(url)
