import { Avatar, FriendCard, Name, Status } from './FriendsListItem.styled';
import { FriendsListItemProps } from './FriendsListItem.types';

export function FriendsListItem({
  avatar,
  name,
  isOnline,
}: FriendsListItemProps) {
  return (
    <FriendCard>
      <Status onlineStatus={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
}
