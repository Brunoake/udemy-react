
import './App.css'

 {/* {imagem com assets} */}
import motor from "./assets/img2.jpg";

import Data from './components/Data';

function App() {
  

  return (
    <div className='app'>
      <h1>avançando com react</h1>
      {/* {imagem em public} */}
      <img src="/img.jpg" alt="imagem public" />

      {/* {imagem com assets} */}
      <img src={motor} alt="motor " />

      {/* {Usestate} */}
      <Data/>
    </div>
  )
}

export default App
