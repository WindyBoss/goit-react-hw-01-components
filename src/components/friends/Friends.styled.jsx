import styled from '@emotion/styled';
import { createRandomColor } from '../random-color';


export const FriendsListContainer = styled.ul`
  position: absolute;
  top: 600px;
  left: 50%;
  transform: translate(-50%, 50px);

  list-style: none;
  width: 500px;
  border: 1px solid #${createRandomColor()};
  margin: 0;
  padding: 0 30px 0 30px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const FriendContainer = styled.li`
  width: 100%;
  height: 60px;
  border: 1px solid #${createRandomColor()};
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 10px 0 10px 0;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  background-color: ${props => props.children ? 'green' : 'red'};
  margin: 0 10px 0 10px;
`;


export const FriendImg = styled.img`
  margin: 0 10px 0 10px;
`;
