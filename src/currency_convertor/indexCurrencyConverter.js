import { React, useCallback, useState, useEffect } from 'react'
import Converter from './converter'
import useCurrencydataHook from './useCurrencydataHook'
import './index.css'


function IndexCurrencyConverter() {


  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
  const data = useCurrencydataHook(from)

  let options = Object.keys(data)



  const [fromamount, setfromamount] = useState(0)
  const [toamount, settoamount] = useState(0)


  const convertering = useCallback(() => settoamount(fromamount * data[to]), [settoamount, data, fromamount, to])

  useEffect(() => {
    convertering()
  }, [settoamount, data, fromamount, to, convertering])




  return (
    <Converter
      curoption={options}
      from={from}
      to={to}
      onAmountChange={(amount) => setfromamount(Number(amount.target.value))}
      onCurrencyChangef={(e) => { setfrom(e.target.value) }}
      onCurrencyChanget={(e) => { setto(e.target.value) }}
      fromamount={fromamount}
      toamount={toamount}
      swap={() => {
        const tempto = to;
        const tempfrom = from;
        setfrom(tempto);
        setto(tempfrom);
      }}
    />

  )




}

export default IndexCurrencyConverter