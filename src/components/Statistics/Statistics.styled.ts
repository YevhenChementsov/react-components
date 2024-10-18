import styled from '@emotion/styled';

import { CellProps } from './Statistics.types';

export const StatisticalSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  max-width: 728px;
  text-align: center;
  margin: 15px auto;
  padding: 10px;

  background-color: rgba(248, 248, 255, 0.5);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const MainTitle = styled.h2`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: 700;

  color: rgb(100, 100, 100);
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: 50px;
`;

export const Cell = styled.li<CellProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 5px;

  background-color: ${props =>
    props.backgroundColor ||
    '#' + Math.floor(Math.random() * 16777215).toString(16)};
  color: #000;
`;

export const Label = styled.span`
  font-weight: 400;
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
