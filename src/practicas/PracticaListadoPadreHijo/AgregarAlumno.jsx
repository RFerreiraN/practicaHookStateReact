import {useState} from 'react';

export const AgregarAlumno = ({agregarAlumno}) => {

  const [alumno, setAlumno] = useState('')

  const inputAlumno = (event) => {
      setAlumno(event.target.value)
  }

  const onSubmitAlumno = (event) => {
      event.preventDefault()
      agregarAlumno(alumno)
      setAlumno('')
  }

  return (
    <form onSubmit={onSubmitAlumno}>
      <input type='text'
             placeholder='Agregar alumno nuevo'
             value={alumno}
             onChange={inputAlumno}
             />
    </form>
  )
}
