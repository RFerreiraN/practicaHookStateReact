import { useState }  from 'react';
import { AgregarCurso } from './AgregarCurso';

const Items = ({nombre , visto}) => {
  return(
    <li>{ nombre }
        { visto ? '✅' : '⛔' }
    </li>
  )
}

const listadoCursos = [
  {id : 0, nombre : 'CSS', visto : true},
  {id : 1, nombre : 'HTML', visto : true},
  {id : 2, nombre : 'JavaScript', visto : true},
  {id : 3, nombre : 'Angular', visto : true},
  {id : 4, nombre : 'REACT', visto : true},
  {id : 5, nombre : 'JAVA', visto : false},
  {id : 6, nombre : 'PHP', visto : false},
]

export const ListadoCursos = () => {

  const [cursos, setCursos] = useState(listadoCursos)

  const onAgregarCurso = (val) => {
    
        const valor = val.trim();
        if(valor.length < 1) return

        let envio = {
        id :cursos.length,
        nombre : valor,
        visto : false
      }
      setCursos([...cursos, envio])

  }

  return (
    <>  
      <h1>Listado de Cursos: </h1>
      <ol>
          {cursos.map( curso => <Items nombre={curso.nombre} visto={curso.visto} key={curso.id}/>)}
      </ol>
      <AgregarCurso agregarCurso={onAgregarCurso}/>
    </>
  )
}


/*
¿Qué hace este código?

Este pequeño programa hecho en React sirve para mostrar una lista de cursos (como HTML, CSS, JavaScript, etc.) y te permite agregar un curso nuevo escribiéndolo en un input.

¿Cómo está dividido?

Hay dos partes importantes:
ListadoCursos (el padre): Es quien guarda la lista de cursos y la muestra en pantalla.
AgregarCurso (el hijo): Es quien tiene el input para escribir el nuevo curso y se lo pasa al padre.

¿Cómo funciona todo junto?

Al principio, el padre (ListadoCursos) tiene una lista de cursos ya creada en la variable listadoCursos.
Esa lista se guarda en una variable de estado llamada cursos usando useState, lo que permite actualizarla y que React muestre los cambios automáticamente.
Cada vez que React debe mostrar los cursos en pantalla, usa .map() para recorrer uno por uno y mostrarlos como elementos <li> con su nombre. Si ya fue visto, aparece un ✅. Si no, aparece un ⛔.
También se muestra el componente AgregarCurso, que tiene un input para escribir un nuevo curso.
Cuando escribes algo en el input y presionas Enter, el hijo (AgregarCurso) le manda el nombre al padre a través de una función que el padre le pasó (agregarCurso).
El padre recibe ese nombre, crea un nuevo curso con visto: false, lo agrega a la lista y actualiza el estado con setCursos(...).
Como React detecta el cambio, vuelve a renderizar la lista, ¡y el nuevo curso aparece!

En resumen:

El padre muestra la lista y guarda los datos.

El hijo solo recoge lo que escribes y se lo envía al padre.

Todo se actualiza solo gracias a useState.


*/