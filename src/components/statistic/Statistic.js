import React, { Fragment } from "react";
import StatisticComponent from './StatisticComponents.jsx';
import PropTypes from 'prop-types';
import { StatisticListContainer, StatisticContainer, StatisticSectionContainer, StatisticTitle} from './Statistic.styled.jsx'


export default function Statistic({ statistics }) {
  console.log(statistics);
  return (
    <Fragment>
      <StatisticSectionContainer>
        <StatisticTitle>Upload stats</StatisticTitle>

        <StatisticListContainer>
          {statistics.map(stat => (
            <StatisticContainer key={stat.id}>
              <StatisticComponent
                label={stat.label}
                percentage={stat.percentage}
              />
            </StatisticContainer>
          ))}
        </StatisticListContainer>
      </StatisticSectionContainer>
    </Fragment>
  )
}

Statistic.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};
