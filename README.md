# Uzair Rehman — Awwwards-style Portfolio

A complete, deployable Next.js portfolio for Uzair Rehman. Built with an original dark creative direction inspired by premium portfolio references, not copied from them.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- SEO metadata, sitemap, robots
- Contact form API route
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Contact form setup

The form works in demo mode without env variables and logs submissions in the server console. To receive real emails, create a free Resend account and add these variables in Vercel:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO=rehmanuzair43@gmail.com
CONTACT_FROM="Uzair Portfolio <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

For production, verify your domain in Resend and replace `CONTACT_FROM` with your verified email/domain.

## Customize

- Edit content: `lib/data.ts`
- Edit main sections: `components/Sections.tsx`
- Edit hero: `components/Hero.tsx`
- Edit SEO: `app/layout.tsx`
- Replace project visuals: `public/projects/*.svg`
- Replace OG image: `public/og.svg`

## Notes

The reference sites were used only for art direction cues: cinematic scroll feel, interface-inspired layouts, bold editorial typography, and premium micro-interactions. All code, copy, layout, and assets here are original.
