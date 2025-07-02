export interface User {
  id: string;
  name: string;
  score: number;
  avatarUrl?: string;
}

export interface LeaderboardProps {
  users: User[];
  title?: string;
  maxUsers?: number;
}

export interface RankedUser extends User {
  rank: number;
}