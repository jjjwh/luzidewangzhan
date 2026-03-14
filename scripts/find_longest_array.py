import re

path = r"aztec-gods\_app\chunks\ScrollyPantheon-4f3ec2e9.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find arrays of strings
# Matches ["str1","str2",...]
# This regex matches `[` followed by `"str"` or `'str'` separated by comma, ending with `]`
# It handles spaces.
pattern = re.compile(r'\[(?:\s*["\'][^"\']+["\']\s*,?)+\]')

matches = pattern.findall(content)

print(f"Found {len(matches)} potential string arrays.")

# Sort by length (number of items)
parsed_arrays = []
for m in matches:
    items = re.findall(r'["\']([^"\']+)["\']', m)
    parsed_arrays.append((len(items), items))

parsed_arrays.sort(key=lambda x: x[0], reverse=True)

for i, (length, items) in enumerate(parsed_arrays[:5]):
    print(f"\nArray {i+1} (Length: {length}):")
    print(f"First 5: {items[:5]}")
    if length > 20:
        print(f"Last 5: {items[-5:]}")
    
    if length > 50:
        with open(f'gods_list_{i+1}.txt', 'w') as f:
            for item in items:
                f.write(item + '\n')
