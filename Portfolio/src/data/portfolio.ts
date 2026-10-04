export type Project = {
  number: string
  name: string
  discipline: string
  description: string
  overview: string
  technology: string[]
  architecture: ProjectArchitecture
  github: string
  demo?: string
  demoVideo?: string
}

export type ProjectArchitecture = {
  nodes: {
    id: string
    label: string
    detail: string
    x: number
    y: number
  }[]
  edges: {
    from: string
    to: string
  }[]
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'NEUROSCREEN.AI',
    discipline: 'AI / HEALTH TECHNOLOGY',
    description: 'An AI-powered neurological screening system.',
    overview:
      'An AI-focused system exploring behavioral, movement, and audio analysis for early neurological screening.',
    technology: ['Python', 'Computer Vision', 'MediaPipe', 'Machine Learning', 'Audio Analysis'],
    architecture: {
      nodes: [
        { id: 'input', label: 'VIDEO + AUDIO', detail: 'Captured inputs', x: 98, y: 110 },
        { id: 'vision', label: 'COMPUTER VISION', detail: 'MediaPipe movement', x: 338, y: 54 },
        { id: 'audio', label: 'AUDIO SIGNALS', detail: 'Audio analysis', x: 338, y: 166 },
        { id: 'screening', label: 'SCREENING FLOW', detail: 'Combined signals', x: 638, y: 110 },
      ],
      edges: [
        { from: 'input', to: 'vision' },
        { from: 'input', to: 'audio' },
        { from: 'vision', to: 'screening' },
        { from: 'audio', to: 'screening' },
      ],
    },
    github: 'https://github.com/Anmoljoshi435/NeuroScreen.AI',
    demoVideo: '/media/neuroscreen-ai-demo.mp4',
  },
  {
    number: '02',
    name: 'CAMPUSPULSE',
    discipline: 'FULL-STACK PRODUCT',
    description: 'A campus platform connecting students and campus services.',
    overview:
      'A full-stack campus platform with real-time communication, authentication, and intelligent content analysis.',
    technology: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Socket.IO', 'JWT'],
    architecture: {
      nodes: [
        { id: 'client', label: 'REACT CLIENT', detail: 'Campus experience', x: 98, y: 110 },
        { id: 'api', label: 'EXPRESS API', detail: 'REST + JWT auth', x: 338, y: 110 },
        { id: 'database', label: 'MYSQL', detail: 'Persistent data', x: 638, y: 54 },
        { id: 'realtime', label: 'SOCKET.IO', detail: 'Live communication', x: 638, y: 166 },
      ],
      edges: [
        { from: 'client', to: 'api' },
        { from: 'api', to: 'database' },
        { from: 'api', to: 'realtime' },
      ],
    },
    github: 'https://github.com/Anmoljoshi435/CampusPulse',
    demo: 'https://campus-pulse-roan.vercel.app',
    demoVideo: '/media/campuspulse-demo.mp4',
  },
  {
    number: '03',
    name: 'DATAPLANE',
    discipline: 'BACKEND / NETWORKING',
    description: 'A reverse proxy and API gateway for backend service traffic.',
    overview:
      'A lightweight reverse proxy and API gateway built in Go for routing and managing backend services.',
    technology: ['Go', 'REST APIs', 'Networking', 'Backend Systems'],
    architecture: {
      nodes: [
        { id: 'client', label: 'CLIENT REQUEST', detail: 'Incoming traffic', x: 98, y: 110 },
        { id: 'proxy', label: 'GO REVERSE PROXY', detail: 'Gateway entry point', x: 286, y: 110 },
        { id: 'routing', label: 'ROUTE DECISION', detail: 'Request forwarding', x: 474, y: 110 },
        { id: 'services', label: 'BACKEND SERVICES', detail: 'Upstream targets', x: 662, y: 110 },
      ],
      edges: [
        { from: 'client', to: 'proxy' },
        { from: 'proxy', to: 'routing' },
        { from: 'routing', to: 'services' },
      ],
    },
    github: 'https://github.com/Anmoljoshi435/Immune-System',
    demoVideo: '/media/dataplane-demo.mp4',
  },
]

export const technologies = [
  { name: 'Java', note: 'Object-oriented programming and application development.' },
  { name: 'JavaScript', note: 'Interactive web applications and full-stack development.' },
  { name: 'Python', note: 'Scripting, data workflows, and AI project development.' },
  { name: 'Go', note: 'Backend and systems-oriented development.' },
  { name: 'React', note: 'Component-driven interfaces for the web.' },
  { name: 'Node.js', note: 'JavaScript runtimes and server-side application development.' },
  { name: 'Express', note: 'HTTP APIs and web services in Node.js.' },
  { name: 'MySQL', note: 'Relational data modelling and SQL.' },
  { name: 'MongoDB', note: 'Document-oriented data storage.' },
  { name: 'Git', note: 'Version control and collaborative workflows.' },
  { name: 'GitHub', note: 'Source hosting and project collaboration.' },
  { name: 'AWS', note: 'Cloud platform fundamentals.' },
  { name: 'Azure', note: 'Cloud platform fundamentals.' },
  { name: 'Three.js', note: 'Real-time 3D graphics for the web.' },
]

export type ExperienceEntry = {
  company: string
  role: string
  tasks: string[]
  workflow: ProjectArchitecture
}

export const experience: ExperienceEntry[] = [
  {
    company: 'DL Uploads Pvt. Ltd.',
    role: 'Web Developer Intern',
    tasks: [
      'Built responsive web pages and reusable UI components using HTML, CSS, and JavaScript.',
      'Implemented and refined front-end features to meet project requirements.',
      'Tested interfaces across screen sizes, fixed UI issues, and improved usability.',
    ],
    workflow: {
      nodes: [
        { id: 'requirements', label: 'REQUIREMENTS', detail: 'Feature needs', x: 98, y: 110 },
        { id: 'interface', label: 'WEB INTERFACE', detail: 'HTML · CSS · JavaScript', x: 286, y: 110 },
        { id: 'responsive', label: 'RESPONSIVE UI', detail: 'Layouts + components', x: 474, y: 110 },
        { id: 'testing', label: 'TEST + REFINE', detail: 'Cross-screen QA', x: 662, y: 110 },
      ],
      edges: [
        { from: 'requirements', to: 'interface' },
        { from: 'interface', to: 'responsive' },
        { from: 'responsive', to: 'testing' },
      ],
    },
  },
  {
    company: 'InAmigos Foundation',
    role: 'Research / Data Analysis Intern',
    tasks: [
      'Conducted research and organized information for data analysis.',
      'Cleaned and structured datasets to support consistent analysis.',
      'Identified patterns and summarized findings in clear reports.',
    ],
    workflow: {
      nodes: [
        { id: 'research', label: 'RESEARCH', detail: 'Define questions', x: 98, y: 110 },
        { id: 'data', label: 'DATA PREP', detail: 'Collect + organize', x: 286, y: 110 },
        { id: 'analysis', label: 'DATA ANALYSIS', detail: 'Review patterns', x: 474, y: 110 },
        { id: 'findings', label: 'FINDINGS', detail: 'Summarize results', x: 662, y: 110 },
      ],
      edges: [
        { from: 'research', to: 'data' },
        { from: 'data', to: 'analysis' },
        { from: 'analysis', to: 'findings' },
      ],
    },
  },
]

export type Credential = {
  title: string
  issuer: string
  kind: 'CERTIFICATION' | 'COURSE'
  issued?: string
  credentialId?: string
  image?: string
  verificationUrl?: string
  description: string
}

export const credentials: Credential[] = [
  {
    title: 'Natural Language Processing (NLP)',
    issuer: 'Visvesvaraya Technological University',
    kind: 'CERTIFICATION',
    issued: 'Nov 2025',
    image: '/media/certificates/natural-language-processing.png',
    verificationUrl: 'https://online.vtu.ac.in/v1/course-exam-certificate/3ef98194-0030-419f-b1d0-5cc0b1ff50c4',
    description: 'Completed a 3-credit NLP course through the VTU Centre for Online Education.',
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    kind: 'CERTIFICATION',
    issued: 'Jan 2026',
    credentialId: '70502354F2FF',
    image: '/media/certificates/react-basic-hackerrank.png',
    verificationUrl: 'https://www.hackerrank.com/certificates/70502354f2ff',
    description: 'HackerRank skills certification covering core React concepts.',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    kind: 'CERTIFICATION',
    issued: 'Dec 2025',
    image: '/media/certificates/introduction-to-cybersecurity.png',
    verificationUrl: 'https://www.credly.com/badges/c7e56255-d240-416f-aee9-dbdf77265b02/public_url',
    description: 'Course completion credential covering cybersecurity foundations and online safety.',
  },
  {
    title: 'Build with Amazon API Gateway',
    issuer: 'Amazon Web Services',
    kind: 'COURSE',
    description: 'Completed an Amazon API Gateway course issued by AWS.',
  },
]

export const email = 'anmoljoshi442@gmail.com'
export const linkedIn = 'https://www.linkedin.com/in/anmol-joshi-648a6029a/'
export const github = 'https://github.com/Anmoljoshi435'
