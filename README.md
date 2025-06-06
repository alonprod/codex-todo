# Codex Todo

This is a small Next.js todo application. The project is configured to export static files so it can be hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build & Export

```bash
npm run build
```

The static site will be generated in the `out/` directory.
You can set `NEXT_PUBLIC_BASE_PATH` before building if you need to deploy to a subpath (e.g., `/codex-todo`).


## Deploy to GitHub Pages

Make sure the repository has a `gh-pages` branch and run:

```bash
npm run deploy
```

This uses the `gh-pages` package to publish the contents of the `out/` folder.
