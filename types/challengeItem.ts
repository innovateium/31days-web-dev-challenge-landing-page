import { LucideIcon } from 'lucide-react';

export interface ChallengeItem {
  day: number;
  title: string;
  theme: string;
  size: string;
  icon: LucideIcon;
  concept: string;
  link?: string;
  details: string;
  technologies: string[];
}
