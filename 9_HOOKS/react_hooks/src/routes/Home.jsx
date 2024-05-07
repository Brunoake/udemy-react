import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
 

const Home = () => {
  




  return (
    <div>
        <h1>Pagina home</h1>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect />
    </div>
  )
}

export default Home