import './App.css';
import ExpenseItem from './components/ExpenseItem'
import Expense from './components/Expense'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const expense = [
    {id:1, title: "Devnation-Payment", amount:'5000', date:"March 24th, 2022" },
    {id:2, title: "Book-Payment", amount:'6000', date:"July 24th, 2022" },
    {id:3, title: "Netflex Subscription", amount:'7000', date:"Aug 24th, 2022" },
    {id:4, title: "School Fee", amount:'8000', date:"Sep 24th, 2022" },
    {id:5, title: "Udemy Courset", amount:'12000', date:"Jan 24th, 2022" },
  ]

  return (
    <>
   
      <Expense data={expense}/>
    </>
  );
}

export default App;
