import styled from '@emotion/styled';
import { createRandomColor } from '../random-color';


export const MainRowContainer = styled.tr`

  background-color: #${createRandomColor()};
`;

export const ColumnCell = styled.th`
  border: 1px solid black;
  padding: 8px 20px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

`;

export const WholeTableContainer = styled.table`
  position: absolute;
  top: 1000px;
  left: 50%;
  transform: translate(-50%, 50px);

  border-collapse: collapse;
  tr:nth-child(even) {background-color: #${createRandomColor()};
`
