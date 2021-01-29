import React from 'react'

import Context from '../context/Context'
import TransactionList from './TransactionList.jsx'

export default function AddTransaction() {

    const {transactions, setTransactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck} = React.useContext(Context)

    //se inicializa la variable booleana
    var isIncome = true
    var newTransactions = transactions

    //Si se hace click en Expense, se cambia el isIncome
    const handleExpense = () => {
        isIncome = false
    }

    //Si se hace click en Income, se cambia el isIncome
    const handleIncome = () => {
        isIncome = true
    }

    //cuando se haga click en Agregar, se agrega un nuevo objeto a nuestro array de objetos 'transactions'
    const handleSubmit = (e) => {
        e.preventDefault()
        setTransactions(
            transactions.concat([
                {
                    amount: Number(document.getElementById("amount").value),
                    concept: document.getElementById("concept").value,
                    date: document.getElementById("date").value,
                    income: isIncome
                }
            ])
        )
        cancelCourse()
    }

    const cancelCourse = () => { 
        document.getElementById("AddTransaction").reset()
      }

    return (
        <>
            <h3 className="row justify-content-between">
                <span className="col-lg-5 sectionTitle">Agregar Transacción</span>
            </h3>
            <div className = "sections">
                <form className="section" id="AddTransaction">
                    <div className="row inputRow" >
                        <input className="col-4 form-control" type="date" placeholder="Fecha" id="date"></input>
                        <input className="col-7 form-control" type="text" placeholder="Concepto" id="concept"></input>
                    </div>
                    <div className="row inputRow justify-content-between">
                        <input className="col-4 form-control" type="text" placeholder="Monto Bs.S." id="amount"></input>
                        <input className=" form-check-input" type="radio" value="Expense" name="transaction" onClick={handleExpense} defaultChecked = "false"></input>
                        <label className="col-1 form-check-label" for="Expense">Gasto</label>
                        <input className=" form-check-input" type="radio" value="Income" name="transaction" onClick={handleIncome} defaultChecked = "true"></input>
                        <label className="col-1 form-check-label" for="Income">Ingreso</label>                       
                        <button className="col btn btn-success" onClick={handleSubmit}>Agregar</button>        
                    </div>                
                </form>
            </div>
            
        </>
    )
}


