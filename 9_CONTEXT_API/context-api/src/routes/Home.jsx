import React from 'react'
// Alterando valor
// import { useContext } from 'react'

 import { CounterContext } from "../context/CounterContext";
 import ChangeCounter from '../components/ChangeCounter';

// refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
//  const {counter} = useContext(CounterContext)

const {counter} = useCounterContext();
  


  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Home