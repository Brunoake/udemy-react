import { useImperativeHandle,useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {
    const componentRef = useRef()


  return (
    <div>
        <h2>Use Impreative Handle</h2>
         <SomeComponent ref={componentRef}/>
         <button onClick={() => componentRef.current.validate()}>validate</button>
         <hr />
    </div>
  )
}

export default HookUseImperativeHandle