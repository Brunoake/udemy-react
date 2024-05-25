import { useState } from "react"
import { UsePreviews } from "../hooks/UsePreviews"

const HookCustom = () => {
  const [number, setNumber] = useState(0)
  const previousValue = UsePreviews(number);


  return (
    <div>
        <h2>Custom hook</h2>
        <p>valor Atual {number}</p>
        <p>valor Anterior {previousValue}</p>
        <button onClick={() => setNumber(Math.random)}>Alterar</button>
    </div>
  )
}

export default HookCustom