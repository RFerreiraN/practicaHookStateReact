import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({ nombre, visto }) => { // Creamos un pequeño componente que nos devuelva un <li> con ciertas propiedad,
  // en las cuales se evalue si es true nos muestre ✅ y si es false nos muestre ⛔
  return (
    <li>
      {nombre}
      {visto ? '✅' : '⛔'}
    </li>
  )
}

let listadoContenido = [ // Creamos un array con los cursos disponibles, asignado true a los vistos y false a los no vistos
  { nombre: "HTML", visto: true },
  { nombre: "CSS", visto: true },
  { nombre: "JavaScript", visto: true },
  { nombre: "Angular", visto: true },
  { nombre: "React", visto: false },
  { nombre: "Python", visto: false }
]



export const Maps = () => {


  const [arrayContenido, setArrayContenido] = useState(listadoContenido); // Definimos nuestras variables y su metodo con useState()
  // dandole como valor inicial el array que hicimos previamente (listadoContenido)

  const addTask = () => { // Esta función agrega un nuevo curso al array de contenido.
    // En React, no se debe usar push() porque modifica el array original directamente (mutación).
    // En su lugar, usamos setarrayContenido() para actualizar el estado con un nuevo array.
    // Usamos el spread operator [...] para copiar los elementos existentes y añadimos el nuevo curso al final.
    // Ejemplo : [...arrayContenido, { nombre: 'Java', visto: false }] siempre va dentro de corchetes
    setArrayContenido([...arrayContenido, { nombre: 'Java', visto: false }])
  }

  return (
    <>
      <h1>Ejericio Ternarios, useState()</h1>
      <AgregarTarea />
      <ol>
        {arrayContenido.map(item => <Item nombre={item.nombre} visto={item.visto} key={item.nombre} />)}
        {/* Usamos .map() para recorrer cada elemento del array 'arrayContenido'.
            Por cada elemento, renderizamos un componente <Item />, pasándole las props necesarias.
            'key' ayuda a React a identificar de forma única cada elemento en la lista. */}
      </ol>

      

      {/*<button onClick={() => addTask()}>Añadir Curso</button>*/}
      {/* Usamos una función de flecha para evitar que addTask() se ejecute automáticamente 
         al renderizar el componente. Solo se ejecutará cuando ocurra el evento onClick. */}
    </>
  )
}
