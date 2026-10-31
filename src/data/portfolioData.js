// Central portfolio data store
// All personal content, links, and text are maintained here

export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
  description: "Full-stack development, AI and augmented reality training program."
};

export const personalInfo = {
  name: "Yugandhar Goud E",
  role: "Full-Stack Developer",
  tagline: "Building scalable modern web applications with thoughtful user experiences.",
  email: "edigayugandhar8@gmail.com",
  location: "Bangalore, India",
  bio: "Passionate developer trained at TAP Academy, specializing in React, modern JavaScript, and clean full-stack web solutions with an eye for UI precision and performance.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:edigayugandhar8@gmail.com"
  }
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const aboutData = {
  title: "About Me",
  subtitle: "Driven by curiosity, fueled by clean code.",
  paragraphs: [
    "Hello! I'm Yugandhar, a dedicated developer with hands-on training from TAP Academy in full-stack development, modern frontend frameworks, and emerging tech.",
    "I focus on writing maintainable, accessible, and high-performance code. Whether designing responsive layouts in React & Tailwind CSS or developing robust backends, I bring passion and attention to detail to every project.",
    "When I'm not coding, I explore interactive web experiences, algorithms, and 3D/augmented reality web capabilities."
  ],
  stats: [
    { label: "Core Technologies", value: "10+" },
    { label: "Projects Completed", value: "8+" },
    { label: "Training Focus", value: "Full Stack & AR" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React 19", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS 4", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Framer Motion", level: "Intermediate" }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
      { name: "SQL & Relational DBs", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vite & Modern Tooling", level: "Advanced" },
      { name: "Responsive Design", level: "Expert" },
      { name: "Clean Architecture", level: "Advanced" },
      { name: "Performance Optimization", level: "Intermediate" }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding requirements, mapping user journeys, and laying down clean software architecture before writing code."
  },
  {
    step: "02",
    title: "UI Design & Prototyping",
    description: "Crafting intuitive visual hierarchies, responsive interfaces, and seamless interactions aligned with brand identity."
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Writing modular, type-safe, and self-documenting code using modern frontend and backend frameworks."
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous cross-browser testing, accessibility audits, and deploying reliable continuous delivery pipelines."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Interactive E-Commerce Platform",
    description: "A feature-rich store interface built with React and Tailwind CSS featuring dynamic filtering, cart state management, and smooth micro-interactions.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Real-time Task & Workflow Hub",
    description: "A collaborative productivity application with Kanban boards, live task updates, and responsive dashboard analytics.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Augmented Reality Product Showcase",
    description: "An experimental interactive web application demonstrating 3D product previews and AR web viewports built during TAP Academy training.",
    tags: ["JavaScript", "WebXR", "Three.js", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const contactData = {
  title: "Get In Touch",
  subtitle: "Have a project in mind or want to collaborate? Let's connect!",
  email: "edigayugandhar8@gmail.com",
  location: "Bangalore, India",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
