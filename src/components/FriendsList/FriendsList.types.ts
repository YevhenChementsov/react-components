export interface FriendsListProps {
  friends: Friend[];
}

export interface Friend {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}
