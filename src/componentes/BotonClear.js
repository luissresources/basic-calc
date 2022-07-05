import React from 'react';
import '../stylesheets/BotonClear.css';

const BotonClear = (props) => (
    <div className='button-clear' onClick = {props.managerClick}>
        {props.children}
    </div>
); 

export default BotonClear;