import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const AddTransaction = () => {
  const [date, setStartDate] = useState(new Date())
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  // const handleChange = (date) => {
  //   setStartDate(date)
  // }

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      date: date,
      text,
      amount: +amount,
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          {/* <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Chose date..." /> */}
          {/* <DatePicker type="text" selected={startDate} onChange={handleChange} /> */}
          {/* <DatePicker selected={date} value={date} onChange={(e) => setStartDate(e.target.value)} /> */}
          <input type="date" onChange={(e) => setStartDate(e.target.value)} required/>
          {/* <DatePicker selected={date} value={date} onChange={date => setStartDate(date)} /> */}
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
