# Dhanush — Portfolio

Static site, no build step. Vercel serves it as-is.

```
index.html            page structure
assets/content.js     ALL text: projects, skills, experience, links (edit this)
assets/app.js         interactions and animations
assets/styles.css     design
assets/hero.webp      hero photo (transparent background)
assets/badge.webp     ID-badge photo
Dhanush-Resume.pdf    resume served by the Download buttons and at /resume
og.png                link-preview image (LinkedIn, WhatsApp, X)
vercel.json           clean URLs, caching, security headers, /resume redirect
404.html              not-found page
```

## Deploy on Vercel

**Option A: from GitHub (auto-deploys on every push)**
1. Create a GitHub repository and upload everything in this folder (keep the structure).
2. On vercel.com: Add New, Project, then import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Deploy.

**Option B: from your computer**
```
npm i -g vercel
vercel          # first deploy (preview)
vercel --prod   # production
```

## After the first deploy
1. In `index.html`, uncomment the `canonical` and `og:url` lines and replace `YOUR-DOMAIN`
   with your live address, and change `/og.png` to `https://YOUR-DOMAIN/og.png`.
2. Add LinkedIn and GitHub in `assets/content.js` (`CONFIG.linkedin`, `CONFIG.github`);
   the buttons appear automatically.
3. Custom domain: Vercel project, Settings, Domains.

## Updating
- Text and projects: `assets/content.js`
- Resume: replace `Dhanush-Resume.pdf` (keep the name)
- Photo: replace `assets/hero.webp` / `assets/badge.webp` (transparent background PNG/WebP)
