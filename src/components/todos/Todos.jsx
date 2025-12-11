import React, { useEffect, useState } from "react";
import "./Todos.css";
import Tarjeta from "../tarjeta/Tarjeta";
import { obtenerPorCategoria, obtenerPorPromocion, obtenerTodosLosDatos } from "../../service/Service";
import { useNavigate, useParams } from "react-router-dom";

function Todos() {

  const {data}= useParams();
  const navigate = useNavigate();
  const [titulo,settitulo]=useState("")
  const [info, setinfo] = useState([]);

  useEffect(() => {
    settitulo("")

    switch (data) {
      case "promos":
        settitulo("Promociones mensuales")
        setinfo(obtenerPorPromocion());
        break;
      case "consolas":
        settitulo("variedad de consolas")
        setinfo(obtenerPorCategoria(data))
        break;
      case "accesorio varios":
        settitulo("Accesorios Gaming")
        setinfo(obtenerPorCategoria(data))
        break;
      case "video juegos":
        settitulo("Variedad en video juegos")
        setinfo(obtenerPorCategoria(data))
        break;
      case "catalogo":
        settitulo("Todo nuestro catalogo")
        setinfo(obtenerTodosLosDatos());
        break;
      default:
        navigate("/")
        break;
    }
  }, [data]);


  return (
    <div className="todos_contenedor">
      <h2>{titulo}</h2>
      {
      info == [] ? 
        <div className="todos_caja">cargando</div>
       : 
       <div className="todos_caja">
        {
          info.map((res,index)=>{
            return<Tarjeta info={res} key={index} />
            })
        }
        </div>
      }
    </div>
  );
}

export default Todos;
