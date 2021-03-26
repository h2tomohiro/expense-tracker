import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export const AddTransaction = () => {
  const [date, setStartDate] = useState('')
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

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
    <div className="container">
      <h3>Add new transaction</h3>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label id="label1" htmlFor="date">Date</Label>
          <Input id="input1" type="date" onChange={(e) => setStartDate(e.target.value)} required/>
        </FormGroup>
        <FormGroup>
          <Label id="label2" htmlFor="text">Text</Label>
          <Input id="input2" type="textarea" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
        </FormGroup>
        <FormGroup>
          <Label id="label3" htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</Label
          >
          <Input id="input3" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
        </FormGroup>

        <Button id="btn" size="lg" block>Add transaction</Button>

      </Form>
    </div>
  )
}
