import React, { useEffect, useState } from 'react';
import './expense_page.css';

const ExpensePage = () => {
    const [newExpense, setNewExpense] = useState({
        expenseCategory: '',
        expenseName: '',
        expenseDescriptionescription: '',
        expenseDateate: '',
        expenseAmountmount: ''
    });

    const [expenses, setExpenses] = useState([]);

    const fetchData = () => {
        try {
            fetch("http://localhost:8080/expense-manager/get-all-expense", {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => setExpenses(result))
                .catch(error => console.log('error', error));
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setNewExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newExpense)

        try {
            fetch("http://localhost:8080/expense-manager/create", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newExpense),
            })
                .then(response => response.text())
                .then(result => fetchData())
                .catch(error => console.error('Error:', error));

        } catch (error) {
            console.log(error)
        }

        setNewExpense({
            expenseCategory: '',
            expenseName: '',
            expenseDescriptionescription: '',
            expenseDateate: '',
            expenseAmountmount: ''
        });


    };

    return (
        <div className="container">
            <div className="center">
                <h1>Expense Entry</h1>
                <form onSubmit={handleSubmit} className="expense-form">
                    <div className='inputbox'>
                        
                            <select name="expenseCategory" onChange={handleChange}>
                                <option value="">Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Health">Health</option>
                                <option value="Medicine">Medicine</option>
                            </select>
                        
                    </div>
                    
                    <div className='inputbox'>
                        <input type="text" name="expenseName" value={newExpense.expenseName} onChange={handleChange} required />
                        <span>Expense Name</span>
                    </div>
                    <div className='inputbox'>
                        <input type="text" name="expenseDescription" value={newExpense.expenseDescription} onChange={handleChange} required />
                        <span>Description</span>
                    </div>

                    <div className='inputbox'>
                        <input type="number" name="expenseAmount" value={newExpense.expenseAmount} onChange={handleChange} required />
                        <span>Amount</span>
                    </div>
                    <div className='inputbox'>
                        
                        <input type="date" name="expenseDate" value={newExpense.expenseDate} onChange={handleChange} required />

                    </div>
                    <div class="inputbox">
                        <button type="submit">Add Expense</button>
                    </div>

                </form>
            </div>
            {/* <h2>Expense Table</h2> */}
            {/* <form onSubmit={handleSubmit} className="expense-form">
                <label>
                    Expense Category:
                    <select name="expenseCategory" onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
                <label>
                    Expense Name:
                    <input type="text" name="expenseName" value={newExpense.expenseName} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <input type="text" name="expenseDescription" value={newExpense.expenseDescription} onChange={handleChange} required />
                </label>
                <label>
                    Date:
                    <input type="date" name="expenseDate" value={newExpense.expenseDate} onChange={handleChange} required />
                </label>
                <label>
                    Amount:
                    <input type="number" name="expenseAmount" value={newExpense.expenseAmount} onChange={handleChange} required />
                </label>
                <button type="submit">Add Expense</button>
            </form> */}
            <br></br>
            <div className='table-center'> 
            <h1>Expense Details</h1>
            <table className="expense-table">
                
                <thead>
                    <tr>
                        <th>Expense Category</th>
                        <th>Expense Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.expenseCategory}</td>
                            <td>{expense.expenseName}</td>
                            <td>{expense.expenseDescription}</td>
                            <td>{expense.expenseDate}</td>
                            <td>৳{expense.expenseAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ExpensePage;