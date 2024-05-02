import React from 'react'
import { useState } from "react";

const HookUseState = () => {
    // Use state
    let userName = "joao";
    const [name, setName] = useState("Bruno");

    const changeNames = () => {
        userName = "Joao gay"

        setName("Bruno Pacheco")
    }
// usestate input
const [age, setAge] = useState(18)

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(age)
}

  return (
    <div>
        {/* useState  */}
        <h2>UseState</h2>
        <p>useState: {name}</p>
        <p>variavel: {userName}</p>
        <button onClick={changeNames}>Mudar Nome</button>
        {/* UseState input */}

        <form onSubmit={handleSubmit}>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
          <input type="submit" value="enviar"/>
        </form>
        <p>Voce tem {age} anos</p>
        <hr />
    </div>
  )
}

export default HookUseState