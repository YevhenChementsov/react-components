import { Friend } from '../FriendsList';
import { Avatar, FriendCard, Name, Status } from './FriendsListItem.styled';

type FriendCard = Omit<Friend, 'id'>;

export function FriendsListItem({ avatar, name, isOnline }: FriendCard) {
  return (
    <FriendCard>
      <Status onlineStatus={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
}
