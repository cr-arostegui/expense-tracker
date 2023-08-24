import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    hideForm();
  }

   const hideForm = () => {
    setShowForm(false);
   };

   const displayForm = () => {
    setShowForm(true);
   };

  return (
    <div className='new-expense'>
      {
        showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={hideForm}/>
      }
      {
        !showForm && <button onClick={displayForm}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense;
