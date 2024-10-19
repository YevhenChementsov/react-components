import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 50px;

  text-align: center;

  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const TableHeading = styled.th`
  padding: 12px 8px;

  color: white;
  background-color: rgb(60, 183, 255);
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 8px;

  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    cursor: pointer;

    color: aquamarine;
    background-color: rgb(170, 169, 169);
  }
`;
