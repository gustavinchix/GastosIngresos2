import React from 'react'

import Context from '../context/Context'


export default function Balance(props) {

    const {transactions, incomeCheck, expenseCheck} = React.useContext(Context)

    //variable monto inicializada en 0
    let monto = 0
    let colorTotal = "plus"
    
    //funcion que suma los ingresos y resta los gastos
    function total() {
        {
            transactions.map((transaction) => {

                //si la transaccion es ingreso y el checkbox de ingreso esta prendido, entonces sumar monto
                if (transaction.income == true && incomeCheck == true) {
                    monto = monto + transaction.amount
                }


                //si la transaccion es gasto y el checkbox de gasto esta prendido, entonces restar monto
                else if (transaction.income == false && expenseCheck == true) {
                    monto = monto - transaction.amount
                }
            }
            )
        }
        if (monto < 0){
            colorTotal = "minus"
        }
    }

    //corremos la funcion y luego renderizamos el resultado 
    return (
        <div>
            {total()}

            <div className = "row justify-content-end ">
                <span className = {" balanceBox money aligns-self-end " + colorTotal}>
                    <span style = {{color: "#212529"}}>Balance</span> <br/>
                     {"Bs.S. " + monto}
                </span>
            </div>
                

            
        </div>
    )
}
