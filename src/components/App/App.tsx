import { Profile } from 'components/Profile/Profile';
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
    </Container>
  );
}
