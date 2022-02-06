import styled from '@emotion/styled';
import { createRandomColor } from '../random-color';

export const StatisticListContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0;
`;

export const StatisticContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #${createRandomColor()};
  border: 1px solid #${createRandomColor()};
  width: calc(100% / 5);
`;

export const StatisticSectionContainer = styled.section`
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%, 50px);
  width: 700px;
  display: block;
  justify-content: center;
  text-align: center;
  border: 1px solid #${createRandomColor()};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const StatisticTitle = styled.h2`
  margin: 0;
  padding: 10px 0 10px 0;
`;
