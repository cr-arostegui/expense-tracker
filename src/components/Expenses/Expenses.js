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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={expenseChangeHandler} />
        {
          props.items.map(expense => 
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          )
        }
      </Card>
    </div>
  );
}

export default Expenses;
