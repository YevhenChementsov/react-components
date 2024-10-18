import {
  Cell,
  Label,
  MainTitle,
  Percentage,
  StatisticalSection,
  StatList,
} from './Statistics.styled';
import { StatisticsProps } from './Statistics.types';

export const Statistics = ({
  title = 'Upload stats',
  stats,
}: StatisticsProps) => {
  return (
    <StatisticalSection>
      {title && <MainTitle>{title}</MainTitle>}

      <StatList>
        {stats.map(stat => (
          <Cell key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Cell>
        ))}
      </StatList>
    </StatisticalSection>
  );
};
