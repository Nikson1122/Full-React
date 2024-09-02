import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
 const [length, setlength] = useState(8)
 const [numberAllowed, setnumberAllowed] = useState(false);
 const [charAllowed, setcharAllowed] = useState(false);
 const[password, setPassword] = useState("")
//useref hook
const passwordRef = useRef(null)
 const passwordGenerator = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijhlmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*(){}[]"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length )

    pass += str.charAt(char)
    
  }
  setPassword(pass)


 },[length, numberAllowed, charAllowed, setPassword])

 const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 101);
  window.navigator.clipboard.writeText(password)
 }, [password])
 
 useEffect(() => {
 
  passwordGenerator()
  console.log(password)
}, [passwordGenerator])


  return (
    <>
    {/* <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Genetator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0'>
        copy

      </button>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value ={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label> Length:{length}</label>
        </div>
        <input 
        type="checkBox"
        defaultChecked= {numberAllowed}
        id='numberInput'
        onChange={()=> {
          setnumberAllowed((prev) => !prev)
        }} 
        />
        <label htmlFor="numberInput">Numbers</label>
        
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setcharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="charactetInput">Characters</label>
      </div>
    </div>
    </div> */}
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex flex-col shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0'>
            Copy
          </button>

          <div className='flex text-sm gap-x-2 flex-col mt-4'>
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setlength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                checked={numberAllowed}
                id='numberInput'
                onChange={() =>
                  setnumberAllowed((prev) => !prev)}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-2'>
                
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
