import { useState } from 'react'
import Home from './views/home'
import Nav from './component/nav'
import {Route, Routes} from 'react-router'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='*' element={<h1>NOT FOUND</h1>} />
      </Routes>
      
    </div>
  )
}

export default App
