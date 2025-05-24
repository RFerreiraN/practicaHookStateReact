import { useState } from "react";

export const Practica = ({ name, valor }) => {

  const [numero, setNumero] = useState(valor)

  const sumar = () => {
    setNumero(numero + 1)
  }

  const [nombre, setNombre] = useState( name );

  const agregar = () => {
    setNombre( nombre === 'Ricardo Ferreira' ? 'Ricardo José Ferreira Nunes' : 'Ricardo Ferreira' )
  }

  return (
    <>
      <h1>Practicas</h1>
      <p>{ numero }</p>
      <button onClick={ sumar }>Aumentar</button>

      <br />
      <h2>Nombre Y Apellidos: </h2>
      <p>{ nombre }</p>
      <button onClick={ agregar }>Agregar Nombre</button>
      
    </>
  )
}
