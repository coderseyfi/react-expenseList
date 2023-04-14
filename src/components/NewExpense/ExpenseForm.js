import React, { useState } from 'react'
import "./ExpenseForm.css"


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput, //qalanlarini saxlayir (datalar itmir)
        //     enteredTitle: e.target.value, // override eliyir
        // })
        // setUserInput((prevState) => { //previous state qebul edir 
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput, //qalanlarini saxlayir (datalar itmir)
        //     enteredAmount: e.target.value, // override eliyir
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput, //qalanlarini saxlayir (datalar itmir)
        //     enteredDate: e.target.value, // override eliyir
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
