export type ProjectCategory = 'all' | 'aiml' | 'web' | 'systems';

export interface CaseStudy {
  key: string;
  id: string;
  tag: string;
  title: string;
  sub: string;
  category: 'aiml' | 'web' | 'systems';
  categoryLabel: string;
  problem: string;
  approach: string;
  built: string;
  tech: string[];
  contrib: string;
  learned: string;
  badges?: string[];
  team?: string;
  hackathonNote?: string;
}

export interface SkillCategory {
  num: string;
  title: string;
  description: string;
  iconName: 'code' | 'globe' | 'database' | 'cpu' | 'terminal' | 'git-branch';
  skills: string[];
}

export interface DirectionFocus {
  num: string;
  title: string;
  description: string;
}

export interface TelemetryData {
  node: string;
  status: string;
  latency: string;
}
