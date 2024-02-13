import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState();
    const[email, setEmail] = useState();

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);
        
    // Validação
    // envio

    // Limpar o form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
    }

    console.log(name, email, bio, role)

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
            {/* Textarea */}
            <label>
                <span>Bio:</span>
            
            <textarea 
            name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}>

            </textarea>
            </label>

            {/* Select */}
            <label>
                <span>função no sistema</span>

                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">usuario</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm