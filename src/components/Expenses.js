import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    /**
     * props: expenses (array of expenses)
     */

    const items = props.items;
    return (
        <div className='expenses'>
            <ExpenseItem 
                title={items[0].title} 
                amount={items[0].amount} 
                date={items[0].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={items[1].title} 
                amount={items[1].amount} 
                date={items[1].date}>
            </ExpenseItem>
        </div>
    );
}

export default Expenses;