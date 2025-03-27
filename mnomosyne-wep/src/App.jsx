import Criarmemoria from "../pages/criar-memoria/criar-memoria"
import {BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Detalhes from "../pages/detalhes/detalhes"
import Home from "../pages/home"

import '../src/assets/styles/global.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criar" element={<Criarmemoria />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
