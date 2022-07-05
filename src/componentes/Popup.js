import React from 'react';

const Popup = (props) => {
    <dialog className='popup'>
        <p className='text-popup'>Por favor escríba un valor para calcular</p>
        <button className='btn-popup' onClick={() => props.close}></button>
    </dialog>
}

export default Popup;