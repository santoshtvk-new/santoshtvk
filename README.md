# Santosh TVK Portfolio

An immersive 3D portfolio experience built with Next.js, React Three Fiber, Framer Motion, and a content-first architecture.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

With the current static export config, the build generates a deployable `out/` folder.

## Deploy to GitHub Pages with a custom domain

1. Push the `portfolio` project to a GitHub repository.
2. Run `npm run build`.
3. Publish the generated `out/` directory to the `gh-pages` branch or configure GitHub Pages to serve it.
4. In your DNS provider, point your custom domain to GitHub Pages.
5. Add a `CNAME` file inside `public/` if you want the custom domain baked into the exported output.

For a root domain, GitHub recommends A records to the GitHub Pages IPs. For a subdomain, use a CNAME record.

## Update content later

Main portfolio content lives in `src/content/portfolio.ts`.

- Update hero copy, story, skills, projects, experience, and contact details there.
- Replace images in `public/images/`.
- Replace the resume PDF in `public/resume/`.
- Adjust layout and motion in `src/app/page.tsx`.
- Adjust the 3D world in `src/components/Scene.tsx`.

## Key files

- `src/app/page.tsx`: page composition and interactions
- `src/components/Scene.tsx`: immersive 3D scene
- `src/content/portfolio.ts`: structured content model
- `src/app/globals.css`: visual system and responsive styling
- `src/app/layout.tsx`: SEO metadata and fonts
