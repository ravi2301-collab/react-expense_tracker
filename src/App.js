import { Balance } from './components/balance';
import { Status } from './components/status';
import { Transactions } from './components/transactions';
import { Entry } from './components/entry';
import { useState, useEffect } from 'react';
import './css/style.css';

function App() {

  const [books, setBooks] = useState([]);
  const [record, setRecord] = useState({});
  const [revenue, setRevenue ] = useState(0);
  const [expense, setExpense ] = useState(0);
  const[ balance ,setBalance] = useState(0);

  const remove = (item) => {
    setBooks(books.filter((book,index) => index !== item));
  }

  const handleChange = (event) => {
    const{ name, value} = event.target;
    setRecord({...record, [name]:value });
  }
  
  const handleSubmit = () => {
    isNaN(parseInt(record.amount)) || record.particular === "" ? alert('Enter  a valid record') : 
      setBooks((prev) => [...prev, record ]);
      setRecord({ particular:'', amount: ''})

    
  }

  useEffect(() => {
    setBalance(books.reduce((acc, current) => acc + parseInt(current.amount), 0));
    setRevenue(books.reduce((acc, current) =>    parseInt(current.amount) >= 0 ? acc + parseInt(current.amount) : acc, 0));
    setExpense(books.reduce((acc, current) =>    parseInt(current.amount) < 0 ? acc  - parseInt(current.amount) : acc, 0));

  },[books]);
  

  return (
    <div className="container">
        <div className="heading">
            <h2 className="title text-center mb-2">
              Reactjs Expense Tracker
            </h2>
        </div>
        <main>

        <Entry  
          handleSubmit= { handleSubmit } 
          handleChange= {handleChange}
          record={record}
          />

        <div className="row">
          <div className="col-md-6 
          d-flex text-center balance
          align-items-center  
          justify-content-center">
          <div className="card shadow card-body">
          <Balance
           books={books}
           balance = { balance }
           />
          </div>
          </div>

          <div className="col-md-6">
          <Status
          revenue = {revenue}
          expense = { expense }
          />
          </div>
        </div>
         
        <Transactions 
      books={books} 
      remove={ remove } />
          
        </main>
    </div>
  );
}

export default App;
