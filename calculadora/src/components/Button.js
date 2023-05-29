import React from "react";
import './Button.css'
import clickSound from '../sounds/SoundButton.mp3';

const Button = (props) => {
  const audio = new Audio(clickSound);
  const esOperador = valor => {
    return isNaN (valor) && (valor !== '.') && (valor !== '=');
};

  const reproducirAudio = () => {
    audio.play();
  }

  return (
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => {
        reproducirAudio();
        props.manejarClic(props.children);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;