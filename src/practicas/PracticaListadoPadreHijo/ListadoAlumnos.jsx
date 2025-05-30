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
  { nombre : 'Ricardo Ferreira', inscrito : true },
  { nombre : 'Roberto Ferreira', inscrito : true },
  { nombre : 'Eduardo Ferreira', inscrito : true },
  { nombre : 'Manuel Ferreira', inscrito : false }
];


export const ListadoAlumnos = () => {
  
  const [alumnos, setAlumnos] = useState(listaAlumnos)

  return (
    <>
     <h1>Listado de Alumnos Inscritos:</h1>
        <ol>
          { alumnos.map( alumno => <Items nombre={ alumno.nombre } inscrito={ alumno.inscrito } key={ alumno.nombre }/>) }
        </ol>
        <AgregarAlumno />
    </>      
  )
}
