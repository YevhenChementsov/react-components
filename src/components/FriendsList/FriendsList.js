import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
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

FriendsList.prototypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
