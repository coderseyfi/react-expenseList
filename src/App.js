import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Room Spray',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense]
    })
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
