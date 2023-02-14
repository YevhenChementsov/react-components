import { Container } from 'components/Container/Container';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import user from 'docs/social-profile/user.json';
import statisticalData from 'docs/statistics/statistical-data.json';
import friends from 'docs/friend-list/friends.json';
import transactions from 'docs/transaction-history/transactions.json';

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
