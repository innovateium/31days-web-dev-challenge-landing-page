import { ChallengeItem } from './challengeItem';

export interface Week {
  title: string;
  focus: string;
  days: ChallengeItem[];
}
