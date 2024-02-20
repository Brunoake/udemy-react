import { useState } from 'react'
import { useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url ="http://localhost:3000/products"

import './App.css'

function App() {
  // Resgatando dados
 const [products, setProducts] = useState([])



//  custom hook
const {data: items, httpConfig, loading, error} = useFetch(url)

//  useEffect(() => {

//   async function getData() {
  
//     const res = await fetch(url)
  
//     const data = await res.json()
  
//    setProducts(data);
  
//   }
  
//   getData()
  
//    }, [])

//  Envio de dados
const [name, setName] = useState("")
const [price, setPrice] = useState("")

const handleSubmit = async (e) => {

  e.preventDefault()

  const  product = {
   name,
   price
}


  // Refatorando post
  httpConfig(product, "POST")

  
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //   "Content-type": "application/json"
  //   },
  //   body: JSON.stringify(product),
  // });
  // // Carregamento dinamico
  // const addedProduct = await res.json()

  // setProducts((prevProducts) => [...prevProducts, addedProduct]);
};

  return (
    <div className='app'>

      {/* Loading */}
      {loading && <p>Carregando...</p>}
      {/* Tratando eros */}
      {error && <p>{error}</p>}
      {/* Resgate de dados */}
      <ul>
        {items && 
        items.map((product) =>(
        <li key={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>

      {/* Enviando dados */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label >
            <span>nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label >
            <span>price</span>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {/* Loading post */}
          {loading && <input type="submit" disabled value="aguarde"/>}
          {!loading && <input type="submit" value="criar"/>}
        </form>
      </div>
    </div>
  )
}

export default App
