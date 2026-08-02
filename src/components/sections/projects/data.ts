export interface Project {
  title: string;
  year: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Itinera.ai",
    year: "2026",
    description:
      "Automated travel plan for users that can be downloaded as pdf ",
    stack: ["Next.js", "TypeScript", "geminiAPI", "supabase", "prisma"],
    image: "/itinera.png",
    liveUrl: "https://itinera-ai-gray.vercel.app/",
    repoUrl: "https://github.com/dionisiusragil13/travel-plan",
  },
  {
    title: "TickTracker",
    year: "2026",
    description:
      "Full-stack IT support ticketing system with role-based issue tracking",
    stack: ["PHP", "laravel", "vue.js", "MySQL"],
    image: "/ticktrack.png",
    liveUrl: "",
    repoUrl: "https://github.com/dionisiusragil13/ticketing-web-app",
  },
  {
    title: "App Chat",
    year: "2025",
    description:
      "Real time chat app with key fundamental of website development ",
    stack: [
      "javascript",
      "Node.js",
      "react",
      "MongoDB",
      "REST API",
      "Express.js",
    ],
    image: "/ChatApp.png",
    liveUrl: "",
    repoUrl: "https://github.com/dionisiusragil13/chat-app",
  },
  {
    title: "Space War",
    year: "2023",
    description: "2D game with Unity",
    stack: ["Unity", "C#"],
    image: "/SpaceWar.png",
    liveUrl: "",
    repoUrl: "https://github.com/dionisiusragil13/Space-war",
  },
  {
    title: "LeafSense",
    year: "2025",
    description: "Website to classifify a hearbal leaf with customized model",
    stack: ["Python", "Flask", "React", "tensorflow"],
    image: "/leafsense.png",
    liveUrl: "",
    repoUrl: "https://github.com/dionisiusragil13/herbal-leaf-classifier",
  },
  {
    title: "ReadAgain",
    year: "2026",
    description: "Website to read random paper 1 day 1 paper",
    stack: ["Typescript", "next.js", "MongoDB", "RestAPI"],
    image: "/image.png",
    liveUrl: "https://read-again-iota.vercel.app/",
    repoUrl: "https://github.com/dionisiusragil13/Read-Again",
  },
];
