import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import AcercaDe from './components/acerca/AcercaDe.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Banner from './components/banner/Banner.jsx'
import Pantalla from './components/pantalla2/Pantalla.jsx'
import Todos from './components/todos/Todos.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appHome'>
      <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path='/todos/:data' element={<Todos />} />
        <Route path='/acercade' element={<AcercaDe />} />
        <Route path='/' element={<Home />} />
        <Route path='/pantalla/:id' element={<Pantalla />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
