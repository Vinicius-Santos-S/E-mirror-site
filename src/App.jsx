// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Catalogo from './Components/Catalogo'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/E-mirror-site" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
