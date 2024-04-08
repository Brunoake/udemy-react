import { Outlet } from 'react-router-dom';
import './App.css'

import Navbar from "./components/Navbar";


function App() {


  return (
    <div className='app'>
      <Navbar />
     <h2>Context-api</h2>
     <Outlet />
    </div>
  )
}

export default App
