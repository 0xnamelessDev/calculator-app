import './App.css';
import Button from './components/Button';
import Output from './components/Output';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val =>{
    setInput(input + val);
  };

  const inputResult = () => {
    try{
      if(input){
        setInput(evaluate(input));
      }
      else{
        alert('Introduzca valores para obtener un resultado');
      }
    } catch{
      setInput('ERROR!');
    } 
  };

  return (
    <div className="App">
      <div className='calculator-container'>
        <Output input={input}/>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={inputResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton manageClick={()=>setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
