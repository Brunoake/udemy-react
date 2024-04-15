import React from 'react'
// Alterando valor
// import { useContext } from 'react'

 import { CounterContext } from "../context/CounterContext";
 import ChangeCounter from '../components/ChangeCounter';

// refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// Contexto mais Complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
//  const {counter} = useContext(CounterContext)

const {counter} = useCounterContext();
  
const {color, dispatch} = useTitleColorContext()

const setTitleColor = (color) => {
  dispatch({type: color})
}

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>
        {/* Alterando contexto complexo */}
  

        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>

          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home