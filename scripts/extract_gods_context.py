import re

path = r"aztec-gods\_app\chunks\index-d573ac81.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of "quetzalcoatl"
matches = [m.start() for m in re.finditer("quetzalcoatl", content)]

for start_index in matches:
    print(f"\n--- Checking occurrence at {start_index} ---")
    print(content[start_index-200:start_index+500])
