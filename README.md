# yoga-studio-app

Angular site for **Ajay's Ashtanga Vinyasa School**: courses, retreats, online lessons, teachers, venue, journal, contact, affiliate, and booking requests.

Content, fees, teachers, and reviews are sample data in `src/app/data/catalog.ts`. Contact email, phone, and social URLs live in the same file.

## Run locally

```bash
npm install
npm start
```

The app serves at http://localhost:4200.

## Build

```bash
npm run build
```

Static output is in `dist/yoga-school/browser` (use that folder for static hosting).

## Deploy on Cloudflare Pages (free)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub if prompted, then choose the **`yoga-studio-app`** repository.
3. **Build settings** (repo root is the Angular app — no monorepo subfolder):

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Build command | `npm ci && npm run build` |
   | Build output directory | `dist/yoga-school/browser` |

4. **Environment variables** → add **`NODE_VERSION`** = **`20`** (Angular 19 needs a recent Node).
5. Save and deploy. Cloudflare runs the build and gives you a URL like `https://yoga-studio-app.pages.dev` (name may vary).
6. After each push to `main`, Cloudflare rebuilds automatically.

**Angular routes on Cloudflare:** Do not add a Netlify-style `public/_redirects` file (`/* /index.html 200`). Cloudflare rejects that rule as an infinite loop. Pages serves `index.html` for unknown paths automatically when the build output has **no** top-level `404.html` (default `ng build` is fine).

## What is wired

- Catalog pages read one data file, so dates and prices change without a redesign.
- Booking and contact forms calculate the fee and store the request in the browser (`localStorage`). They do not take card numbers or send email.
- Photographs are color panels. Add your own images when you have the rights to them.
