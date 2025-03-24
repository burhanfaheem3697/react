import React from 'react';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState.jsx'
const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => {
          const sign = transaction.amount < 0 ? '-' : '+';
          return <li key ={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
})}
        
      </ul>
    </>
  );
};

export default TransactionList;