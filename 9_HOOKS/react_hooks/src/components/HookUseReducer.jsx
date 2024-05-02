import React from 'react'
import { useReducer } from 'react'

// REDUCER


const HookUseReducer = () => {

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  return (
    <div>
      <h2>Use Reducer</h2>
      <p>Numero {number}</p>
      <button onClick={dispatch}>Alterar numero</button>
    </div>
  )
}

export default HookUseReducer