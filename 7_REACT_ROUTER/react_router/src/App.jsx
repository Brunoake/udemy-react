import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom';

// Link entre paginas
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Navbar/>
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App
