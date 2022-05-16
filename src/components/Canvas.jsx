import React from 'react'

export default function Canvas({consoleInput, consoleLinesState}) 
{
  return (
    <div className='canvas' id='canvas'>
      {
        consoleLinesState.map((line) =>(
          <div className='consoleLine'> {line} </div>
        ))
      }
      {
        <div className='consoleInputLine'> {consoleInput !== null ? consoleInput : '...'}</div>
      }
    </div>
  )
}
