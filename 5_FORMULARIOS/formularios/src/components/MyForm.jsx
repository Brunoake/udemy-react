import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState()
    const[email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name, email)
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text"
                 name="name" placeholder="Digite seu nome" onChange={handleName}
                />
            </div>

            {/* label envolvendo input */}

            <label>
                <span>E-mail:</span>
                <input 
                type="email"
                 name="email"
                  placeholder="Digite seu email"
                 required
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </label>

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm