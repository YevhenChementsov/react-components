import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css';

function FriendsListItem({ avatar, name, isOnline }) {
  const onlineStatus = isOnline ? s.online : s.offline;

  return (
    <li className={s.item}>
      <span className={onlineStatus}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
