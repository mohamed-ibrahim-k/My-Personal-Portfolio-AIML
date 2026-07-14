export interface Internship {
  title: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

const internships: Internship[] = [
  {
    title: 'Competency-Based Management',
    organization: 'NIT Tiruchirappalli',
    role: 'Research Intern',
    period: 'Summer 2025',
    summary:
      'Independent research internship under Dr. V. Lavanya in the Department of Management Studies focused on competency-based management, HR frameworks, and skills-based hiring.',
    highlights: [
      'Completed literature review, framework analysis, and competency gap assessment.',
      'Produced a comprehensive report and received both an internship certificate and a letter of recommendation.',
    ],
  },
  {
    title: 'Cross-Functional Volunteer Coordination',
    organization: 'Indian School Psychology Association (InSPA)',
    role: 'Project Management Intern',
    period: '2025',
    summary:
      'Remote project management internship coordinating HR, marketing, content, social media, and design volunteers across multiple organizational initiatives.',
    highlights: [
      'Balanced internship responsibilities with full-time B.Tech coursework.',
      'Built experience in planning, task allocation, communication, and workflow tracking.',
    ],
  },
  {
    title: 'Telecom Software Engineering',
    organization: 'Andrew (An Amphenol Company)',
    role: 'Software Engineering Intern',
    period: 'Summer 2026',
    summary:
      'One-month internship in Bengaluru focused on telecom software engineering, cloud-native systems, networking, virtualization, CI/CD, and embedded Linux.',
    highlights: [
      'Learned from senior engineers across telecom infrastructure and software teams.',
      'Connected ECE fundamentals to enterprise-scale product development workflows.',
    ],
  },
];

export default internships;
