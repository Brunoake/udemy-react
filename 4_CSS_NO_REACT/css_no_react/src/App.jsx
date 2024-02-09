import MyComponent from './components/MyComponent'
import './App.css'

function App() {


  return (
    <div className='app'>
     <h1>CSS GLOBAL</h1>
     <MyComponent/>
     <p>pegou css do componente</p>
     {/* Inline style */}
     <p style={{color: "#ccc", fontSize: "2.4rem"}}>Este elemento tem estilos inline</p>
    </div>
  )
}

export default App
