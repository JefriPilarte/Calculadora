import './App.css';
import Boton from './componentes/boton.jsx';
import Pantalla from './componentes/pantalla.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => setInput(input + val);

  const Cal = ()=> setInput(evaluate(input));

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={Cal}>=</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={()=> setInput('')}>Clear</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;