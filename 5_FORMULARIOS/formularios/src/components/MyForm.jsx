import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState()
    const[email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    console.log(name, email)
  return (
    <div>
        {/* Envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text"
                 name="name" placeholder="Digite seu nome"
                  onChange={handleName}
                //   Controled input
                value={name || ""}
                />
            </div>

            {/* label envolvendo input */}

            <label>
                <span>E-mail:</span>
                <input 
                type="email"
                 name="email"
                  placeholder="Digite seu email"
                 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                  />
            </label>

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm