import PropTypes from 'prop-types';
import React, { Fragment } from "react";



export default function StatisticComponent({
    label,
    percentage,
}) {
  return (
    <Fragment>
        <span>{label}</span>
        <span >{percentage}%</span>
    </Fragment>
  )
}

StatisticComponent.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}

