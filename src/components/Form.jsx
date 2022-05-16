import React, { useState } from 'react'

export default function Form({handleConsoleInput, updateLinesState, consoleState}) {
  const [input, setInput] = useState()
  const handelChangeValueInput = (e) => 
  {
    handleConsoleInput(e.target.value)
    setInput(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault();
    updateLinesState(input)
  };

  return (
    <form className='form' onSubmit={submit} >
        <label htmlFor='console'>Console: </label>
        <input type="text" className='consoleInput' value={consoleState}  name="console" onChange={handelChangeValueInput} placeholder='_'/>
    </form>
  )
}
