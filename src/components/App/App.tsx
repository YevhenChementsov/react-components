import { FriendsList } from 'components/FriendsList/FriendsList';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import friendsData from 'data/friends.json';
import statsData from 'data/statistical-data.json';
import transactionsData from 'data/transactions.json';
import userData from 'data/user.json';
import { Container } from './App.styled';

export function App() {
  const { name, tag, location, avatar, stats } = userData;

  return (
    <Container>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </Container>
  );
}
