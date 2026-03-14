import re

path = r"aztec-gods\_app\chunks\index-d573ac81.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the context of "assets/gods/svg"
start_index = content.find("assets/gods/svg")
if start_index != -1:
    # Print 500 characters around it
    print(content[start_index-200:start_index+500])
else:
    print("Not found")
