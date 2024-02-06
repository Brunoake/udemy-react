import {useState} from "react"

const data = () =>{

    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);


    let soma = 2 + 2;

    const [trocarSoma, setTrocarSoma] = useState(2 + 2)

    let profissão = "programador"
    const [trocarProf, setTrocarProf] = useState("programador")
  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 125)}>Mudar variavel</button>
        <div>
          <p>valor: {anotherNumber}</p>

          <button onClick={() => setAnotherNumber(40)}>Mudar state</button>
        </div>

        <div>
          <p>Resultado = {trocarSoma}</p>
          <button onClick={() => setTrocarSoma(4 + 4)}>alterar resultado</button>

          <div>
            <p>Sua profissão é:</p>
            <h2>{trocarProf}</h2>
            <button onClick={() => setTrocarProf("Médico")}>Trocar profissão</button>

          </div>
        </div>
    </div>
  );
};

export default data;