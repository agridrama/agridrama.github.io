# agridrama.github.io

Personal website (CV and academic blog) built with [Astro](https://astro.build/).

https://agridrama.github.io/

## Development

Requires Node.js 22.12 or later.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the build
```

## Editing content

| What               | Where                          |
| ------------------ | ------------------------------ |
| Name, bio, links   | `src/data/site.ts`             |
| CV                 | `src/data/cv.ts`               |
| Blog posts         | `src/content/blog/*.md`        |
| Colors, typography | `src/styles/global.css`        |

### Writing a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL (`my-post.md` → `/blog/my-post/`).

```md
---
title: Post title
description: One-line summary (optional)
pubDate: 2026-10-10
updatedDate: 2026-10-12 # optional
tags: [tag1, tag2] # optional
draft: true # optional; drafts are shown only in `npm run dev`
---

Body text. Math is supported: $a^2 + b^2 = c^2$
```

## Deployment

Pushing to `main` builds and deploys the site with GitHub Actions (`.github/workflows/deploy.yml`).
In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
