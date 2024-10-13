import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register.jsx'
import Update from './pages/Update.jsx'
import Details from './pages/Details.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/update/:id"   element={<Update/>}/>
        <Route path="/details"  element ={<Details/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
