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
  return (
    <div>
        {/* useState  */}
        <h2>UseState</h2>
        <p>useState: {name}</p>
        <p>variavel: {userName}</p>
        <button onClick={changeNames}>Mudar Nome</button>
    </div>
  )
}

export default HookUseState