import styled from '@emotion/styled';

export const SocialProfile = styled.div`
  max-width: 728px;
  text-align: center;
  margin: 15px auto;

  background-color: rgba(248, 248, 255, 0.5);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5%;
`;

export const ProfileDescription = styled.div`
  padding: 10px;
`;

export const Avatar = styled.img`
  margin: 15px auto;
  border-radius: 50%;
  background-color: bisque;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: rgb(70, 70, 70);
`;

export const Tag = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: rgb(100, 100, 100);
`;

export const Location = Tag.withComponent('p');

export const ProfileStatsList = styled.ul`
  margin-top: 25px;
  display: flex;

  border-top: 1px solid darkgray;
  background-color: rgb(240, 240, 240);

  li {
    display: flex;
    flex-basis: calc(100% / 3);
    flex-direction: column;

    padding: 20px;
  }

  li:not(:last-child) {
    border-right: 1px solid darkgray;
  }
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: rgb(100, 100, 100);
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: teal;
`;
