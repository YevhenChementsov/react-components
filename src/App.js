import Container from './components/Container';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendsList from './components/FriendsList';
import FriendsListItem from './components/FriendsListItem';
import TransactionHistory from './components/Transactions';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
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
      <TransactionHistory items={transactions} />
    </Container>
  );
}
