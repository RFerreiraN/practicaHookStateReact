import {useState} from 'react';

export const AgregarAlumno = () => {

  const [alumno, setAlumno] = useState('')

  const inputAlumno = (event) => {
      setAlumno(event.target.value)
      console.log(alumno)
  }

  const onSubmitAlumno = (event) => {
      event.preventDefault()
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
