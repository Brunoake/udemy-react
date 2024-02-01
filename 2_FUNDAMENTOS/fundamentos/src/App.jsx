import { useState } from 'react'

import './App.css'
import FirstComponent from './components/FirstComponent'

// Template expression
import TemplateExpression from './components/TemplateExpression'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Fundamentos do react</h1>
    <FirstComponent/>
    <TemplateExpression/>
    </div>
  )
}

export default App
