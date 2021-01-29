import React from 'react'

import Context from './Context.js'

export default function Provider({ children }) {

  const [transactions, setTransactions] = React.useState([
      /**Dummy transactions solo para ilustrar */
      {amount: 10000, concept: 'Comprar flores', date: '2021-01-06', income: false},
      {amount: 200000, concept: 'Salario', date: '2021-01-05', income: true},
      {amount: 5000, concept: 'Telefono', date: '2021-01-04', income: false},
      {amount: 10000, concept: 'Deuda', date: '2021-01-04', income: true},
      {amount: 100000, concept: 'Pizza', date: '2021-01-05', income: true},
      {amount: 15000, concept: 'Venta', date: '2021-01-06', income: true},
      {amount: 40000, concept: 'Pago alquiler', date: '2021-01-04', income: false},
      {amount: 100000, concept: 'Deuda', date: '2021-01-01', income: true}
    ])

  const addTransaction = (e) =>{
    setTransactions(e)
  }

  //Estados de botones radiales que muestran u ocultan transacciones
  const [incomeCheck, setIncomeCheck] = React.useState(true)
  const [expenseCheck, setExpenseCheck] = React.useState(true)

  //Estados de moneda a mostrar


  return (
    <Context.Provider value={{transactions, addTransaction, setTransactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck}}>
      { children }
    </Context.Provider>
  )
}