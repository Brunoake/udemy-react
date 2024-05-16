import { useEffect, useRef,useState } from "react"

const HookUseRef = () => {
    // useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1; 
    })

    // useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setText("")

        inputRef.current.focus()
    }

  return (
    <div>
        <h2>useRef</h2>
        <p>O componente rederinzou: {numberRef.current}</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 3)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 4)}>Contador B</button>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef