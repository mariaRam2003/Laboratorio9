import './App.css';
import Button from "./components/Button";
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import { useEffect } from 'react';
import {evaluate, prodDependencies} from 'mathjs';


  function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
      if (input.length < 9) {
        setInput(prevInput => prevInput + val);
      }
    };

    const calcularResultado = () => {
      if(input){
        const resultado = evaluate(input);
        if (resultado < 0) {
          setInput("ERROR***");
        } else {
          const formattedResult = Number(resultado);
          if (Number.isInteger(formattedResult)) {
            setInput(formattedResult.toString());
          } else {
            setInput(formattedResult.toFixed(8));
          }
        }
      } else {
        alert("Por favor ingrese valores para realizar los cálculos");
      }
    };

    useEffect(() => {
      const handleKeyDown = event => {
        const { key } = event;
        if (/[0-9]/.test(key) && input.length < 9) {
          agregarInput(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
          agregarInput(key);
        } else if (key === '=') {
          calcularResultado();
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  

    return (
      <div className="App">

          <div className='contenedor-calculadora'>
            <Display input={input}></Display>

            <div className='fila'>
              <Button manejarClic={agregarInput}>1</Button>
              <Button manejarClic={agregarInput}>2</Button>
              <Button manejarClic={agregarInput}>3</Button>
              <Button manejarClic={agregarInput}>+</Button>

            </div>
            <div className='fila'>
              <Button manejarClic={agregarInput}>4</Button>
              <Button manejarClic={agregarInput}>5</Button>
              <Button manejarClic={agregarInput}>6</Button>
              <Button manejarClic={agregarInput}>-</Button>

            </div>
            <div className='fila'>
              <Button manejarClic={agregarInput}>7</Button>
              <Button manejarClic={agregarInput}>8</Button>
              <Button manejarClic={agregarInput}>9</Button>
              <Button manejarClic={agregarInput}>*</Button>

            </div>
            <div className='fila'>
              <Button manejarClic={calcularResultado}>=</Button>
              <Button manejarClic={agregarInput}>0</Button>
              <Button manejarClic={agregarInput}>.</Button>
              <Button manejarClic={agregarInput}>/</Button>

            </div>
            <div className='fila'>
              <ButtonClear manejarClear={() => setInput('')}>Clear</ButtonClear>

            </div>

          </div>

      </div>
    );
  }

  export default App;