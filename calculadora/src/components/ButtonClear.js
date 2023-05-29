import React from "react";
import './ButtonClear.css'

const ButtonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}

    </div>
);
    

export default ButtonClear;