import PropTypes from 'prop-types';
import {
  Cell,
  Label,
  MainTitle,
  Percentage,
  StatisticalSection,
  StatList,
} from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
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

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
