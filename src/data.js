export const nav = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export const experience = [
  {
    company: 'BoreDM',
    role: 'Full Stack Developer',
    type: 'Remote',
    period: 'Oct 2022 – Present',
    bullets: [
      'Designed and implemented scalable RESTful APIs using Python and Flask, improving data access and system performance.',
      'Led bi-weekly client meetings, ensuring seamless communication and alignment with project goals.',
      'Developed multiple pixel-perfect user interfaces in ReactJS, Redux, and MUI, enhancing user experience and usability.',
      'Automated deployment processes and integrated CI/CD, reducing deployment time and improving release reliability.',
    ],
  },
  {
    company: 'Turing',
    role: 'AI Trainer',
    type: 'Remote',
    period: 'Aug 2022 – Feb 2023',
    bullets: [
      'Curated high-quality datasets to enhance the performance of a self-coding AI model.',
      'Identified and resolved issues in AI-generated solutions, improving model accuracy and reliability.',
      'Evaluated and rated AI-generated completions, contributing to refinement of its predictive capabilities.',
      'Conducted rigorous testing and enhancements, optimizing the AI-powered coding assistant for real-world use.',
    ],
  },
  {
    company: 'Datum Brain',
    role: 'Full Stack Software Engineer',
    type: '',
    period: 'May 2020 – Aug 2022',
    bullets: [
      'Developed and deployed multiple RESTful APIs using Python, Node, Golang, and Scala, enabling seamless integration with client systems.',
      'Transformed design concepts into fully functional UIs using ReactJS, Redux, and Bootstrap, achieving pixel-perfect execution.',
      'Engineered scalable ETL pipelines and big data jobs in Python and Scala, improving data processing efficiency.',
      'Awarded Employee of the Year (2021) for outstanding contributions to software development and innovation.',
    ],
  },
]

export const projects = [
  {
    name: 'BoreDM',
    description:
      'Real-time boring data logging app replacing legacy software GINT. Built a fast report generation system (PDF, Excel, DXF, KML) and optimized grid data entry.',
    stack: ['React', 'MUI', 'Python', 'Flask', 'Socket.IO', 'RTK Query', 'React-PDF', 'Google Maps'],
  },
  {
    name: 'Keyword Grouper',
    description:
      'Clustering algorithm for SEO keyword grouping based on SERP similarity. Optimized Celery task queues for scalable, real-time processing with frontend progress tracking.',
    stack: ['React', 'Redux', 'Python', 'Celery', 'Django', 'Node', 'MongoDB', 'Socket.IO'],
  },
  {
    name: 'Mecku',
    description:
      'Big data engineering platform with a drag-and-drop UI for ETL creation. Built a microservices-based backend optimizing data movement across platforms and cloud services.',
    stack: ['Scala', 'Java', 'MongoDB', 'NodeJS', 'Socket.IO', 'React', 'D3'],
  },
  {
    name: 'Lucid',
    description:
      'Outline extraction tool for SEO content planning. Engineered a scraper to extract structured headings from webpages and built a React-based UI for efficient access.',
    stack: ['Go', 'Geziyor', 'ElasticSearch', 'AWS S3', 'React', 'Redux'],
  },
  {
    name: 'Generative AI Chatbot Training',
    description:
      'Trained AI models for a leading AI research lab by curating datasets, solving complex coding problems, and refining AI-generated solutions.',
    stack: ['Python', 'C++', 'Java'],
  },
]

export const skills = {
  Primary: ['React', 'TypeScript', 'JavaScript', 'Redux', 'React Query', 'Python', 'Hooks', 'Styled Components', 'Storybook', 'Jest', 'Micro Frontends', 'React PDF', 'CI/CD', 'Docker', 'API Integrations'],
  Backend: ['Node.js', 'Flask', 'Django REST', 'Go', 'Scala', 'RESTful API'],
  Data: ['PostgreSQL', 'MongoDB', 'MySQL', 'ElasticSearch', 'ETL Pipelines'],
  Cloud: ['AWS', 'Docker', 'Git', 'Agile / Scrum'],
}

export const awards = [
  {
    title: 'Speed Programming Winner',
    detail: 'Won the annual speed programming competition (Code Chef) at UET, Lahore — 2018',
  },
  {
    title: 'ICPC Online Round Winner',
    detail: 'Won the online round of ICPC Asia-Regional (Pakistan) — 2018',
  },
  {
    title: "VC's Honor List",
    detail: "Featured on the Vice-Chancellor's Honor List at University of the Punjab on four occasions for extraordinary academic performance",
  },
]
