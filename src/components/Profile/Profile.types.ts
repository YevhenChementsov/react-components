export interface ProfileProps {
  name: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

type Stats = {
  followers: number;
  views: number;
  likes: number;
};
