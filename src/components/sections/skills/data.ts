export interface Skill {
  name: string;
  iconUrl: string;
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", iconUrl: "python.svg", category: "Languages" },
  { name: "JavaScript", iconUrl: "javascript.svg", category: "Languages" },
  { name: "TypeScript", iconUrl: "typescript-svgrepo-com.svg", category: "Languages" },
  { name: "PHP", iconUrl: "php-svgrepo-com.svg", category: "Languages" },
  { name: "C#", iconUrl: "csharp.svg", category: "Languages" },

  // Frontend
  { name: "React", iconUrl: "react_light.svg", category: "Frontend" },
  { name: "NextJs", iconUrl: "nextjs-fill-svgrepo-com.svg", category: "Frontend" },
  { name: "Vue", iconUrl: "vue.svg", category: "Frontend" },
  { name: "HTML", iconUrl: "html5.svg", category: "Frontend" },
  { name: "CSS", iconUrl: "css_old.svg", category: "Frontend" },
  { name: "Tailwind CSS", iconUrl: "tailwindcss.svg", category: "Frontend" },
  { name: "React-router", iconUrl: "reactrouter.svg", category: "Frontend" },
  { name: "GSAP", iconUrl: "gsap.png", category: "Frontend" },

  // Backend
  { name: "Node.js", iconUrl: "nodejs.svg", category: "Backend" },
  { name: "Express", iconUrl: "expressjs.svg", category: "Backend" },
  { name: "Laravel", iconUrl: "laravel-svgrepo-com.svg", category: "Backend" },
  { name: "Flask", iconUrl: "flask-light.svg", category: "Backend" },
  { name: "Prisma", iconUrl: "prisma.svg", category: "Backend" },

  // Databases
  { name: "MongoDB", iconUrl: "mongodb-icon-dark.svg", category: "Databases" },
  { name: "MySQL", iconUrl: "mysql-icon-light.svg", category: "Databases" },

  // AI/ML
  { name: "TensorFlow", iconUrl: "tensorflow-icon-light.svg", category: "AI/ML" },
  { name: "Colab", iconUrl: "Google_Colaboratory.svg", category: "AI/ML" },

  // Design
  { name: "Figma", iconUrl: "figma.svg", category: "Design" },

  // Mobile
  { name: "Flutter", iconUrl: "flutter.svg", category: "Mobile" },

  // Game Dev
  { name: "Unity", iconUrl: "unity.svg", category: "Game Dev" },

  // Tools
  { name: "Github", iconUrl: "github_light.svg", category: "Tools" },
  { name: "Postman", iconUrl: "postman.svg", category: "Tools" },
  { name: "Opencode", iconUrl: "opencode.svg", category: "Tools" },
];
