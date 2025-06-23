export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  title: string;
  contact: Contact;
  experience: Experience[];
  projects: Project[];
  education: Education;
  technologies: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  achievements: string[];
}