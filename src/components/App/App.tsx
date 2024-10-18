import { FriendsList } from 'components/FriendsList/FriendsList';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import statisticalData from 'data/statistical-data.json';
import user from 'data/user.json';
import { Container } from './App.styled';

export function App() {
  const { name, tag, location, avatar, stats } = user;

  return (
    <Container>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
    </Container>
  );
}
