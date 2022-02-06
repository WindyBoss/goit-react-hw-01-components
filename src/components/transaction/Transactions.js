import React, { Fragment } from "react";
import TransactionComponent from './TransactionComponent.jsx';
import PropTypes from 'prop-types';
import { ColumnCell, WholeTableContainer, MainRowContainer } from './Transaction.styled.jsx';

export default function TransActionList({ transActionList }) {
  return (
    <Fragment>
      <WholeTableContainer>
        <thead>
          <MainRowContainer>
            <ColumnCell>Type</ColumnCell>
            <ColumnCell>Amount</ColumnCell>
            <ColumnCell>Currency</ColumnCell>
          </MainRowContainer>
        </thead>
          <tbody>
          {transActionList.map(transaction => (
            <tr key={transaction.id}>
              <TransactionComponent
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          ))}
        </tbody>
      </WholeTableContainer>
    </Fragment>
  )
}

TransActionList.propTypes = {
    transActionList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};
