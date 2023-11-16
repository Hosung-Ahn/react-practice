import logo from './assets/investment-calculator-logo.png';
import Header from "./component/Header/Header";
import InvestInput from "./component/InvestInput/InvestInput";
import InvestResult from "./component/InvestResult/InvestResult";
import {useState} from "react";

function App() {
  const [dataCalculated, setDataCalculated] = useState([]);
  const [showTable, setShowTable] = useState(false);

  function formatNumber(num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const calculateHandler = (userInput) => {
    setShowTable(true)

    const yearlyData = []

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData)

    let resultData = []
    let TotalInterest = 0;
    for (let data of yearlyData) {
      TotalInterest += data.yearlyInterest;
      resultData.push({
        year : data.year,
        totalSavings : formatNumber(data.savingsEndOfYear),
        interest : formatNumber(data.yearlyInterest),
        totalInterest : formatNumber(TotalInterest),
        investedCapital :formatNumber(data.savingsEndOfYear - TotalInterest)
      })
    }

    setDataCalculated(resultData)
  };

  const resetHandler = () => {
    setShowTable(false)
  }

  const resultContent = showTable ? <InvestResult items={dataCalculated}/> : <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>

  return (
    <div>
      <Header/>

      <InvestInput calulateHandler={calculateHandler} resetHandler={resetHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {resultContent}
    </div>
  );
}

export default App;
