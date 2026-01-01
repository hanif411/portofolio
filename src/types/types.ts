export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  focus: string;
  gridSpan?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}
