
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

function App() {
  

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

      {/* Desestruturando props */}
      <CarDetails brand = "bmw" km={130}
      color="blu glaucco" model="m3 competition"/>
      
    </div>
  )
}

export default App
