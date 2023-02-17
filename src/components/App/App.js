import { Container } from 'components/App/App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import user from 'assets/social-profile/user.json';
import statisticalData from 'assets/statistics/statistical-data.json';
import friends from 'assets/friend-list/friends.json';
import transactions from 'assets/transaction-history/transactions.json';

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
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
