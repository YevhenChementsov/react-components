import styled from '@emotion/styled';
import { StatusProps } from './FriendsListItem.types';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
  padding: 10px;

  background-color: #fff;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const Status = styled.span<StatusProps>`
  display: inline-block;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${props => {
    switch (props.onlineStatus) {
      case true:
        return 'rgba(0, 128, 0, 0.6)';
      case false:
        return 'rgba(255, 0, 0, 0.6)';
      default:
        return 'rgba(0, 0, 0, 0.6)';
    }
  }};
`;

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  margin-left: 15px;

  border-radius: 5px;
  background-color: rgba(128, 128, 128, 0.3);
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 500;
`;
