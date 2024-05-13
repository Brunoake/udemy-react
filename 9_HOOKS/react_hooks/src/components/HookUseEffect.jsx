import { useEffect, useState } from "react"
const HookUseEffect = () => {
useEffect (() => {
  console.log("Estou sendo executado")
})

const [number, setNumber] = useState(3)

const changeSomething = () => {
  setNumber (number + 1);
}

// ARRAY VAZIO

useEffect(() =>{
  console.log("Serei executado apenas uma vez")
}, [])

// ARRAY DE DEPENDENCIA COM ALGO

const [anotherNumber, setAnotherNumber] = useState(0)

useEffect(() => {

  if(anotherNumber > 0) (
    console.log("Sou executado apenas quando muda o anotherNumber")
  )

}, [anotherNumber])

// cleanup do UseEffect

useEffect(() =>{
  const Timer = setTimeout(() => {
    console.log("Hello world")
    setAnotherNumber(anotherNumber + 1)
  }, 2000);
  return() => clearTimeout(Timer)
}, [anotherNumber]);

  return (
    <div>
      <h2>use Effect</h2> 
      <p>Number: {number}</p> 
      <button onClick={changeSomething}>Executar</button>

      <p>Another Number {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        </div>
  )
}

export default HookUseEffect