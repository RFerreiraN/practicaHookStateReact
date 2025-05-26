import { useState } from "react"
import { AgregarTarea } from "./AgregarTarea"

const ItemsNombres = ({ nombre, visto }) => {
  return (
    <li>{nombre}
      {visto ? <AlertaPositiva /> : <AlertaNegativa />}
    </li> // Podemos pasar componentes como ternarios
  )
}

const AlertaPositiva = () => {
  return (
    '✅'
  )
}

const AlertaNegativa = () => {
  return (
    '⛔'
  )
}

const listadoNombres = [
  { nombre: 'Ricardo Ferreira', visto: true },
  { nombre: 'Santiago Ferreira', visto: true },
  { nombre: 'Asier Ferreira', visto: true },
  { nombre: 'Roberto Ferreira', visto: true },
  { nombre: 'Eduardo Ferreira', visto: true },
  { nombre: 'Anibal Ferreira', visto: true }
]



export const PracticaListado = () => {

  const [arreglo, setArreglo] = useState(listadoNombres)

//   const addTask = () => {
//     setArreglo([...arreglo, { nombre: 'Manuel Ferreira', visto: false }])
// }


  return (
    <>
      <h1>Practica maps, ternarios</h1>
      <ul>
        {arreglo.map(item => <ItemsNombres key={item.nombre} nombre={item.nombre} visto={item.visto} />)}
      </ul>
      {/* { <button onClick={() => addTask()}>Agregar Tarea</button> } */}
      <AgregarTarea agregarNombre={setArreglo}/>        
    </>
  )
}
