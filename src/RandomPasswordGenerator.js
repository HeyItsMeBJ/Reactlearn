import React from 'react'
import './index.css'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
function RandomPasswordGenerator() {


  const [uppercase, setuppercase] = useState(false)
  const [lowercase, setlowercase] = useState(true)
  const [numbers, setnumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [length, setlength] = useState(8)
  const [password, setpassword] = useState("")
  const copy = useRef(null)


  const passGen = useCallback(() => {
    var str = ""
    if (lowercase === true) str += 'abcdefghijklmnopqrstuvwxyz'
    if (uppercase === true) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbers === true) str += '123456789'
    if (symbols === true) str += '!@#$%^&*(){}:;"<>,./?|'

    let temp = ""
    copy.current.style.color = 'rgb(2,44,34)'

    if (str.length === 0) setpassword('Select Atleast One')
    else {
      for (let index = 0; index < length; index++) {

        temp += str.charAt(Math.floor(Math.random() * str.length + 1))

      }
      setpassword(temp)
    }
  }, [uppercase, lowercase, numbers, symbols, length, copy, setpassword],
  )

  const selectpass = useCallback(() => {
    copy.current.style.color = 'white'

    window.navigator.clipboard.writeText(password)

  }, [password],)

  useEffect(() => passGen(), [passGen])


  return (
    <>
      <div className="w-screen h-screen  bg-sky-600 flex justify-center">
        <div className="py-8 px-10 w-96 h-4/5 mt-6 bg-cyan-950 flex flex-col justify-around content-center flex-wrap rounded-lg">

          <div className="h-16 w-80  bg-sky-600 opacity-80 pt-5 pb-6 px-5 text-emerald-950 font-sans tracking-wider font-bold flex justify-between content-center rounded-lg  ">
            <div className='overflow-hidden w-60  text-emerald-950' ref={copy}>{password}</div>
            <button className=' w-14 h-6 mb-10 text-xs text-white  bg-cyan-950 flex justify-center flex-wrap content-center rounded-lg hover:bg-cyan-900 active:bg-cyan-950' onClick={selectpass}>Copy</button>
          </div>

          <div className="flex flex-col justify-around  content-center flex-wrap gap-3 select-none rounded-lg">
            <div className="h-8 w-80  bg-sky-600 py-6 px-5 flex justify-between  content-center flex-wrap rounded-lg">
              <label
                htmlFor='uppercase'
                className='text-white opacity-80 tracking-wider cursor-pointer hover:opacity-100'
              >
                Include Uppercase
              </label>
              <input
                type='checkbox'
                id='uppercase'
                className='w-5 h-5 mt-1 appearance-none bg-slate-50 opacity-80 rounded-xl checked:bg-cyan-950 checked:opacity-100  hover:opacity-100 cursor-pointer'
                value={uppercase}
                checked={uppercase}
                onChange={() => {
                  if (uppercase === false) setuppercase(true)
                  else setuppercase(false)
                }
                }
              />
            </div>
            <div className="h-8 w-80 bg-sky-600 py-6 px-5 flex justify-between  content-center flex-wrap rounded-lg">
              <label
                htmlFor='lowercase'
                className='text-white opacity-80 tracking-wider cursor-pointer hover:opacity-100'
              >
                Include Lowercase
              </label>
              <input
                type='checkbox'
                id='lowercase'
                className='w-5 h-5 mt-1 appearance-none bg-slate-50 opacity-80 rounded-xl checked:bg-cyan-950 checked:opacity-100  hover:opacity-100 cursor-pointer'
                value={lowercase}
                checked={lowercase}
                onChange={() => {
                  if (lowercase === false) setlowercase(true)
                  else setlowercase(false)
                }
                }
              />
            </div>
            <div className="h-8 w-80 bg-sky-600 py-6 px-5 flex justify-between  content-center flex-wrap rounded-lg">
              <label
                htmlFor='numbers'
                className='text-white opacity-80 tracking-wider cursor-pointer hover:opacity-100'
              >
                Include Numbers
              </label>
              <input
                type='checkbox'
                id='numbers'
                className='w-5 h-5 mt-1 appearance-none bg-slate-50 opacity-80 rounded-xl checked:bg-cyan-950 checked:opacity-100  hover:opacity-100 cursor-pointer'
                value={numbers}
                checked={numbers}
                onChange={() => {
                  if (numbers === false) setnumbers(true)
                  else setnumbers(false)
                }
                }
              />
            </div>
            <div className="h-8 w-80 bg-sky-600 py-6 px-5 flex justify-between  content-center flex-wrap rounded-lg">
              <label
                htmlFor='symbols'
                className='text-white opacity-80 tracking-wider cursor-pointer hover:opacity-100'
              >
                Include Symbols
              </label>
              <input
                type='checkbox'
                id='symbols'
                className='w-5 h-5 mt-1 appearance-none bg-slate-50 opacity-80 rounded-xl checked:bg-cyan-950 checked:opacity-100  hover:opacity-100 cursor-pointer'
                value={symbols}
                checked={symbols}
                onChange={() => {
                  if (symbols === false) setsymbols(true)
                  else setsymbols(false)
                }
                }
              />
            </div>
          </div>

          <div className="h-12 w-80 bg-sky-600 py-6 px-5 relative rounded-lg">
            <input
              type='range'
              min={4}
              max={32}
              id='len'
              value={length}
              className='w-72 h-1 absolute top-4 left-4 range-lg bg-gray-200 rounded-lg appearance-none cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label
              htmlFor='len'
              className='absolute bottom-1 right-6 text-xs text-white tracking-widest'

            >
              Length : <b>{length}</b>
            </label>
          </div>

        </div>
      </div >

    </>
  )
}

export default RandomPasswordGenerator