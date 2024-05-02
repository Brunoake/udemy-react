import React from 'react'
import { useReducer, useState } from 'react'

// REDUCER


const HookUseReducer = () => {

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  // 2 Avançando com reducer
  const initialTask = [
    {id: 1, text: "Fazer alguma coisa"},
    {id: 2, text: "Fazer outra coisa"}
  ]

  const taskReducer = (state, action) => {
     switch(action.type) {
      case "ADD":
      const newTask = {
        id: Math.random(),
        text: taskText
      }

      setTaskText("")

      return [...state, newTask]

    case "DELETE":
      return state.filter((task) => task.id !== action.id)

    default:
      return state
     }
  }

  const [taskText, setTaskText] = useState("");
  const [Tasks, dispatchTasks] = useReducer(taskReducer, initialTask)
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({type: "ADD"})
  };

  const removeTask = (id) => {
    dispatchTasks({type: "DELETE", id})
  }


  return (
    <div>
      <h2>Use Reducer</h2>
      <p>Numero {number}</p>
      <button onClick={dispatch}>Alterar numero</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTaskText(e.target.value)}  value={taskText}/>
        <input type="submit" value="Enviar"/>
      </form>
      {Tasks.map((task) => (
       <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}

    </div>
  )
}

export default HookUseReducer