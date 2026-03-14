import os

root_dir = "aztec-gods"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.css'):
            path = os.path.join(root, file)
            print(f"Updating {path}")
            
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace font URLs
            new_content = content.replace("https://pudding.cool/assets/fonts/", "../../assets/fonts/")
            
            # Replace other absolute paths if any
            # The HTML has relative paths like /2022/06/aztec-gods/...
            # I should make them relative to the current file location if possible, or just strip the prefix.
            
            if content != new_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print("Updated.")
            else:
                print("No changes.")
