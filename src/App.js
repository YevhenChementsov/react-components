import Container from './components/Container';
import FriendsListItem from './components/FriendsListItem';
import FriendsList from './components/FriendsList';
import friends from './friends.json';

export default function App() {
  return (
    <Container>
      <FriendsList>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendsList>
    </Container>
  );
}
