import { useState } from "react"

const ListRender = () => {

    const [list] = useState (["Programador", "Médico", "Advogado", "pedreiro", "Programador"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Bruno", age: 19},
        {id: 2, name: "Bruna", age: 29},
        {id: 3, name: "Julia", age: 19},
        {id: 4, name: "Jiulia", age: 14},
        {id: 5, name: "Breno", age: 39},
        {id: 6, name: "Carlos", age: 25},
        {id: 7, name: "jota", age: 12}
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 7);


        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id) )

    }

  return (
    <div>

        {/* Propriedade sem key */}

        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* Propriedade com key */}
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age} anos </li>
            ))}
        </ul>

        {/* Previous state */}
        <button onClick={deleteRandom}> Delete random user</button>
    </div>
  )
}

export default ListRender