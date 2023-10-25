import React from 'react'
import './index.css'

function Converter(
  {
    curoption = [],
    from,
    to,
    onAmountChange,
    onCurrencyChangef,
    onCurrencyChanget,
    fromamount,
    toamount,
    swap
  }
) {
  
 
  return (
    <>
      <div className='h-screen w-screen'>
        <div className=' h-full w-full flex flex-col gap-8 justify-center flex-wrap content-center'
          style={{
            backgroundSize: "cover",
            backgroundImage: 'url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundRepeat: 'no-repeat',

          }}
        >
          <div className=' border-2 rounded-lg border-white border-solid py-6 px-11 flex flex-col justify-center flex-wrap content-center w-96'
            style={{
              backgroundColor: 'rgb(255,255,255, 0.33)'
            }}>
            <div className=' w-full bg-white h-20 rounded-lg relative'>
              <span className='absolute font-sans text-slate-500 text-xs font-bold left-2 top-2'>From</span>
              <input
                type='number'
                className='absolute py-1 px-2 text-xs bottom-4 left-2 font-bold rounded-lg bg-blue-200 outline-none'
                onChange={(value)=>onAmountChange(value)}
              
              />
              <select
                className='absolute right-2 bottom-4 bg-gray-200 rounded-lg border-x-4 border-gray-200 border-solid'
                onChange={onCurrencyChangef}
                value={from}
                >
                {curoption.map((cur) => (
                  <option value={cur}>{cur}</option>
                )
                )}
              </select>

            </div>
            <div className=' w-full h-8 bg-transparent flex justify-center flex-wrap content-center text-sm'>
              <button className=' w-16 h-6 rounded-lg border-x-gray-950 border-x-2  bg-white text-black font-serif font-bold text-xs hover:border-x-4 active:bg-white active:border-x-2 hover:text-sm active:text-xs'
                onClick={swap}
              >Swap</button>
            </div>

            <div className=' w-full bg-white h-20 rounded-lg relative'>
              <span className='absolute font-sans text-slate-500 text-xs font-bold left-2 top-2'>To</span>
              <input
                type='number'
                className='absolute py-1 px-2 text-xs bottom-4 left-2 font-bold rounded-lg bg-blue-200 outline-none'
                // disabled="false"
                value={toamount}
                onChange={() => { }}

              />
              <select
                className='absolute right-2 bottom-4 bg-gray-200 rounded-lg border-x-4 border-gray-200 border-solid'
                value={to}
                onChange={onCurrencyChanget}
              >
                {curoption.map((cur) => (
                  <option value={cur}>{cur}</option>
                )
                )}
              </select>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Converter