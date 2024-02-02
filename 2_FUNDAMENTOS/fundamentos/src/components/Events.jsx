import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log("executou")
    };


    // Função de renderização

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        }else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

    // return 10 > 2 && <p>carregando...</p>;
  return (
    <div>
        <div>
            <button onClick={() => console.log("testando algo")}>CLique aqui</button>
        </div>
        {/* {Eventos} */}
    <div>
        <button onClick={handleClick}>Clique aqui com função</button>
    </div>
    {/* {função com renderização} */}
    {renderSomething(true)}
    {
    renderSomething(false)
    }
    </div>
  )
}

export default Events