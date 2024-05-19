import { useMemo,useState, useEffect } from "react"

const HookUseMemo = () => { 
    const [number, setNumber] = useState(0);

    // const premiumNumbers = ["0", "100", "200"];

    const premiumNumbers = useMemo(() => {
        return["0", "100", "200"]
    }, []);

    useEffect(() => {
        console.log("Premiun numbers foi alterado")
    }, [premiumNumbers]);

  return (
    <div>
        <h2>Use nemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ?<p>Acertou o numero</p>: ""}
    </div>
  )
}

export default HookUseMemo