import { useState } from 'react'
import Home from './views/home'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     
      <Home />
      
    </div>
  )
}

export default App
