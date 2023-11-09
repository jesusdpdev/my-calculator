import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/Boton-clear.jsx';
import { useState } from 'react'; //Hook of react for manage states
import { evaluate } from 'mathjs'; // biblioteca que me ofrece resolver operaciones matemáticas

function App() {
  //Creacion de variables para cambiar su estado
  const [input,setInput] = useState('');

  //funcion que me agrega el numero con un parametro de valor para poder sumarlo al input
  const agregarInput = val => {
    setInput(input + val);
  };
  
  //Funcione que me ayuda a calcular el resultado gracias a la libreria mathjs
  const calcularResultado = () => {
    //Condicional que me identifica si input existe
    if(input){
      setInput(evaluate(input)); //Se realiza la operacion si es verdadero
    } else {
      alert("Por favor ingrese valores válidos para ejecutar la aplicación")
    }
    
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} alt="logo-freecodecamp" className='freecodecamp-logo' />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear = {() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
