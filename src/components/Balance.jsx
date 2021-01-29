import React, {useEffect} from 'react' //esto lo necesitaba para llamar al useEffect o tambien se puede hacer asi: React.useEffect (nota personal)
import regeneratorRuntime from "regenerator-runtime"; //esto lo necesitaba para correr el codigo
import Context from '../context/Context'


export default function Balance(props) {
    //cree un boton nuevo llamado exchangeCheck ( y su funcionamiento )
    const {transactions, incomeCheck, expenseCheck, exchangeCheck} = React.useContext(Context)
    //cree un state especificamente para almacenar el valor de la tasa de DolarToday
    const [tasa, setTasa] = React.useState()

    const url = "https://s3.amazonaws.com/dolartoday/data.json"
    //cree una funcion de flecha asincrona para poder almacenar la informacion especifica de la API en la variable o state "tasa"
    const fetchApi = async () => {
            const response = await fetch(url)
            const responseJSON = await response.json()
            setTasa(responseJSON.USD.transferencia) //aca cambio el valor de "tasa" con setTasa al valor en cuestion
        }
        
        //aca inicializo la funcion fetchApi
        useEffect(() => {
            fetchApi()
        }, [] )

        //cree esta funcion para que recibiera dos parametros, el balance total (bs) y la tasa de dolar today (t) para que se dividan cuando la llame
        function cambioAd (bs, t)
            {
                return bs / t;
            }

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
                     {(() => {
                         // esto lo hice porque para hacer el if necesitaba estar dentro de una funcion, asi que hice una funcion de flecha dentro del <span>
                             if (exchangeCheck == true) // si el boton esta checkeado entonces...
                             {
                                 return <p>{"USD. " + cambioAd(monto, tasa)}</p>//... muestra el valor del balance en dolares
                             }
                             else // si no...
                             {
                                return <p>{"Bs.S. " + monto} </p> //... muestra el valor original de bolivares
                             }
          
                        })()}

                </span>
            </div>
                

            
        </div>
    )
}
