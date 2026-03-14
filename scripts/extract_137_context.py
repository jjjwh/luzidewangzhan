import re

path = r"aztec-gods\_app\chunks\index-d573ac81.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find context of "137"
start_index = content.find("137")
if start_index != -1:
    print(content[start_index-200:start_index+500])
else:
    print("Not found")
