import styled from '@emotion/styled';
import { createRandomColor } from '../random-color';

export const ProfileStatsContainer = styled.div`
  display: flex;
  list-style: none;
`;


export const StatsListContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #${createRandomColor()};
  border: 1px solid #${createRandomColor()};
  text-align: center;
  justify-content: center;
  width: 98px;
  height: 60px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const InfoContainer = styled.div`
  width: 300px;
  overflow: hidden;
  font-size: 22px;
  text-align: center;
  background-color: #${createRandomColor()};
  padding-top: 30px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

`

export const ImgContainer = styled.img`
  border-radius: 50%;
  width: 100px;
`

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50px);
  border: 1px solid #${createRandomColor()};
  width: 300px;
`;

