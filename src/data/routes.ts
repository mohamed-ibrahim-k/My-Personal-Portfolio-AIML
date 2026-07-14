export interface Route {
  label: string;
  path: string;
  index?: boolean;
  sectionId?: string;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Mohamed Ibrahim K',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
    sectionId: 'about',
  },
  {
    label: 'Resume',
    path: '/resume',
    sectionId: 'resume',
  },
  {
    label: 'Internships',
    path: '/internships',
    sectionId: 'internships',
  },
  {
    label: 'Contact',
    path: '/contact',
    sectionId: 'contact',
  },
  {
    label: 'Projects',
    path: '/projects',
    sectionId: 'projects',
  },
];

export default routes;
