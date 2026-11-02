// ============================================================
// portfolioData.js
// Central data store for Yugandhar Goud Ediga's Portfolio
// ============================================================

export const personalInfo = {
  name: "Yugandhar Goud Ediga",
  firstName: "Yugandhar",
  brandName: "Yugandhar Goud Ediga", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Kurnool, Andhra Pradesh",
  phone: "+91-9966553159",
  emails: {
    primary: "edigayugandhar8@gmail.com",
    secondary: "",
  },
  summary: "Aspiring Java Full Stack Developer with a strong foundation in Java, SQL, and frontend technologies. Hands-on experience developing practical web applications, implementing database operations, CRUD workflows, and responsive user experiences.",
  resumeUrl: "/Yugandhar.pdf", // PDF inside /public
};

export const socialLinks = {
  github: "https://github.com/edigayugandhargoud-gif",
  linkedin: "https://www.linkedin.com/in/edigayugandhargoud",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Yugandhar Goud Ediga",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Entry-level Software Engineer passionate about building robust web applications, scalable Java backends, and responsive user experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:edigayugandhar8@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Yugandhar.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">YUGANDHAR GOUD EDIGA</span>, a Java Full Stack Developer with a strong foundation in Java, SQL, HTML, CSS, JavaScript, and React. I have hands-on experience building web applications through practical projects. I enjoy solving problems, writing clean code, and developing user-friendly applications. My goal is to grow as a software engineer and contribute to building impactful technology solutions.`,
  techStack: ["Java", "Spring Boot", "SQL", "JDBC", "React", "JavaScript", "MySQL"],
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
        { name: "Core Java (OOP, Exception Handling, Collections)" },
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
      title: "Web Development & Tools",
      skills: [
        { name: "HTML5 & CSS3" },
        { name: "JavaScript" },
        { name: "Git & GitHub" },
        { name: "Eclipse IDE" },
        { name: "VS Code" },
        { name: "MySQL Workbench" },
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
    badge: "Java Skill",
  },
  {
    title: "Foundations of AI & Machine Learning",
    description: "Gained foundational knowledge of Artificial Intelligence, Machine Learning concepts, and data-driven problem-solving techniques.",
    role: "DataValley (2025)",
    badge: "AI & ML",
  },
];

export const internshipsList = [];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Practicing algorithms and data structures regularly on LeetCode and GeeksforGeeks.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical concepts, project workflows, and architectural ideas clearly.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working smoothly with peers, contributing to shared repositories, and valuing constructive code reviews.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating database query performance, schema normalization, and system scalability.",
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
      github: "https://github.com/edigayugandhargoud-gif/ecommerce-fashion-store",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "MediCore – Medical Dashboard Platform",
    description: "Hospital appointment management system featuring role-based access control for Admin and Patient modules, REST API integration, and SQLite database normalization.",
    techTags: ["REST APIs", "JavaScript", "HTML", "CSS", "SQLite"],
    links: {
      github: "https://github.com/edigayugandhargoud-gif/medicore-dashboard",
      demo: "",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (2025)", icon: "☁️" },
    { name: "Java Programming Certificate", issuer: "HackerRank", icon: "☕" },
    { name: "Foundations of AI & ML", issuer: "DataValley (2025)", icon: "🤖" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/edigayugandhargoud",
};

export const education = {
  degree: "Bachelor of Technology in Data Science",
  institution: "Rajeev Gandhi Memorial College of Engineering and Technology (RGMCET), Nandyal",
  cgpa: "7.27 / 10.0",
  graduation: "2022 – 2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Spring Boot · React · MySQL", "Building Practical Web Solutions"],
  credential: "B.Tech in Data Science (RGMCET)",
  copyright: `© 2026 Yugandhar Goud Ediga | Built with React`,
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
