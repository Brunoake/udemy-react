import { useEffect, useState } from "react"
const HookUseEffect = () => {
useEffect (() => {
  console.log("Estou sendo executado")
})

const [number, setNumber] = useState(3)

const changeSomething = () => {
  setNumber (number + 1);
}
  return (
    <div>
      <h2>use Effect</h2> 
      <p>Number: {number}</p> 
      <button onClick={changeSomething}>Executar</button>
        </div>
  )
}

export default HookUseEffect