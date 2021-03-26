import React from 'react'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
// any change to push it to githubß
import './App.css';
// style
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <GlobalProvider>
      <div className="container-lg" id="app-wrapper">
      <Header />
      <div className="cont-wrap">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </div>
    </GlobalProvider >
  );
}

export default App;
