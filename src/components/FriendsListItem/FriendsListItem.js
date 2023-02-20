import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, Name } from './FriendsListItem.styled';

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard>
      <Status onlineStatus={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
