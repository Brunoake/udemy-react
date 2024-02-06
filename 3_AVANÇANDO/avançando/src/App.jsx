
import './App.css'

 {/* {imagem com assets} */}
import motor from "./assets/img2.jpg";

import Data from './components/Data';

import ListRender from './components/ListRender';

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
    </div>
  )
}

export default App
