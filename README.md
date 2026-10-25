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

## What is wired

- Catalog pages read one data file, so dates and prices change without a redesign.
- Booking and contact forms calculate the fee and store the request in the browser (`localStorage`). They do not take card numbers or send email.
- Photographs are color panels. Add your own images when you have the rights to them.
