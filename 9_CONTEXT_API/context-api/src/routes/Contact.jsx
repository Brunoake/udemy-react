import React from 'react'

// Alterando valor
import { useContext } from 'react'

import { CounterContext } from "../context/CounterContext";


// refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

const Contact = () => {
  const {counter} = useCounterContext();

  return (
    <div>
        <h1>Pagina de contato</h1>
        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact