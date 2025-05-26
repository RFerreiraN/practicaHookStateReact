import { useState }  from 'react';

const Items = ({nombre , visto}) => {
  return(
    <li>{ nombre }
        { visto ? '✅' : '⛔' }
    </li>
  )
}

const listadoCursos = [
  {nombre : 'HTML', visto : true},
  {nombre : 'CSS', visto : true},
  {nombre : 'JavaScript', visto : true},
  {nombre : 'Angular', visto : true},
  {nombre : 'REACT', visto : true},
  {nombre : 'JAVA', visto : false},
  {nombre : 'PHP', visto : false},
]


export const ListadoCursos = () => {
  return (
    <>  
      <h1>Listado de Cursos: </h1>
      <ol>

      </ol>
    </>
  )
}
