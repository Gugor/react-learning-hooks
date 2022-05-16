import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Canvas from './components/Canvas';
import { useEffect, useState } from 'react';

function App() 
{
  const [consoleState, setConsoleState] = useState(null);
  const [consoleLinesState, setConsoleLineState] = useState([])
  
  const handleConsoleState = (val) => 
  {
      setConsoleState(val)
      console.log('Line: ' + val)
  }

  const updateLinesState = (newLine) => {
    setConsoleLineState((prevState) => {
      return [...prevState,newLine]
    })
    setConsoleState('');
    console.log(consoleLinesState);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning Hooks in React</h1>
        
        <Form handleConsoleInput={handleConsoleState} updateLinesState={updateLinesState} consoleState={consoleState} />
        <Canvas consoleInput={consoleState} consoleLinesState={consoleLinesState}/>
      </header>
    </div>
  );
}

export default App;
