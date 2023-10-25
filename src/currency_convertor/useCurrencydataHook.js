import { useState, useEffect } from "react";

function useCurrencydataHook(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((result) => result.json())
      .then((result)=>setdata(result[currency]))
    
      
    }, [currency])
    return data
    
}
export default useCurrencydataHook