import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';

import { useContext } from 'react';
import { someContext } from '../components/HookUseContext';

const Home = () => {
  const {contextValue} = useContext(someContext)




  return (
    <div>
        <h1>Pagina home</h1>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
    </div>
  )
}

export default Home