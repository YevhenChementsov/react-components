import { List } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';

type FriendsListProps = {
  friends: Friend[];
};

export interface Friend {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}

export function FriendsList({ friends }: FriendsListProps) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
}
