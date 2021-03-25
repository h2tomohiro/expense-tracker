import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={"col-12", transaction.amount < 0 ? 'minus' : 'plus'} >
      <span>{transaction.date}</span>{transaction.text} <span> {sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
    </li>
  )
}
