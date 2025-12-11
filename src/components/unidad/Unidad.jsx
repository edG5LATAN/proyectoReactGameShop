import React, { useEffect, useState } from "react";
import "./Unidad.css";
import oferta from "../../../public/img/offer.png";

function Unidad({ data }) {
  return (
    <div className="unidad_contenedor">
      <div className="unidad_caja">
        {data.promocion == true ? (
          <img src={oferta} alt="oferta" className="unidad_ofertas" />
        ) : null}{" "}
        <img src={data.imagen} alt="imagen principal" className="unidad_img" />
        <div className="unidad_informacion">
          <h3>{data.marca}</h3>
          <h4>{data.modelo}</h4>
          <p>{data.descripcion2}</p>
          <p className="unidad_precio">
            {data.precio} <span>Lps</span>
          </p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Unidad;
