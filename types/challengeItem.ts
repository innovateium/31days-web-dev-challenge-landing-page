import React from 'react';

export interface ChallengeIconProps {
  size?: number | string;
  className?: string;
}

export interface ChallengeItem {
  day: number;
  title: string;
  theme: string;
  size: string;
  icon: React.ComponentType<ChallengeIconProps>;
  concept: string;
  link?: string;
  details: string;
  technologies: string[];
}
