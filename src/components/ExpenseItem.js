import ExpenseItemDate from './ExpenseItemDate'
import './ExpenseItem.css'
import Card from './Card';

function ExpenseItem(props) {
  /**
   * props: title (string), date (Date obj), amount (float)
   */

  return (
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
