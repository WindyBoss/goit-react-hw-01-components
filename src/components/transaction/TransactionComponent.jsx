import PropTypes from 'prop-types';
import React, { Fragment } from "react";
import { ColumnCell } from './Transaction.styled.jsx';

export default function TransactionComponent({
  type,
  amount,
  currency,
}) {
  return (
    <Fragment>
      <ColumnCell>{type}</ColumnCell>
      <ColumnCell>{amount}</ColumnCell>
      <ColumnCell>{currency}</ColumnCell>
    </Fragment>
  )
}

TransactionComponent.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

