import './App.css'

import { Outlet } from 'react-router-dom';

// Link entre paginas
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='app'>
    <Navbar />
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App
