import PropTypes from 'prop-types';

function FriendsList({ children }) {
  return <ul className="friend-list">{children}</ul>;
}

FriendsList.prototypes = {
  children: PropTypes.node.isRequired,
};

export default FriendsList;
