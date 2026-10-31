// ============================================================
// portfolioData.js
// Central data store for Yugandhar Goud E's Portfolio
// ============================================================

export const personalInfo = {
  name: "Yugandhar Goud E",
  firstName: "Yugandhar Goud E",
  brandName: "Yugandhar Goud E", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Kurnool, Andhra Pradesh",
  phone: "+91 9966553159",
  emails: {
    primary: "edigayugandhar8@gmail.com",
    secondary: "",
  },
  summary: "Recent Computer Science graduate who is passionate about building full-stack web applications using Java and modern web technologies.",
  resumeUrl: "/Yugandhar.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/edigayugandhar",
  linkedin: "https://www.linkedin.com/in/yugandhar-ediga/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Yugandhar Goud E",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Passionate Java Full Stack Developer building robust web applications, scalable backend APIs, and intuitive user experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:edigayugandhar8@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Yugandhar.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Yugandhar Goud E</span>, a passionate fresher interested in software development and Java Full Stack Development based in Kurnool, Andhra Pradesh, sharpening my skills through the placement training program at TAP Academy. I have hands-on experience with Java, SQL, HTML, CSS, JavaScript, React, and database technologies through learning and project development. My goal is to become a skilled software developer, grow through real-world experience, and contribute to an innovative engineering team.`,
  techStack: ["Java", "Spring Boot", "SQL", "React", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined engineering process delivering scalable, high-performance full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing system requirements, data workflows, and entity constraints before writing code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting normalized relational schemas, modular MVC components, and clean RESTful APIs.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing robust Java backends and responsive frontend views with strong OOP and clean exception handling.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing end-to-end CRUD flows, configuring server environments on Tomcat, and ensuring production readiness.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "SQL" },
        { name: "Python" },
        { name: "Core Java (OOP, Collections)" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot" },
        { name: "Microservices" },
        { name: "REST APIs" },
        { name: "JDBC" },
        { name: "Servlets & JSP" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "Relational Database Design" },
        { name: "Database Normalization" },
        { name: "SQLite" },
      ],
    },
    {
      title: "Web & Tools",
      skills: [
        { name: "HTML & CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Git & GitHub" },
        { name: "VS Code & Eclipse" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Validated foundational knowledge of AWS cloud concepts, core services, security, pricing, and cloud architecture.",
    role: "Amazon Web Services (2025)",
    badge: "Cloud Certified",
  },
  {
    title: "Java Programming Certificate",
    description: "Demonstrated knowledge of Java programming fundamentals and problem-solving through comprehensive assessments.",
    role: "HackerRank",
    badge: "Problem Solving",
  },
];

export const internshipsList = [];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex algorithmic and system logic into clean, structured solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical concepts, project workflows, and architectural ideas clearly.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working smoothly with peers, contributing to shared repositories, and valuing constructive feedback.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating database query performance, schema design, and system scalability.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "E-Commerce Fashion Store",
    description: "Java-based e-commerce platform implementing product browsing, user authentication, shopping cart, and order management using JDBC, Servlets, and MySQL deployed on Apache Tomcat.",
    techTags: ["Java", "JDBC", "MySQL", "JSP", "Servlets", "Apache Tomcat"],
    links: {
      github: "https://github.com/edigayugandhar/ecommerce-fashion-store",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "MediCore – Medical Dashboard Platform",
    description: "Hospital appointment management system featuring role-based access for Admin and Patient modules, REST API integration, and SQLite relational database operations.",
    techTags: ["REST APIs", "JavaScript", "HTML", "CSS", "SQLite"],
    links: {
      github: "https://github.com/edigayugandhar/medicore-dashboard",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: "☁️" },
    { name: "Java Programming Certificate", issuer: "HackerRank", icon: "☕" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/yugandhar-ediga/",
};

export const education = {
  degree: "B.Tech, Computer Science and Engineering (Data Science)",
  institution: "Rajeev Gandhi Memorial College of Engineering And Technology",
  cgpa: "",
  graduation: "2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Spring Boot · React · MySQL", "Building Scalable Web Solutions"],
  credential: "B.Tech, CSE (Data Science)",
  copyright: `© ${new Date().getFullYear()} Yugandhar Goud E | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

// Navigation links used for smooth anchor scrolling
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
