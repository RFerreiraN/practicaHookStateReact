import { useState } from "react";

export const ContadorApp = ({ value, name }) => {

  const [contador, setContador] = useState(value)

  const handleClick = () => {
    setContador(contador + 1)
    console.log(contador)
  }

  const [nombre, setNombre] = useState(name)

  const handleName = () => {
    //se puede hacer de dos formas:
    //setNombre(nombre === 'Ricardo' ? 'Ricardo Ferreira' : 'Ricardo') 
    //y esta:
    if(nombre === 'Ricardo'){
      setNombre('Ricardo Ferreira')
    }else{
      setNombre('Ricardo')
    }
    console.log(nombre)
  }

  return (
    <>
      <h1>Contador App</h1>
      <h3>Evento Click y Hook useState()</h3>
      <button onClick={handleClick}>Presionar</button>
      <p>{contador}</p>
      <hr /><br />

      <button onClick={handleName}>Cambiar Nombre</button>
      <p>{ nombre }</p>
    </>


  )
}


/*
Todas las props que nos pasen del padre deben ser desestructuradas en la funcion del componente {}, en el caso del contador 
desestructuramos value y name
*/