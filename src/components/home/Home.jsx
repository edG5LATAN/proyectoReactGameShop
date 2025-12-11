import React, { useEffect, useState } from 'react'
import './Home.css'
import Productos from '../productos/Productos'
import { obtenerPorCategoria } from '../../service/Service';

function Home() {

  const [consola,setconsolas]=useState([]);
  const [videojuego,setvideojuego]=useState([]);
  const [accesorios,setaccesorios]=useState([]);


  useEffect(() => {
    setconsolas(obtenerPorCategoria("consolas"))
    setaccesorios(obtenerPorCategoria("accesorio varios"))
    setvideojuego(obtenerPorCategoria("video juegos"))

  }, [])

  

  return (
    <div className='home_contenedor'>
      <Productos dtos={consola} titulo={"consolas"} />
      <Productos dtos={videojuego} titulo={"video juegos"}/>
      <Productos dtos={accesorios} titulo={"accesorios varios"}/>
    </div>
  )
}

export default Home
