import './App.css';
import Button from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import imagenLogo from './imagenes/logo.png';
import Logo from './componentes/Logo';
import {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  }

  const resultado = () => {
    const expValidator = new RegExp(/[0-9][0-9+-/*]*[0-9]$/)
    if (expValidator.test(input)) {
      setInput(evaluate(input));
    } else {
      alert('Caracteres no permitidos al inicio');
    }
  };

  return (
    <div className="App">
      <Logo 
        logo = {imagenLogo} />
      <div className='container-calc'>
        <div className='calc'>
          <Pantalla 
            input = {input} />
          <div className='calc-row'>
            <Button managerClick = {addInput}>1</Button>
            <Button managerClick = {addInput}>2</Button>
            <Button managerClick = {addInput}>3</Button>
            <Button managerClick = {addInput}>+</Button>
          </div>
          <div className='calc-row'>
            <Button managerClick = {addInput}>4</Button>
            <Button managerClick = {addInput}>5</Button>
            <Button managerClick = {addInput}>6</Button>
            <Button managerClick = {addInput}>-</Button>
          </div>
          <div className='calc-row'>
            <Button managerClick = {addInput}>7</Button>
            <Button managerClick = {addInput}>8</Button>
            <Button managerClick = {addInput}>9</Button>
            <Button managerClick = {addInput}>*</Button>
          </div>
          <div className='calc-row'>
            <Button managerClick = {resultado}>=</Button>
            <Button managerClick = {addInput}>0</Button>
            <Button managerClick = {addInput}>.</Button>
            <Button managerClick = {addInput}>/</Button>
          </div>
          <div className='calc-row'>
            <BotonClear 
              managerClick = {() => setInput('')}>
                Clear
            </BotonClear>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
