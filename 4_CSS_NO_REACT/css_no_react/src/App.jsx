import MyComponent from './components/MyComponent'
import './App.css'
import Title from './components/Title'

function App() {

    const n = 15

  // CLasses dinamicas

  const redTitle = true

  return (
    <div className='app'>
     <h1>CSS GLOBAL</h1>
     <MyComponent/>
     <p>pegou css do componente</p>
     {/* Inline style */}
     <p style={{color: "#ccc", fontSize: "2.4rem"}}>Este elemento tem estilos inline</p>

     {/* Inline style Dinâmico */}

     <p style={n > 10  ? {color: "blue"}: {color: "red"}}>
      CSS dinâmico
     </p>

     <p style={n > 20  ? {color: "blue"}: {color: "red"}}>
      CSS dinâmico 2
     </p>

     {/* Classe dinâmica */}

    <h2 className={redTitle ? "red-title" : "title"}>Esse titulo tem uma classe</h2>

    {/* Css module */}

    <Title/>

    </div>
  )
}

export default App
