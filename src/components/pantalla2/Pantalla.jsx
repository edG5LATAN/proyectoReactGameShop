import React, { useEffect, useState } from 'react'
import './Pantalla.css'
import Unidad from '../unidad/Unidad'
import Productos from '../productos/Productos'
import { useParams } from 'react-router-dom'
import { obtenerPorCategoria, obtenerPorId } from '../../service/Service'

function Pantalla() {
  const {id} = useParams();
  const [info, setinfo] = useState(null) // Cambiar a null inicial
  const [titulo, settitulo] = useState("")
  const [newarr, setnewarr] = useState([])

  useEffect(() => {
    // 1. Obtener el producto por ID
    const producto = obtenerPorId(id)
    
    if (producto) {
      // 2. Actualizar el estado del producto
      setinfo(producto)
      
      // 3. Obtener la categoría del producto recién obtenido
      const categoriaProducto = producto.categoria
      settitulo(categoriaProducto)
      
      // 4. Obtener productos de la MISMA categoría
      const productosMismaCategoria = obtenerPorCategoria(categoriaProducto)
      
      // 5. Filtrar para excluir el producto actual
      const productosRelacionados = productosMismaCategoria.filter(
        item => item.id != id
      )
      setnewarr(productosRelacionados)
    }
  }, [id])

  // Mostrar loading mientras se carga
  if (!info) {
    return <div>Cargando producto...</div>
  }

  return (
    <div className='pantalla_contenedor'>
      <Unidad data={info} />
      {
        newarr.length === 0
        ?
        <div>No hay productos relacionados disponibles</div>
        :
        <Productos 
          titulo={titulo} dtos={newarr} 
        />
      }
    </div>
  )
}

export default Pantalla