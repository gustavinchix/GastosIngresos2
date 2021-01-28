import React from 'react'

import Context from '../context/Context'

export default function TransactionList() {

    const {transactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck} = React.useContext(Context)


    return (
        <>
            <h3>History</h3>
            <ul className="list">

                {/**
                 * la funcion map toma el arreglo transactions y recorre uno a uno sus elementos, cada vez que lee un objeto
                 * evalua si es un ingreso o un gasto y si debe renderizarlo.
                 */}
                {transactions.map((transaction) =>
                    //si la transaccion es ingreso y el checkbox de ingreso esta prendido, entonces renderizar
                    {if(transaction.income == true && incomeCheck == true){
                        return <li className = "li plus"> <span>{transaction.date}</span>
                                    <span>{transaction.concept}</span>
                                    <span>+ {transaction.amount}</span>
                                </li>
                    }
                    //si la transaccion es gasto y el checkbox de gasto esta prendido, entonces renderizar
                    else if(transaction.income == false && expenseCheck == true) {
                        return <li className = "li minus"> <span>{transaction.date}</span>
                                    <span>{transaction.concept}</span>
                                    <span>- {transaction.amount}</span>
                                </li>}
                    }
                )}                   
            </ul>
        </>
    )
}
