// template exprecion

export const TemplateExpression = () => {
    const name = "Bruno"

    const data = {
        age: 19,
        job: "programador"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression