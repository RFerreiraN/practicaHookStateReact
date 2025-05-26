import {useState} from 'react';


export const AgregarCurso = () => {
  
  const [curso, setCurso] = useState('');

  const onChangeCurso = (e) => {
    setCurso(e.target.value)
    console.log(curso)
  };

  const onSubmitCurso = (e) => {
      e.preventDefault()
      
  }
  
  return (
      <form onSubmit={onSubmitCurso}>
        <input type='text'
             placeholder='Agregar Curso'
             value={curso} 
             onChange={onChangeCurso}
      />
      </form>
      
  )
}
