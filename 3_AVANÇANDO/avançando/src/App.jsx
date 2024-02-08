
import './App.css'

 {/* {imagem com assets} */}
import motor from "./assets/img2.jpg";

import Data from './components/Data';

import ListRender from './components/ListRender';

import ConditionalRender from './components/ConditionalRender';

// Props

import ShowUserName from './components/ShowUserName';

// Desestruturando props

import CarDetails from './components/CarDetails';

// Renderização

const cars = [
{id: 1, brand: "ferrari", color: "Blue tdf", km: 0, model: "f12 Berlineta"},
{id: 2, brand: "Lamborghini", color: "Viola pasifae", km: 120,  model: "Huracan"},
{id: 3, brand: "McLaren", color: "preto", km: 1320,  model: "600lt"}

];

import  Fragments from './components/Fragments.jsx';

import Container from './components/Container.jsx';

// Função

import ExecutionFunction from './components/ExecutionFunction.jsx';

import message from './components/Message.jsx';

function App() {
  
  // Prop
  function showMassage() {
    console.log("EVENTO do componente pai")
  }

  // State Lift

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  return (
    <div className='app' style={{paddingBottom: "500px"}}>
      <h1>avançando com react</h1>
      {/* {imagem em public} */}
      <img src="/img.jpg" alt="imagem public" />

      {/* {imagem com assets} */}
      <img src={motor} alt="motor " />

      {/* {Usestate} */}
      <Data/>
      {/* {lista} */}
      <ListRender/>

      {/*render condicional*/}
      <ConditionalRender/>

      {/* Props */}
      <ShowUserName name= "Bruno"/>
      <ShowUserName name= "Carlos"/>

      {/* Desestruturando props */}
      <CarDetails brand = "bmw" km={130}
      color="blu glaucco" model="m3 competition"/>
      {/* Reutilizando components */}
      <CarDetails brand = "Mercedes" km={1000}
      color="preto" model="s580"/>
      <CarDetails brand = "Ferrari" km={1230}
      color="rosso corsa" model="488 pista"/>

      {/* Renderização de lista */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} model={car.model}/>
      ))}

      <Fragments/>

      <Container>
        <p>Alguma coisa</p>
        </Container>
        <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu componente</p>
          <button>Clique pra nada</button>
        </div>
        </Container>

        {/* Função */}

        <ExecutionFunction myFunction={showMassage}/>

    </div>
  )
}

export default App
