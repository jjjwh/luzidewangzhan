import os

root_dir = "aztec-gods"
base_path = "/2022/06/aztec-gods/"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.html', '.css', '.js')):
            path = os.path.join(root, file)
            
            # Calculate relative depth
            rel_path = os.path.relpath(path, root_dir)
            depth = len(rel_path.split(os.sep)) - 1
            
            # Construct replacement prefix
            if depth == 0:
                prefix = "./"
            else:
                prefix = "../" * depth
            
            # Special case for CSS which might be in _app/assets
            # The base_path usually refers to the root of the deployed site.
            # So if we replace it with prefix, it should point to the root of our local folder.
            
            print(f"Processing {rel_path} (depth {depth}, prefix {prefix})")
            
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace(base_path, prefix)
            
            # Also replace "https://pudding.cool/2022/06/aztec-gods/" just in case
            new_content = new_content.replace("https://pudding.cool/2022/06/aztec-gods/", prefix)

            if content != new_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
