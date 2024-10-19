import {
  Table,
  TableData,
  TableHeading,
  TableRow,
} from './TransactionHistory.styled';

type TransactionHistoryProps = {
  items: Transaction[];
};

interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export function TransactionHistory({ items }: TransactionHistoryProps) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
