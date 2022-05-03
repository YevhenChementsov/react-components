import Container from './components/Container';
import Statistics from './components/Statistics';
import FriendsList from './components/FriendsList';
import FriendsListItem from './components/FriendsListItem';
import TransactionHistory from './components/Transactions';
import friends from './friends.json';
import transactions from './transactions.json';
import statisticalData from './statistical-data.json';

export default function App() {
  return (
    <Container>
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
