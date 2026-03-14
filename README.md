# Aztec Gods Visualization Clone

This is a fully functional local clone of [https://pudding.cool/2022/06/aztec-gods/](https://pudding.cool/2022/06/aztec-gods/).

## Directory Structure

- `index.html`: Main entry point.
- `_app/`: Contains compiled Svelte JS and CSS chunks.
- `assets/`: Contains images, fonts, and sprite sheets.
- `scripts/`: Python scripts used for downloading and patching.

## How to Run

To ensure all interactive features and modules load correctly (avoiding CORS errors), you must use a local web server.

1. Open a terminal in this directory (`aztec-gods`).
2. Run the following command (requires Python):
   ```bash
   python -m http.server
   ```
3. Open your browser and navigate to:
   [http://localhost:8000](http://localhost:8000)

## Fixes Applied

- **Assets**: All missing images (including `ezpitzal.png` and sprites) have been downloaded.
- **Paths**: 
  - JavaScript asset paths corrected to be relative (`./assets/...`).
  - CSS font paths corrected (`../../../assets/...`).
  - `index.html` configuration updated for local root serving.

## Compatibility

Tested to work on Chrome, Edge, and Safari.
Performance is optimized with local assets.
