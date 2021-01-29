import React from 'react'

import Context from '../context/Context'
import AddTransaction from './AddTransaction.jsx'
import CheckBtns from './CheckBtns.jsx'


export default function TransactionList() {

    const {transactions, setTransactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck} = React.useContext(Context)

    function deleteTransaction(id, index){

        console.log(id)
        //transactions.map((transaction) => {
        //    if(id == index){
        //        transactions.splice(id,1)
        //    }
       // }
    }

    return (
        <>
            <h3 className="row justify-content-between">
                <span className="col-lg-5">History</span>
                <CheckBtns className="col-lg-5"/>
                
                
            </h3>
            <ul className="list">

                {/**
                 * la funcion map toma el arreglo transactions y recorre uno a uno sus elementos, cada vez que lee un objeto
                 * evalua si es un ingreso o un gasto y si debe renderizarlo.
                 */}
                {transactions.map((transaction, index) =>
                    //si la transaccion es ingreso y el checkbox de ingreso esta prendido, entonces renderizar
                    {if(transaction.income == true && incomeCheck == true){
                        
                        return <li className = "li plus row justify-content-between" key = {index}>
                                    <span className="col-3 dateList" >{transaction.date}</span>
                                    <span className="col-5 concept">{transaction.concept}</span>
                                    <span className="col-4 amount"><span className = "sign">Bs.S. </span>{transaction.amount}</span>
                                </li>
                    }
                    //si la transaccion es gasto y el checkbox de gasto esta prendido, entonces renderizar
                    else if(transaction.income == false && expenseCheck == true) {
                        return <li className = "li minus" key = {index}> <span className="col-3 dateList">{transaction.date}</span>
                                    <span className="col-5 concept">{transaction.concept}</span>
                                    <span className="col-4 amount"><span className = "sign">Bs.S. </span>{transaction.amount}</span>
                                </li>}
                    }
                )}                   
            </ul>

            
        </>
    )
}
