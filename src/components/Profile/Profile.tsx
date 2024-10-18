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
import { ProfileProps } from './Profile.types';

export function Profile({ name, tag, location, avatar, stats }: ProfileProps) {
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
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </ProfileStatsList>
    </SocialProfile>
  );
}
