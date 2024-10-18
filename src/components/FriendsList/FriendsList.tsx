import { List } from './FriendsList.styled';
import { FriendsListProps } from './FriendsList.types';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }: FriendsListProps) => {
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
};
