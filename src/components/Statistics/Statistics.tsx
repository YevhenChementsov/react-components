import {
  Cell,
  Label,
  MainTitle,
  Percentage,
  StatisticalSection,
  StatList,
} from './Statistics.styled';

type StatisticsProps = {
  title?: string;
  stats: Stat[];
};

interface Stat {
  id: string;
  label: string;
  percentage: number;
}

export function Statistics({ title = 'Upload stats', stats }: StatisticsProps) {
  return (
    <StatisticalSection>
      {title && <MainTitle>{title}</MainTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Cell key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Cell>
        ))}
      </StatList>
    </StatisticalSection>
  );
}
