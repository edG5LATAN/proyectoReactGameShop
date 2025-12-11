import React, { useEffect, useState } from "react";
import "./Productos.css";
import Tarjeta from "../tarjeta/Tarjeta";


function Productos( {dtos, titulo}) {

  const [arr,setarr]= useState([])

  useEffect(()=>{
   setarr(dtos)
  },[dtos])

  return (
    <div className="productos_contenedor">
      <h2>{titulo}</h2>
      <div className="productos_carrucel">
       {
        arr.map((res,index)=>{
          return <Tarjeta key={index} info={res}/>
        })
       }  
      </div>
    </div>
  );
}

export default Productos;
