import React from "react";
import './Tarjeta.css'
import oferta from '../../../public/img/offer.png'
import { useNavigate } from "react-router-dom";



function Tarjeta( {info} ) {

  const navigate= useNavigate();

  return (
    <div className="tarjeta_caja">
      {
        info.promocion == true ? 
        <img src={oferta} alt="oferta" className="tarjeta_ofertas" />
        :
        null
      }
      
      <img onClick={()=>navigate(`/pantalla/${info.id}`)} src={info.imagen} className="tarjeta_caja_img" alt="imagen" />
      <div className="tarjeta_precio">
        <h3>{info.marca}</h3>
        <h4>{info.modelo}</h4>
        <h5>{info.descripcion1}</h5>
        <p>
          {info.precio} <span>Lps</span>
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Tarjeta;
