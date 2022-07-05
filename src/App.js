import './App.css';
import Button from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Popup from './componentes/Popup';
import logo from './imagenes/logo.png';
import {useState} from 'react';
import { evaluate } from 'mathjs';
import { ReactDOM } from 'react';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  }

  const closePopup = () => document.querySelector('.popup').close();

  const popup = <dialog className='popup'>
  <p className='text-popup'>Por favor escríba un valor para calcular</p>
  <button className='btn-popup'></button>
</dialog>

  const resultado = () => {
    const expValidator = new RegExp(/[0-9][0-9+-/*]*[0-9]$/)
    if (expValidator.test(input)) {
      setInput(evaluate(input));
    } else {
      // alert('Caracteres no permitidos al inicio');
      const appContainer = ReactDOM.document.querySelector('.App');
      appContainer.appendChild(popup);
    }
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img
          src={logo}
          className='logo'
          alt='logo luissdev' />
      </div>
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
