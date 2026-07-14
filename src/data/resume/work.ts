/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'SASTRA University',
    position: 'B.Tech ECE Student',
    url: 'https://www.sastra.edu/',
    startDate: '2023-07-01',
    summary:
      'Electronics and Communication Engineering undergraduate building a broad base across AI, software engineering, project management, and supply chain management.',
  },
  {
    name: 'National Institute of Technology Tiruchirappalli',
    position: 'Research Intern',
    url: 'https://www.nitt.edu/',
    startDate: '2025-05-01',
    endDate: '2025-06-30',
    summary:
      'Completed a summer research internship under Dr. V. Lavanya in the Department of Management Studies on Competency-Based Management.',
    highlights: [
      'Performed literature review, framework analysis, and competency gap assessment.',
      'Produced a comprehensive research report and received an internship certificate and letter of recommendation.',
    ],
  },
  {
    name: 'Indian School Psychology Association',
    position: 'Project Management Intern',
    url: 'https://inspa.in/',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
    summary:
      'Remote project management internship coordinating cross-functional volunteer teams across HR, marketing, content, social media, and design.',
    highlights: [
      'Balanced daily university classes with evening project coordination for around six months.',
      'Helped streamline planning, communication, task tracking, and documentation for multiple initiatives.',
    ],
  },
  {
    name: 'Andrew (An Amphenol Company)',
    position: 'Software Engineering Intern',
    url: 'https://www.amphenol.com/',
    startDate: '2026-06-10',
    endDate: '2026-07-06',
    summary:
      'Completed an on-site software engineering internship in Bengaluru focused on telecom software, cloud-native systems, networking, DevOps, and enterprise engineering workflows.',
    highlights: [
      'Studied DAS, ERA, O-RAN, virtualization, containerization, CI/CD, and production telecom architectures.',
      'Connected ECE fundamentals with real-world enterprise software engineering practices.',
    ],
  },
  {
    name: 'Kuruksastra',
    position: 'Core Team Member, Infrastructure, Logistics & Finance',
    url: 'https://www.sastra.edu/',
    startDate: '2024-09-01',
    endDate: '2027-05-01',
    summary:
      'Student leadership role supporting SASTRA University’s annual cultural festival through infrastructure, logistics, inventory, procurement, and operations management.',
    highlights: [
      'Managed event readiness, material distribution, volunteer coordination, and stage operations.',
      'Built practical leadership experience through high-pressure festival execution and crisis response.',
    ],
  },
];

export default work;
