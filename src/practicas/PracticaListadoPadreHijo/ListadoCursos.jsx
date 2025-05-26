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
  {nombre : 'HTML', visto : true},
  {nombre : 'CSS', visto : true},
  {nombre : 'JavaScript', visto : true},
  {nombre : 'Angular', visto : true},
  {nombre : 'REACT', visto : true},
  {nombre : 'JAVA', visto : false},
  {nombre : 'PHP', visto : false},
]

export const ListadoCursos = () => {

  const [cursos, setCursos] = useState(listadoCursos)

  return (
    <>  
      <h1>Listado de Cursos: </h1>
      <ol>
          {cursos.map( curso => <Items nombre={curso.nombre} visto={curso.visto} key={curso.nombre}/>)}
      </ol>
      <AgregarCurso/>
    </>
  )
}
