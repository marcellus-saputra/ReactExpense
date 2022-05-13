import './ExpenseItemAmount.css';

function ExpenseItemAmount(props) {
    /**
     * props: amount
     */
    const amount = props.amount;

    return (
        <div className='expenses'>{amount}</div>
    );
}

export default ExpenseItemAmount;