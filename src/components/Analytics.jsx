import React from 'react'

import Context from '../context/Context'

export default function Analytics(props) {

    const {transactions, incomeCheck, setIncomeCheck, expenseCheck, setExpenseCheck} = React.useContext(Context)

    var barHeights = [0,0,0,0,0,0,0]
    var totAmounts = [0,0,0,0,0,0,0]

    function parseDate(s) {
        var b = s.split(/\D/);
        return new Date(b[0], --b[1], b[2]);
    }

    function weeklyAnalysis() {

        barHeights = [0,0,0,0,0,0,0]

        //suma el monto de cada transaccion a cada dia de la semana
        transactions.map((transaction) => {
            if(transaction.income == true && incomeCheck == true){
                barHeights[parseDate(transaction.date).getDay()] = barHeights[parseDate(transaction.date).getDay()] + transaction.amount;
            }

            else if(transaction.income == false && expenseCheck == true){
                barHeights[parseDate(transaction.date).getDay()] = barHeights[parseDate(transaction.date).getDay()] + transaction.amount;
            }
        });

        console.log(barHeights)
        totAmounts = Array.from(barHeights);
        console.log(totAmounts)

        barHeights.map((bar, index) => {
            barHeights[index] = bar/barHeights.reduce((a, b) => a + b, 0)
        })
        console.log(totAmounts)
        if(!incomeCheck && !expenseCheck){
            barHeights = [0,0,0,0,0,0,0]
        }
    }

    weeklyAnalysis()

    function tipoTransaccion() {
        if(incomeCheck && !expenseCheck){
            return "Ingresos por día"
        } else if (!incomeCheck && expenseCheck){
            return "Gastos por día"
        } else if (incomeCheck && expenseCheck){
            return "Gastos e Ingresos por día"
        } else {
            return " "
        }
    }

    return (
        <>
            <h3 className="row justify-content-between">
                <span className="col-lg-5 sectionTitle">Analítica</span>
            </h3>
            <div className = "sections">
                
                <div className="section">
                    <h5>{tipoTransaccion()}</h5>                   
                    <div className="row inputRow chartbox justify-content-between" >   
                        <div className="col-1 barra" style={{height: barHeights[0]  * 200}}>D</div>
                        <div className="col-1 barra" style={{height: barHeights[1]  * 200}}>L</div>
                        <div className="col-1 barra" style={{height: barHeights[2]  * 200}}>M</div>
                        <div className="col-1 barra" style={{height: barHeights[3]  * 200}}>M</div>
                        <div className="col-1 barra" style={{height: barHeights[4]  * 200}}>J</div>
                        <div className="col-1 barra" style={{height: barHeights[5]  * 200}}>V</div>
                        <div className="col-1 barra" style={{height: barHeights[6]  * 200}}>S</div>                            
                    </div>
                    <div className="row inputRow justify-content-between">
                        <span className = "col-1 totAmounts">{totAmounts[0]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[1]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[2]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[3]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[4]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[5]}</span>
                        <span className = "col-1 totAmounts">{totAmounts[6]}</span>
                    </div>              
                </div>
            </div>

        </>
    )
}
