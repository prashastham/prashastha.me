export type Project = {
  title: string;
  description: string;
  language: string;
  href: string;
  category: "SOFTWARE" | "RESEARCH";
  wide?: boolean;
  stars?: number;
  org?: string;
  active?: boolean;
};

// Curated from https://github.com/prashastham and https://github.com/PraKesEy
export const PROJECTS: Project[] = [
  {
    title: "ucsc-e-procurement/server",
    description: "Server side development repo for UCSC eProcurement.",
    language: "JavaScript",
    href: "https://github.com/ucsc-e-procurement/server",
    category: "SOFTWARE",
    wide: true,
    active: true,
  },
  {
    title: "Pedestrian & Vehicle Detection",
    description:
      "Implementation of a pedestrian and vehicle detection method using Cascade Classifiers.",
    language: "Python",
    href: "https://github.com/prashastham/Pedestrian-and-Vehicle-Detection",
    category: "SOFTWARE",
  },
  {
    title: "CustomerCategory-KNN",
    description:
      "Segmenting a telecom customer base by service usage patterns to customize offers, framed as a classification problem.",
    language: "Jupyter Notebook",
    href: "https://github.com/prashastham/CustomerCategory-KNN",
    category: "RESEARCH",
    stars: 1,
  },
  {
    title: "Univariate-Linear-Regression",
    description:
      "Python implementation of Univariate Linear Regression from scratch using Python and NumPy.",
    language: "Jupyter Notebook",
    href: "https://github.com/prashastham/Univariate-Linear-Regression",
    category: "RESEARCH",
    stars: 1,
  },
  {
    title: "PraKesEy/EEGNetReplication",
    description:
      "Replication of results from the original EEGNet paper, focused on the SMR test.",
    language: "Jupyter Notebook",
    href: "https://github.com/PraKesEy/EEGNetReplication",
    category: "RESEARCH",
    org: "PraKesEy — EEGNet replication group",
  },
];

export type Organization = {
  name: string;
  href: string;
};

export const ORGANIZATIONS: Organization[] = [
  { name: "highbrow-ai", href: "https://github.com/highbrow-ai" },
  { name: "LoopDelta", href: "https://github.com/LoopDelta" },
  { name: "PraKesEy", href: "https://github.com/PraKesEy" },
];

export type Education = {
  institution: string;
  location: string;
  degree: string;
  status: string;
};

export const EDUCATION: Education[] = [
  {
    institution: "Bar Ilan University",
    location: "Ramat Gan, Israel",
    degree: "MSc. in Neuroscience (Data Science Track)",
    status: "Coursework Completed",
  },
  {
    institution: "University of Colombo School of Computing",
    location: "Colombo, Sri Lanka",
    degree: "BSc. (Hons) in Computer Science",
    status: "Graduated",
  },
];
