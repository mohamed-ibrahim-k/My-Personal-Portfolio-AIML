export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'SmartFit AI',
    subtitle: 'Sensor-based fitness activity recognition system',
    image: '/images/profile.svg',
    date: '2024-06-01',
    desc: 'AI-powered mobile fitness tracking system that uses smartphone sensor data to recognize activities and estimate fitness metrics.',
    tech: ['MATLAB', 'Machine Learning', 'Data Visualization'],
    featured: true,
  },
  {
    title: 'AIShield',
    subtitle: 'ML-enhanced intrusion detection and prevention',
    image: '/images/profile.svg',
    date: '2025-01-01',
    desc: 'Machine learning-enhanced intrusion detection and prevention concept built around Suricata, security analytics, and network monitoring.',
    tech: ['Machine Learning', 'Cybersecurity', 'Suricata'],
    featured: true,
  },
  {
    title: 'Smart Farming Intelligence Platform',
    subtitle: 'IoT crop recommendation and forecasting',
    image: '/images/profile.svg',
    date: '2025-06-01',
    desc: 'IoT-based crop recommendation platform using ensemble machine learning to support smart agriculture decisions.',
    tech: ['IoT', 'Machine Learning', 'Agriculture'],
    featured: true,
  },
  {
    title: 'MeetingScribe AI',
    subtitle: 'Intelligent meeting transcription system',
    image: '/images/profile.svg',
    date: '2025-12-01',
    desc: 'Meeting transcription and note-generation system that turns discussions into searchable summaries and action points.',
    tech: ['AI', 'NLP', 'Transcription'],
    featured: true,
  },
];

export default data;
