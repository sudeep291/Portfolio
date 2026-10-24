# S Sudeep – Data Engineering Portfolio

Personal portfolio of S Sudeep, an aspiring Data Engineer. Built with React 18, Vite, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

`.npmrc` sets `legacy-peer-deps=true` because npm 10 crashes (`reading 'edgesOut'`) while resolving
Vite 8's optional peer dependencies. Vercel reads the same file.

## Edit content

Everything you see on the page comes from **`src/data/portfolio.js`**: text, links, projects,
skills, workflow steps, achievements, FAQ, the page title/description and the link-preview tags.
Components only read from that file.

- `==words==` in a heading gives the lavender highlight, `**words**` makes text bold.
- Card colors: `'lilac' | 'lime' | 'sky' | 'pink' | 'mint' | 'butter'`.
- Skills listed in `skills.primary` are shown as filled chips.
- A project with `live: null` shows only its **View Source Code** button.
- After deploying, set `site.url` to the live address (used by link previews, `robots.txt` and `sitemap.xml`).

## Assets (`public/`)

| File | Used for |
| --- | --- |
| `profile.jpg` | About photo |
| `S_Sudeep_Resume.pdf` | Resume buttons |
| `projects/azure-pipeline.webp` | Azure pipeline project (screenshot of the ADF incremental pipeline) |
| `og-image.jpg` | Link preview image (1200×630) |
| `favicon.svg` | Browser tab icon |

The Lakehouse project shows an architecture diagram drawn in code (`src/components/LakehouseDiagram.jsx`),
based on the project's README.

## Contact form

Messages from the form are emailed to `site.email` by [FormSubmit](https://formsubmit.co) (free, no
account or key). The first message sent from a new address (localhost, then the Vercel URL) triggers an
**"Activate Form"** email: click it once and every later message arrives in the inbox. A hidden field
drops spam bots, and visitors see the email address as a fallback if sending fails.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repository. The Vite preset is detected
   automatically (build `npm run build`, output `dist`).
3. Update `site.url` in `src/data/portfolio.js` to the live URL and push again.
