export interface CellProps {
  backgroundColor?: string;
}

export interface StatisticsProps {
  title?: string;
  stats: Stat[];
}

interface Stat {
  id: string;
  label: string;
  percentage: number;
}
