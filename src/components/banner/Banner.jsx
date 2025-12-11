import React from "react";
import "./Banner.css";
import jumbotrom from "../../../public/img/panoramica.webp";
import { useNavigate } from "react-router-dom";

function Banner() {

   const navigate =useNavigate();

  return (
    <div className="banner_contenedor">
      <img src={jumbotrom} alt="banner" />
      <div className="banner_informacion">
        <h1>Ofertas hasta 20%</h1>
        <p>
          ven y aprovecha las promociones por tiempo limitado en todos nuestros productos consolas, videojuegos, accesorios gaming
          por tiempo limitado!
        </p>
        <button onClick={()=>navigate(`/todos/${'promos'}`)}>promociones</button>
      </div>
      <marquee behavior="scroll" direction="left" scrollamount="6">
  ¡Oferta limitada! Descuentos del 50% en toda la tienda contamos con sistema de pagos online y envios a cualqiuier parte del pais costo de envio por aparte.
</marquee>
    </div>
  );
}

export default Banner;
