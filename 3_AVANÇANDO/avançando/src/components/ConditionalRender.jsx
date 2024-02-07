import React, { useState } from 'react'

const ConditionalRender = () => {
    const x = 5;
    const some = 4*4;

    const name = "Mateu";
    const job = "programador"
  return (
    <div>
        {/* & render condicional */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>se x for true sim!!</p>}

        <h3>Se 4*3 for 12 ira aparecer o resultado</h3>
        {some === 12 && <p>o resultado da multiplicação é {some}</p>}

            <h3>Caso não for</h3>
            {some !== 12 && <p>o resultado esta incorreto</p>}

        {/* Adicionando else */}
        <h3>Render ternario</h3>
        {name === "Mateus" ?(
            <div>
                <p>Ola Mateus</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
             </div>
        )}

     {job === "programador" ?(
        <div>
            parabens voce é programador
            </div> 
     ) : (
        <div>
            continue se esforçando
        </div>
     )}
    </div>
  )
}

export default ConditionalRender