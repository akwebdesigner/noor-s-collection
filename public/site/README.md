# Noor's Collection — static website

Plain HTML, CSS and vanilla JavaScript. No build step, no npm, no server code.

## Files
```
index.html
style.css
script.js
images/
```

## Deploy on GitHub Pages
1. Create a repository and upload these files at the repository root.
2. Settings → Pages → Source: `Deploy from a branch` → branch `main`, folder `/ (root)`.
3. Your site is live at `https://<username>.github.io/<repo>/`.

## Configure your details
Open `script.js` and edit the `CONFIG` object at the very top of the file
(WhatsApp number, email, Instagram and Facebook links).

## Add or edit products
All products live in the `PRODUCTS` array in `script.js`, and categories in `CATEGORIES`.
Each product has: id, name, category, price, description, fabric, color, sizes, image, badge.
