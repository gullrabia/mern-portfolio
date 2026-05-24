# Rabia Gull — MERN Stack Developer Portfolio

A modern, animated portfolio website built with React + Vite + TypeScript + Tailwind CSS v4.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **React Hook Form** + **Zod** — contact form validation
- **React Icons** — tech stack icons
- **Tanstack Query** — async state

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Setting Up the Contact Form

The contact form uses **Formspree** (free, no backend needed):

1. Go to [formspree.io](https://formspree.io) and sign up for free
2. Create a new form — they'll give you a Form ID like `xzzpqabc`
3. Open `src/components/Contact.tsx`
4. Replace `YOUR_FORMSPREE_ID` with your actual ID:

```ts
const FORMSPREE_ID = "xzzpqabc"; // ← your ID here
```

That's it — the form will send emails directly to your inbox.

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

## Customising Your Info

Update these files to personalise:

| What to change | File |
|---|---|
| Name, bio, skills | `src/components/About.tsx` |
| Work experience | `src/components/Experience.tsx` |
| Projects | `src/components/Projects.tsx` |
| Services offered | `src/components/Services.tsx` |
| Education | `src/components/Education.tsx` |
| Social links, email | `src/components/Footer.tsx`, `Contact.tsx`, `Hero.tsx` |
| Your photo | Replace `public/rabia-gull.png` |
| Resume PDF | Add your PDF as `public/resume.pdf` |
| Site title & meta | `index.html` |
