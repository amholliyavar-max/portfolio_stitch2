import { CaseStudy, SkillCategory, DirectionFocus } from '../types';

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'smart-escrow': {
    key: 'smart-escrow',
    id: 'SYS://TX-ESCROW.01',
    tag: '24-Hour Hackathon • Production Build',
    title: 'Smart Escrow',
    sub: 'Real-time transactional security web application built within 24 hours',
    category: 'web',
    categoryLabel: '01 // PRODUCTION',
    team: 'Team of 4',
    hackathonNote: '24-Hour Hackathon',
    problem:
      'In peer-to-peer digital trades and freelance service payments, mutual distrust between counter-parties often stalls transactions. Users require a transparent escrow mechanism where funds are held safely until contract conditions are mutually verified.',
    approach:
      'Designed a responsive, state-driven client application using React and Vite, supported by a serverless document architecture via Google Firebase and Cloud Firestore to guarantee real-time multi-party synchronization under rapid hackathon constraints.',
    built:
      'Implemented the full transaction creation flow, deposit tracking, milestone visualizers, counter-party release confirmation workflows, and real-time state listeners across buyer and seller viewports.',
    tech: ['React', 'Vite', 'Firebase', 'Cloud Firestore', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git'],
    contrib:
      'Served as the core frontend engineer in a 4-member squad. Designed and built the client components, wired the Firestore snapshot listeners, managed client-side form validations, and coordinated Git branching under the 24-hour sprint deadline.',
    learned:
      'Gained firsthand experience with high-velocity product shipping, managing asynchronous state in Firestore, rapidly debugging merge conflicts under deadline pressure, and delivering an end-to-end working product pitch to evaluators.',
    badges: ['React', 'Vite', 'Firebase', 'Firestore']
  },
  'focusflow': {
    key: 'focusflow',
    id: 'PRJ://FOCUSFLOW.02',
    tag: 'Personal Project • Productivity System',
    title: 'FocusFlow',
    sub: 'Behavioral habit reinforcement and distraction control application',
    category: 'web',
    categoryLabel: '02 // WEB APP',
    problem:
      'Sustained focus is frequently disrupted by context switching and lack of structured feedback loops. Traditional timers lack incentives for building repeatable daily routines.',
    approach:
      'Structured a focused productivity workspace combining a custom Pomodoro interval engine, visual streaks, milestone checkpoints, and lightweight gamified feedback loops to incentivize deep work.',
    built:
      'Session configuration engine, real-time countdown viewport, streak retention calculator, sound triggers, and a modular habit ledger.',
    tech: ['JavaScript', 'HTML5 Web Workers', 'Local Storage APIs', 'CSS Grid', 'Modular Architecture'],
    contrib:
      'Sole author and developer. Researched habit reinforcement patterns, designed the interaction architecture, and implemented persistent local state.',
    learned:
      'Deepened mastery of asynchronous timer precision in web browsers, state persistence patterns, and UI feedback design for behavioral tools.',
    badges: ['Productivity', 'Focus Systems', 'Habit Tracker']
  },
  'focusforge-ai': {
    key: 'focusforge-ai',
    id: 'RES://FOCUSFORGE.03',
    tag: 'AI Concept & Architecture Paper',
    title: 'FocusForge AI',
    sub: 'Multi-modal behavioral telemetry with planned productivity scoring',
    category: 'aiml',
    categoryLabel: '03 // PROPOSED MODEL',
    problem:
      'Productivity metrics are usually unidimensional (tracking only work time), ignoring critical physiological and environmental correlates such as sleep hygiene, phone screentime, and chronotype intervals.',
    approach:
      'Architected a conceptual data ingestion and ML scoring pipeline that accepts multi-variate time-series inputs (study hours, sleep logs, screen unlock frequency) to compute a composite productivity score and offer predictive habit optimization.',
    built:
      'System architecture specification, mock telemetry ingestion schema, feature engineering pipelines in Python (NumPy/Pandas), and exploratory behavior correlation notebooks.',
    tech: ['Python', 'NumPy', 'scikit-learn', 'Pandas', 'Data Visualization', 'Behavioral Modeling'],
    contrib:
      'Conceptualized the algorithmic formula, mapped data normalizations across varied telemetry inputs, and authored the technical architecture proposal.',
    learned:
      'Strengthened understanding of feature scaling, multivariate normalization, and the practical challenges of translating user habit logs into machine learning features.',
    badges: ['Behavioral Data', 'Machine Learning', 'Telemetry']
  },
  'campus-connect': {
    key: 'campus-connect',
    id: 'WEB://CAMPUS.04',
    tag: 'Personal Project • Student Utility',
    title: 'Campus Connect',
    sub: 'Unified web portal for university facility telemetry and academic events',
    category: 'web',
    categoryLabel: '04 // WEB SYSTEM',
    problem:
      'University resources such as library occupancy, department notices, seminar calendars, and student services are frequently fractured across unconnected noticeboards and channels.',
    approach:
      'Engineered an integrated single-page directory mapping student services, campus facilities, and department bulletins into a clean, searchable, responsive interface.',
    built:
      'Searchable resource registry, facility availability cards, categorized event bulletin feed, and mobile-first responsive layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'Component Architecture'],
    contrib:
      'Conducted user interviews with fellow REVA University students, translated needs into UX flows, and built the full front-facing interface.',
    learned:
      'Refined understanding of information architecture, user-centric layout design, and accessible client-side search filtering.',
    badges: ['Web Development', 'Student Services', 'UX Flow']
  },
  'graphics-editor': {
    key: 'graphics-editor',
    id: 'SYS://C-GRAPHICS.05',
    tag: 'Academic Project • C Language',
    title: '2D Graphics Editor',
    sub: 'Low-level raster buffer implementation and memory allocation environment',
    category: 'systems',
    categoryLabel: '05 // SYSTEMS',
    problem:
      'Understanding high-level graphical applications requires grasping how computers manipulate contiguous memory buffers, color channels, and raster coordinates without framework abstractions.',
    approach:
      'Engineered a rudimentary 2D raster engine in pure C, utilizing dynamic heap allocations (malloc, free), direct 2D coordinate-to-1D index translation, and manual pixel buffer manipulations.',
    built:
      'Canvas raster initialization, line-drawing primitives (Bresenham logic), color fill matrices, and export mechanisms for basic bitmap structures.',
    tech: ['C Programming', 'Pointers & Dynamic Memory', 'Data Structures', 'GCC', 'Terminal Tooling'],
    contrib:
      'Wrote all core C functions for memory management, matrix calculations, and safe bounds verification to prevent segmentation faults.',
    learned:
      'Solidified bedrock understanding of manual pointer arithmetic, heap memory hygiene, spatial coordinate mapping, and low-level algorithmic efficiency.',
    badges: ['C Language', 'Memory Mgmt', 'Raster Algorithms']
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    num: '01',
    title: 'Programming',
    description: 'Primary computational languages for system-level logic and high-level algorithmic modeling.',
    iconName: 'code',
    skills: ['Python', 'C']
  },
  {
    num: '02',
    title: 'Web Technologies',
    description: 'Modern frontend client development with component-driven paradigms and fast tooling.',
    iconName: 'globe',
    skills: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    num: '03',
    title: 'Backend & Cloud',
    description: 'Serverless data persistence, authentication, and synchronous real-time document stores.',
    iconName: 'database',
    skills: ['Firebase', 'Cloud Firestore', 'REST APIs']
  },
  {
    num: '04',
    title: 'AI & Data',
    description: 'Matrix manipulation, data visualization, exploratory analytics, and applied learning frameworks.',
    iconName: 'cpu',
    skills: ['NumPy', 'PyTorch', 'scikit-learn', 'Data Visualization']
  },
  {
    num: '05',
    title: 'Developer Tools',
    description: 'Strict version control hygiene, collaborative repositories, and terminal workflows.',
    iconName: 'terminal',
    skills: ['Git', 'GitHub', 'VS Code', 'Node.js', 'npm']
  },
  {
    num: '06',
    title: 'CS Foundations',
    description: 'Algorithmic problem-solving patterns and space-time complexity analysis.',
    iconName: 'git-branch',
    skills: ['Arrays', 'Search & Sort', 'Two-Pointer', 'Sliding Window', 'Big-O Analysis']
  }
];

export const DIRECTION_FOCUS_ITEMS: DirectionFocus[] = [
  {
    num: '01',
    title: 'AI Engineering',
    description: 'Bridging foundational machine learning algorithms with reliable, scalable software services.'
  },
  {
    num: '02',
    title: 'Machine Learning',
    description: 'Data preprocessing, statistical analysis, model evaluation metrics, and PyTorch exploration.'
  },
  {
    num: '03',
    title: 'Software Dev',
    description: 'Crafting modular web applications, clean component trees, state handlers, and API integrations.'
  },
  {
    num: '04',
    title: 'Problem Solving',
    description: 'Rigorous daily work on arrays, pointers, search strategies, graphs, and dynamic complexity.'
  }
];
