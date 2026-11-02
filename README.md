# Yugandhar Goud E — Portfolio

A high-performance personal developer portfolio showcasing scalable Java backends, relational database schemas, and modern responsive React web applications.

## Live Site
- **URL**: https://YOUR-SITE-URL/

## Tech Stack
- **Frontend & Core**: React 19, JavaScript (JSX), HTML5, CSS3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations & Effects**: Framer Motion, AOS (Animate on Scroll), WebGL (fluid splash cursor)
- **Forms & Integration**: EmailJS (@emailjs/browser)

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file in the root directory to configure the EmailJS contact form:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(Note: If left unconfigured, the contact form automatically falls back to opening the default email client with your message pre-composed.)*
