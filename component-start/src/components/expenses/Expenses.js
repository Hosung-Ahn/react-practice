import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  let filterInfoText = "2020, 2021 & 2022";

  if (selectedYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (selectedYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (selectedYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const selectedExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  return (
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>
        {/*<p>Data for years {filterInfoText} is hidden.</p>*/}

        {selectedExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}

      </Card>

  );
}

export default Expenses;