# AI Tools Suite (Full‑Stack)

A full‑stack AI tools web app with a modern landing page + authenticated dashboard, built with React (Vite), Tailwind CSS v4, shadcn/ui, Clerk authentication, Neon Postgres + Prisma, and Cloudinary uploads. [web:2][web:10][web:11]

## Features

- Marketing website
  - Navbar, Hero, AI Tools cards, Testimonials, Pricing/Plans, Contact, Footer.
- Authenticated dashboard
  - Credits overview, plan status, usage history table, billing panel.
- AI tools (extensible)
  - Text generation tools (article/blog titles/etc.)
  - Image tools (generate / background removal / object removal depending on provider)
- Secure authentication & user management with Clerk. [web:10]
- Postgres database on Neon with Prisma ORM (migrations + type-safe queries). [web:11]
- Image upload with Cloudinary (store uploaded asset URL + publicId in DB).

---

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS v4
- shadcn/ui (Radix UI primitives)
- lucide-react icons

shadcn/ui installation for Vite requires configuring path aliases and Vite resolve aliases. [web:2]

### Auth
- Clerk (`@clerk/clerk-react`) for sign-in/sign-up, protected routes, and session tokens. [web:10]

### Backend
- Node.js + Express API (recommended)
- AI provider SDKs (choose OpenAI/Anthropic/Gemini etc.)

### Database
- Neon (Postgres)
- Prisma ORM (schema + migrations + client). [web:11]

### Media
- Cloudinary for uploads (signed uploads recommended)

---

## Monorepo Structure (recommended)

