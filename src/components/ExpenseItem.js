import ExpenseItemDate from './ExpenseItemDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  /**
   * props: title (string), date (Date obj), amount (float)
   */

  return (
    <div className='expense-item'>
      <ExpenseItemDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
