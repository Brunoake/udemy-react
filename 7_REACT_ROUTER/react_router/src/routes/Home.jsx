import React from 'react'

// Carregamentos de dado

import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3000/products"

const Home = () => {
  const {data: items} = useFetch(url)


  return (
    <div>
        <h1>Home</h1>
        {/* carregamento de dados */}
    <ul className="products">
      {items && items.map((item) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>R$: {item.price}</p>
        </li>
      ))};
    </ul> 
    </div>
  )
}

export default Home