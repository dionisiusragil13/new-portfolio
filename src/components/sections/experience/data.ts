export interface ExperienceItem {
  role: string
  company: string
  period: string
  achievements: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 — Present",
    achievements: [
      "Built and deployed responsive web applications for clients across e-commerce and SaaS verticals.",
      "Migrated legacy jQuery interfaces to React and Next.js, reducing page load time by 40% on average.",
      "Set up CI/CD pipelines with automated testing for 5 client projects, ensuring consistent deployment quality.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2024 — Present",
    achievements: [
      "Contributed 12 pull requests to React component libraries and developer tooling repositories.",
      "Published and maintained a utility library averaging 200+ monthly downloads on npm.",
      "Reviewed community contributions and triaged issues across 3 active repositories.",
    ],
  },
]
