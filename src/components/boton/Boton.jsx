import React from 'react';
import './Boton.css';

function Boton({ children, onClick, estilo = "cuatro" }) {
  return (
    <button 
      className={`boton ${estilo}`}
      onClick={onClick}
    >
      <span>
        {children}     
      </span>
      <svg className={estilo === "cinco" ? "mostrar" : "ocultar"} >
        <rect x="0" y="0" fill='none'></rect>
      </svg>
    </button>
  );
}

export default Boton;