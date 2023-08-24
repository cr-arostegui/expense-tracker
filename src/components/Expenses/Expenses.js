import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseChangeHandler = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => 
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={expenseChangeHandler} />
        { expensesContent }
      </Card>
    </div>
  );
}

export default Expenses;
