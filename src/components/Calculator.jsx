import React, { useState } from 'react';
import '../style/Calculator.css'

const Calculator = () => {
    const[input,setInput]=useState("");
    const[result,setResult]=useState();

   const handleOnClick=(e)=>{
    setInput(input+e.target.value)
    

    }
    const handleOnResult=()=>{
        setResult(eval(input))
    }

    const handleOnClear=()=>{
        setInput("");
        setResult("")

    }
  return (
    <div className="middle">
    <div className="grey">
    <input type="text" value={input}  />
    <h1>{result}</h1>
    </div>
    <button  value="%"  onClick={handleOnClick} className='green'>%</button>
    <button value="/" onClick={handleOnClick}  className='operations'>/</button>
    <button id='Ac' onClick={handleOnClear} className='green'>AC</button>
    <br />
    <button value="1"  onClick={handleOnClick}>1</button>
    <button value="2" onClick={handleOnClick}>2</button>
    <button value="3" onClick={handleOnClick}>3</button>
    <button value="*" onClick={handleOnClick} className='operations'>*</button>
    <br />
    <button value="4" onClick={handleOnClick}>4</button>
    <button value="5" onClick={handleOnClick}>5</button>
    <button  value="6" onClick={handleOnClick}>6</button>
    <button  value="-" onClick={handleOnClick} className='operations'>-</button>
    <br />
    <button  value="7" onClick={handleOnClick}>7</button>
    <button  value="8" onClick={handleOnClick}>8</button>
    <button  value="9" onClick={handleOnClick}>9</button>
    <button  value="+" onClick={handleOnClick} className='operations'>+</button>
    <br />
    <button  value="0" onClick={handleOnClick} id='zero'>0</button>
    <button  value="." onClick={handleOnClick}>.</button>
    
    <button value="=" onClick={handleOnResult} className='operations'>=</button>
    
    <br />
    
    
    
    
   






    </div>
  )
}

export default Calculator