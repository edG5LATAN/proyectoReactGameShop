import React from 'react'
import './Header.css'
import LogoImg from '../../../public/img/header/logoGame.png'
import { useNavigate } from 'react-router-dom'
import Boton from '../boton/Boton';

function Header() {

  const navigate= useNavigate();

  const irAapartado=(opcion)=>{
    return ()=>navigate(`./todos/${opcion}`)
  }

  return (
    <div className='headerHome'>
      <img onClick={()=>{navigate("/")}} src={LogoImg} alt="logo" />
      <div className='headerBuscador'>
        <Boton children={"consolas"} onClick={irAapartado("consolas")} />
        <Boton children={"Video Juegos"} onClick={irAapartado("video juegos")} />
        <Boton children={"Accesorios"} onClick={irAapartado("accesorio varios")} />
        <Boton children={"Catalogo"} onClick={irAapartado("catalogo")} />
      </div>
      <button className='header_boton_login' >Login</button>
    </div>
  )
}

export default Header
