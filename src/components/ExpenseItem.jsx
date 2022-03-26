import React ,{useContext, useState}from 'react'
import './ExenseItem.css'


function ExpenseItem(props) {
  // console.log("ExpenseItem -> props", props)
  const { amount, date,title} = props;
  // const expenseTitle = 'Devnation-Payment'
  // const [title, setTitle] = useState(expenseTitle)


  // // const expenseData = 'March 24th, 2022'
  
  // // const expenseAmount = '5000'


  // useState('')

  // // const [variable1, setVariable] = useState('10')
  // // console.log("ExpenseItem -> variable1", variable1)
  


  // console.log("ExpenseItem -> title", title)
  // console.log("Current Value", title)
  


  const buttonHandler = () =>{
    console.log('button click')
    // setTitle("salman")
    console.log("Changed Value", title)
  }

  const [count, setCount] = useState(16)

  
  // const incHandler = () =>{
  //   setCount( count + 1 )

  // }

  // const decHandler = () => {
  //   setCount( count - 1 )
  // }



  return (
    <>
      <div className='outerdiv'>
        <div className="expense-item">
          <div>{date}</div>
          <div className="expenseItem-detail">
            <h2 className='text-danger'>{title}</h2>
            <div>Rs. {amount}</div>
            <button  onClick={buttonHandler}>button</button>
          </div>
        </div>
      </div>

      {/* <>
        <button onClick={incHandler}>+</button> 
        <h1>Count Value : {count}</h1>
        <button onClick={decHandler}>-</button>
      </> */}
    </>
  )
}

export default ExpenseItem
