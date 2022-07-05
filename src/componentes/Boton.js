import React from 'react';
import '../stylesheets/Boton.css';

function Button(props) {
    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <div className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.managerClick(props.children)}>{props.children}</div>
    )
}

export default Button;