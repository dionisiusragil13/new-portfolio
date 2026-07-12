export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
}

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', icon: 'Atom' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', icon: 'GlobeHemisphereWest' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: 'Code' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: 'FileJs' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'Palette' },
  { id: 'threejs', name: 'Three.js', category: 'frontend', icon: 'Cube' },
  { id: 'gsap', name: 'GSAP', category: 'frontend', icon: 'PlayCircle' },
  { id: 'html', name: 'HTML/CSS', category: 'frontend', icon: 'FileCode' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'Terminal' },
  { id: 'express', name: 'Express', category: 'backend', icon: 'Lightning' },
  { id: 'mongodb', name: 'MongoDB', category: 'backend', icon: 'Database' },
  { id: 'git', name: 'Git', category: 'tools', icon: 'GitBranch' },
  { id: 'docker', name: 'Docker', category: 'tools', icon: 'ShippingContainer' },
  { id: 'figma', name: 'Figma', category: 'design', icon: 'FigmaLogo' },
  { id: 'vscode', name: 'VS Code', category: 'tools', icon: 'TerminalWindow' },
];

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  design: 'Design',
};

export const categoryAccents: Record<SkillCategory, { bg: string; text: string }> = {
  frontend: { bg: '#E1F3FE', text: '#1F6C9F' },
  backend: { bg: '#EDF3EC', text: '#346538' },
  tools: { bg: '#FDEBEC', text: '#9F2F2D' },
  design: { bg: '#FBF3DB', text: '#956400' },
};
