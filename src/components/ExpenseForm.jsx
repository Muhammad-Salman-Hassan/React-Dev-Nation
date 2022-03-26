import React,{createContext, useState} from 'react'
import './ExpenseForm.css'
import ExpenseItem from './ExpenseItem';





function ExpenseForm() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [exp,setexp]=useState({})

   

    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const dateeHandler=(e)=>{
        setDate(e.target.value)
    }
    const amountHandler=(e)=>{
        setAmount(e.target.value)
    }

    const submitExpense = () =>{
        let expenseData = {
            expenseTitle: title,
            expenseDate: date,
            expenseAmount: amount,
        }
        setexp(expenseData)

        
    }
    
     console.log(exp)


  return (
      
    <div>
        <div className='expense-outdiv'>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" onChange={titleHandler} />
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input type="text" name="" id="" onChange={amountHandler} />
            </div>
            <div>
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" onChange={dateeHandler}/>
            </div>
            <button className='expense-btn' onClick={submitExpense} >Submit Expense</button>
        </div>

        <ExpenseItem title={exp.expenseTitle} amount={exp.expenseDate} date={exp.expenseAmount} />
 
    </div>
  )
}

export default ExpenseForm