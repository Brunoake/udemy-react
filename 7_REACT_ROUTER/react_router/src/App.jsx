import './App.css'

import { Outlet } from 'react-router-dom';

// Link entre paginas
import Navbar from './components/Navbar';

import SearchForm from './components/SearchForm';

function App() {

  return (
    <div className='app'>
    <Navbar />
    <SearchForm/>
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App
