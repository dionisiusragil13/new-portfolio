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
    title: "Aether Commerce",
    year: "2025",
    description:
      "Storefront headless dengan checkout instan dan sinkronisasi inventori real-time.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Orbit Analytics",
    year: "2024",
    description:
      "Dashboard visualisasi data untuk tim growth, dengan filter dan ekspor laporan.",
    stack: ["React", "D3.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "#",
  },
  {
    title: "Nexus Dashboard",
    year: "2024",
    description:
      "Admin panel modular dengan sistem role-based access dan theme kustom.",
    stack: ["Vue", "Pinia", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Pulse Monitor",
    year: "2023",
    description:
      "Sistem monitoring infrastruktur dengan notifikasi real-time via WebSocket.",
    stack: ["Go", "React", "Docker"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    liveUrl: "#",
  },
];
