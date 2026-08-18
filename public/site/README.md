# Noor's Collection — static website

This folder is the complete website: `index.html`, `style.css`, `script.js`, `images/`.
All paths are relative (`./...`), so it works from any GitHub Pages URL, including
project pages like `https://user.github.io/repo/`.

## Deploying (recommended, already set up)

The workflow `.github/workflows/deploy-pages.yml` publishes this folder automatically.

1. Push the repository to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The live URL then opens straight into the website — not the README.

## Alternative: deploy from a branch

If you prefer **Settings → Pages → Source: Deploy from a branch**, GitHub serves the
repository root, which shows the README. In that case, copy the contents of this
folder (`index.html`, `style.css`, `script.js`, `images/`, `.nojekyll`) into the root
of the repository, or into a `docs/` folder and pick `/docs` as the folder.

`.nojekyll` is included so Jekyll never rewrites or skips any files.
