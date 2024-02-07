import React from 'react'

const CarDetails = ({brand, km, color, model}) => {
  return (
    <div>
        <h2>detalhes dos carros</h2>
        <ul>
            <li>marca: {brand}</li>
            <li>km: {km}</li>
            <li>Cor: {color}</li>
            <li>Modelo: {model}</li>
        </ul>
    </div>
  )
}

export default CarDetails