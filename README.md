# Yugandhar Goud E | Java Full Stack Developer Portfolio

A modern, responsive personal portfolio showcasing my technical skills, development projects, and passion for building practical web applications.

---

## Live Portfolio

**[Visit My Portfolio](https://yugandhar-goud-portfolio.vercel.app/)**

---

## About Me

Hi, I'm **Yugandhar Goud E**, an aspiring Java Full Stack Developer with a strong foundation in Java, SQL, and frontend technologies. I enjoy building responsive web applications, solving programming problems, and continuously improving my development skills through hands-on projects.

My goal is to grow as a software engineer and contribute to building reliable and user-friendly applications.

---

## Tech Stack

| Category | Technologies |
|---|---|
| Programming Language | Java, JavaScript |
| Frontend | React 19, HTML5, CSS3 |
| Database | SQL, MySQL |
| Styling | Tailwind CSS 4 |
| Build Tool | Vite |
| Animations | Framer Motion, AOS (Animate on Scroll) |
| Visual Effects | WebGL (fluid splash cursor) |
| Integration | EmailJS |

---

## Key Features

- Modern and responsive user interface.
- Smooth animations and interactive visual effects.
- Dedicated sections for About Me, Skills, Projects, and Contact.
- Responsive layouts for desktop, tablet, and mobile devices.
- Project showcase highlighting development work.
- Contact form integration using EmailJS.
- Optimized production build using Vite.

---

## Project Structure

```
yugandhar-goud-e-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── about/
│   │       └── profile.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Internships.jsx
│   │   ├── Leadership.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── SoftSkills.jsx
│   │   ├── SplashCursor.jsx
│   │   └── TechnicalSkills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .env.local         ← not tracked by git
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/edigayugandhar/yugandhar-goud-e-portfolio.git
```

### Navigate to the project directory

```bash
cd yugandhar-goud-e-portfolio
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> If left unconfigured, the contact form falls back to opening your default email client with the message pre-composed.

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Contact

- **Email**: [edigayugandhar8@gmail.com](mailto:edigayugandhar8@gmail.com)
- **LinkedIn**: [linkedin.com/in/yugandhar-ediga-193105320](https://www.linkedin.com/in/yugandhar-ediga-193105320/)
- **GitHub**: [github.com/edigayugandhar](https://github.com/edigayugandhar)

---

Thank you for visiting my portfolio!
