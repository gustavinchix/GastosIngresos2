import React from 'react'

import Context from './Context.js'

export default function Provider({ children }) {

  const transactions = [
      /**Dummy transactions solo para ilustrar */
      {amount: 10000, concept: 'Comprar flores', date: '21/01/2021', income: false },
      {amount: 200000, concept: 'Salario', date: '22/01/2021', income: true},
      {amount: 5000, concept: 'Telefono', date: '24/01/2021', income: false},
      {amount: 10000, concept: 'Deuda', date: '27/01/2021', income: true}
    ]


  //Estados de botones radiales que muestran u ocultan transacciones
  const [incomeCheck, setIncomeCheck] = React.useState(true)
  const [expenseCheck, setExpenseCheck] = React.useState(true)

  //Estados de moneda a mostrar


  return (
    <Context.Provider value={{transactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck}}>
      { children }
    </Context.Provider>
  )
}