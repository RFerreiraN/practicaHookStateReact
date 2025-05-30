import {useState} from 'react';
import { AgregarAlumno } from './AgregarAlumno';

const Items = ({nombre, inscrito}) => {
  return(
    <li>{ nombre }
        { inscrito ? '✅' : '⛔' }
    </li>
  )
}

const listaAlumnos = () => [
  { id : 0, nombre : 'Ricardo Ferreira', inscrito : true },
  { id : 1, nombre : 'Roberto Ferreira', inscrito : true },
  { id : 2, nombre : 'Eduardo Ferreira', inscrito : true },
  { id : 3, nombre : 'Manuel Ferreira', inscrito : false }
];


export const ListadoAlumnos = () => {
  
  const [alumnos, setAlumnos] = useState(listaAlumnos)

  const onChangeAlumno = (val) => {
    let valor = val.trim()

    if(valor.length < 1) return

    const envio = {
      id : alumnos.length,
      nombre : valor,
      inscrito : false
    }

    setAlumnos([...alumnos, envio])
}

  return (
    <>
     <h1>Listado de Alumnos Inscritos:</h1>
        <ol>
          { alumnos.map( alumno => <Items nombre={ alumno.nombre } inscrito={ alumno.inscrito } key={ alumno.id }/>) }
        </ol>
        <AgregarAlumno agregarAlumno={onChangeAlumno} />
    </>      
  )
}
