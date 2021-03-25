import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Expense History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transactions.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
