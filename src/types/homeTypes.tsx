
export interface Employer {
    id: number; // Add appropriate fields based on your API data
    name: string;
    position: string;
    experience: string;
    tasks: string[];
    image: string;
    flag: string;
  }
  
  export interface Highlight {
    title: string; // Add appropriate fields based on your API data
    image: string;
  }
  
  export interface MainSectionProps {
    employers: Employer[];
    highlights: Highlight[];
  }