import re

path = r"aztec-gods\_app\chunks\index-d573ac81.js"

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of "ometeotl"
matches = [m.start() for m in re.finditer("ometeotl", content)]

for start_index in matches:
    print(f"\n--- Checking occurrence at {start_index} ---")
    
    # Limit search to 5000 chars backwards
    list_start = -1
    bracket_count = 0
    
    for i in range(start_index, max(-1, start_index-5000), -1):
        char = content[i]
        if char == ']':
            bracket_count += 1
        elif char == '[':
            if bracket_count > 0:
                bracket_count -= 1
            else:
                list_start = i
                break
    
    if list_start != -1:
        list_end = content.find(']', start_index)
        if list_end != -1:
            raw_list = content[list_start:list_end+1]
            if '"' in raw_list and '{' not in raw_list:
                print("Found likely god list!")
                print(raw_list)
                items = re.findall(r'"([^"]+)"', raw_list)
                print(f"Total items found: {len(items)}")
                with open('gods_list.txt', 'w') as f:
                    for item in items:
                        f.write(item + '\n')
                break
            else:
                 print("Found a list, but it contains objects or is not the target list.")
        else:
            print("Could not find end of list")
    else:
        print("Could not find start of list")
