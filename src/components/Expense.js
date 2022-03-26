import React from 'react'
import Card from '../components/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm';

function Expense(props) {
    const { data } = props;
    return (
        <div>
            
            <Card className='expense'>
            <ExpenseForm />
                               
            </Card>
        </div>
    )
}
export default Expense
