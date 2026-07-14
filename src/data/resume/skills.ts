export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'AI & ML'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Frontend'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Data & Analytics'],
  },
  // AI & ML
  {
    title: 'Artificial Intelligence',
    competency: 5,
    category: ['AI & ML'],
  },
  { title: 'Machine Learning', competency: 5, category: ['AI & ML'] },
  { title: 'Deep Learning', competency: 4, category: ['AI & ML'] },
  { title: 'Generative AI', competency: 4, category: ['AI & ML'] },
  { title: 'Large Language Models', competency: 4, category: ['AI & ML'] },
  { title: 'Computer Vision', competency: 4, category: ['AI & ML'] },
  {
    title: 'Natural Language Processing',
    competency: 4,
    category: ['AI & ML'],
  },
  {
    title: 'Prompt Engineering',
    competency: 4,
    category: ['AI & ML'],
  },
  {
    title: 'Data Science',
    competency: 4,
    category: ['AI & ML', 'Data & Analytics'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['AI & ML'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['AI & ML', 'Data & Analytics'],
  },
  // Frontend
  {
    title: 'HTML',
    competency: 5,
    category: ['Frontend'],
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Frontend'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Frontend'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frontend'],
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Frontend'],
  },
  {
    title: 'Vite',
    competency: 3,
    category: ['Frontend'],
  },
  // Backend
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Backend', 'Data & Analytics'],
  },
  // Data & Analytics
  {
    title: 'Business Analytics',
    competency: 4,
    category: ['Data & Analytics'],
  },
  {
    title: 'Supply Chain Analytics',
    competency: 4,
    category: ['Data & Analytics', 'Supply Chain'],
  },
  {
    title: 'Operations Analysis',
    competency: 4,
    category: ['Data & Analytics', 'Supply Chain'],
  },
  // Cloud & DevOps
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'GitHub',
    competency: 5,
    category: ['Cloud & DevOps'],
  },
  // Project Management
  {
    title: 'Jira',
    competency: 4,
    category: ['Project Management'],
  },
  {
    title: 'Asana',
    competency: 3,
    category: ['Project Management'],
  },
  // Infrastructure
  {
    title: 'Trello',
    competency: 3,
    category: ['Project Management'],
  },
  // Supply Chain
  {
    title: 'Logistics',
    competency: 4,
    category: ['Supply Chain'],
  },
  {
    title: 'Inventory Management',
    competency: 4,
    category: ['Supply Chain'],
  },
  {
    title: 'Procurement',
    competency: 4,
    category: ['Supply Chain'],
  },
  {
    title: 'Operations Management',
    competency: 4,
    category: ['Supply Chain'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
