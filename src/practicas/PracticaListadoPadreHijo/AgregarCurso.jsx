import {useState} from 'react';


export const AgregarCurso = ({ agregarCurso }) => {
  
  const [curso, setCurso] = useState('');

  const onChangeCurso = (e) => {
    setCurso(e.target.value)
  };

  const onSubmitCurso = (e) => {
      e.preventDefault()
      agregarCurso(curso)
      setCurso('')
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

/*
A diferencia del ejemplo anteriormente realizado, en este codigo podemos ver como el padre es quien setea el estado y no el 
hijo, (como debe ser).

Basicamente el padre tiene una funcion la cual tiene un objeto el cual a su ves es el formato que necesita para poder setear en
la vista el nuevo curso, esta funcion maneja el estado de la variable.

y por su parte el hijo envia el valor del input al padre a traves de la prop agregarCurso


*/

/*
🧠 ¿Qué hace AgregarCurso?
Este componente muestra un input de texto. Lo usas para escribir el nombre de un nuevo curso que quieras agregar. 
Cuando presionas Enter, ese nombre se envía al componente padre (ListadoCursos), que lo agrega a la lista.

🔍 Paso a paso de cómo funciona:
jsx


export const AgregarCurso = ({ agregarCurso }) => {
Aquí recibimos una función como prop del componente padre. Esa función se llama agregarCurso y sirve 
para enviarle al padre el nombre del nuevo curso.

jsx


const [curso, setCurso] = useState('');
Creamos una variable de estado llamada curso. Sirve para guardar lo que el usuario está escribiendo en el input.

Empieza vacía ('') y se va actualizando a medida que el usuario escribe.

jsx


const onChangeCurso = (e) => {
  setCurso(e.target.value)
};
Esta función se activa cada vez que el usuario escribe una letra.

Lo que hace es actualizar el estado con lo que está escribiendo (setCurso(...)), 
así el input siempre muestra lo que el usuario
está tipeando.

jsx


const onSubmitCurso = (e) => {
  e.preventDefault()
  agregarCurso(curso)
}
Esta función se activa cuando el usuario presiona Enter (al enviar el formulario).

Primero usamos e.preventDefault() para evitar que la página se recargue.

Después, usamos agregarCurso(curso) para enviar el nombre del curso al componente padre, 
que se encargará de agregarlo a la lista.

jsx


return (
  <form onSubmit={onSubmitCurso}>
    <input
      type='text'
      placeholder='Agregar Curso'
      value={curso}
      onChange={onChangeCurso}
    />
  </form>
)
Aquí se muestra un formulario con un input de texto.

El input:

Muestra lo que escribes (gracias a value={curso}).

Actualiza el estado cuando escribes (onChange={onChangeCurso}).

Cuando presionas Enter, se activa el onSubmitCurso.

🧾 En resumen:
Este componente solo tiene un input controlado por estado.

Lo que escribes se guarda en la variable curso.

Cuando presionas Enter, le manda ese texto al componente padre para que lo agregue a la lista.

No guarda nada por sí solo. Solo captura y comunica al padre.


*/