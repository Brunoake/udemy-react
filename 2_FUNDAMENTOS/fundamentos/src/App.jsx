import { useState } from 'react'

import './App.css'
import FirstComponent from './components/FirstComponent'

// Template expression
import TemplateExpression from './components/TemplateExpression'

// Hierarquia de components
import MyComponent from './components/MyComponent'

// Eventos
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Fundamentos do react</h1>
    <FirstComponent/>
    <TemplateExpression/>
    <MyComponent/>
    <Events/>
    </div>
  )
}

export default App
