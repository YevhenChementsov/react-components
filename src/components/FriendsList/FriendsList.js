import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendsList({ children }) {
  return <ul className={s.friendList}>{children}</ul>;
}

FriendsList.prototypes = {
  children: PropTypes.node.isRequired,
};

export default FriendsList;
