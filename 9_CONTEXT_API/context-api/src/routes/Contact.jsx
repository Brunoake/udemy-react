import React from 'react'

// Alterando valor
import { useContext } from 'react'

import { CounterContext } from "../context/CounterContext";

// Contexto mais Complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

// refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

const Contact = () => {
  const {counter} = useCounterContext();
  const {color} = useTitleColorContext();

  return (
    <div>
        <h1 style={{color: color}}>Pagina de contato</h1>
        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact