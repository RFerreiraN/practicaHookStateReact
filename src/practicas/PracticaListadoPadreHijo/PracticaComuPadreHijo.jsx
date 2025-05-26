import {useState} from 'react'

export const PracticaComuPadreHijo = () => {

  const [curso, setCurso] = useState('');

  const onChangeCurso = (event) => {
    setCurso(event.target.value)
    console.log(curso)
  }

  return (
    <input type='text'
           placeholder='Añadir Curso'
           value={curso}
           onChange={onChangeCurso}
    />
  )
}
