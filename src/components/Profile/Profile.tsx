import {
  Avatar,
  Label,
  Location,
  Name,
  ProfileDescription,
  ProfileStatsList,
  Quantity,
  SocialProfile,
  Tag,
} from './Profile.styled';

interface ProfileProps {
  name: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}: ProfileProps) {
  return (
    <SocialProfile>
      <ProfileDescription>
        <Avatar src={avatar} alt="Аватар пользователя" width="180" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <ProfileStatsList>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </ProfileStatsList>
    </SocialProfile>
  );
}
