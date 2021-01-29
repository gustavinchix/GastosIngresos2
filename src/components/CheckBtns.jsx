import React from 'react'

import Context from '../context/Context'

//componente que renderiza los checkbox de Ingreso y Gastos

export default function CheckBtns() {

    const { incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck} = React.useContext(Context)

    //cuando se haga click en la checkbox de gastos, se invierte el valor de expenseCheck
    const handleChangeExpense = () => {
        setExpenseCheck(!expenseCheck)
    }

    //cuando se haga click en la checkbox de ingresos, se invierte el valor de incomeCheck
    const handleChangeIncome = () => {
        setIncomeCheck(!incomeCheck)
    }

    //input checkbox que al hacer click, se ejecutan las funciones anteriores
    return (
        <div>
            <input type="checkbox" value="Expense" name="Expense" defaultChecked="true" onClick={handleChangeExpense}/>
            <label>Gastos </label>
            <input type="checkbox" value="Income" name="Income" defaultChecked="true" onClick={handleChangeIncome}/>
            <label>Ingresos</label>
        </div>

    )
}