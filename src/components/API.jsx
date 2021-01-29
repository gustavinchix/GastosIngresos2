import React from 'react'
import '../style.css'

import Navbar from './Navbar.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'
import CheckBtns from './CheckBtns.jsx'
import Analytics from './Analytics.jsx'
import CurrencyConverter from './CurrencyConverter.jsx'
import ContextProvider from '../context/Provider.js'
import Balance from './Balance.jsx'

import Palette from './Palette.jsx'
import Context from '../context/Context'

export default function API() {


    //////////////////////////////////////////////////// DE JHONY, NO MODIFICADO, DESDE AQUI/////////////////////////////////////////////
    // como usar una API

  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setPosts(data)
      setIsLoading(false)
    }).catch((error) => {
      /* Error */
    })
  }, [])

    //////////////////////////////////////////////////// DE JHONY, HASTA AQUI/////////////////////////////////////////////



  return (
    <>
      <div>
        <Navbar />
        <ContextProvider>
          <div className = "container">
            <div className = "row justify-content-between">
              <div className = "col-12 col-sm-12 col-md-12 col-xl-6 columnas">
                <TransactionList/>
                <Balance />
              </div>
              <div className = "col-12 col-sm-12 col-md-12 col-xl-6 columnas">
                <AddTransaction/>
                <Analytics />
                <CurrencyConverter />
              </div>
            </div>
          </div>
        </ContextProvider>

          
      </div>
      
    </>
  )
}