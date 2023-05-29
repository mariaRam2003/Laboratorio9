import './App.css';
import Button from "./components/Button";
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import { useEffect } from 'react';
import {evaluate, prodDependencies} from 'mathjs';


  function App() {

    const [input, setInput] = useState('');
    const [isNegative, setIsNegative] = useState(false);

    const realizarModulo = () => {
      if (input) {
        const operadores = ["+", "-", "*", "/", "%"];
        const operadorIndex = input.split("").findIndex((char) => operadores.includes(char));
    
        if (operadorIndex !== -1) {
          const num1 = parseFloat(input.slice(0, operadorIndex));
          const num2 = parseFloat(input.slice(operadorIndex + 1));
          
          if (num2 !== 0) {
            const resultado = num1 % num2;
            setInput(resultado.toString());
          } else {
            setInput("ERROR");
          }
        } else {
          setInput("ERROR");
        }
      } else {
        alert("Por favor ingrese valores para realizar los cálculos");
      }
    };
      

    const cambiarSigno = () => {
      if (input !== "") {
        setInput(prevInput => {
          const num = parseFloat(prevInput);
          const negativo = -num;
          setIsNegative(prevIsNegative => !prevIsNegative);
          return negativo.toString();
        });
      }
    };
    

    const agregarInput = val => {
      if (input.length < 21) {
        setInput(prevInput => {
          let newInput = prevInput + val;
          if (isNegative && val !== "-") {
            newInput = "-" + newInput;
          }
          return newInput;
        });
      }
    };
    

    const calcularResultado = () => {
      if (input) {
        const resultado = evaluate(input);
        const formattedResult = Number(resultado);
    
        if (Number.isNaN(formattedResult) || formattedResult > 999999999) {
          setInput("ERROR");
        } else {
          if (formattedResult < 0) {
            setInput("ERROR***");
          } else {
            if (Number.isInteger(formattedResult)) {
              setInput(parseInt(formattedResult).toString()); // Mostrar como entero
            } else {
              setInput(formattedResult.toFixed(9).toString()); // Limitar a 9 decimales
            }
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
        } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
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
              <Button manejarClic={cambiarSigno}>+/-</Button>
              <Button manejarClic={realizarModulo}>%</Button>
                
            </div>

          </div>

      </div>
    );
  }

  export default App;
