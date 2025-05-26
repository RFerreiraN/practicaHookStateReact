import { useState } from "react";

export const AgregarTarea = ({ agregarNombre }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => { 
    setInputValue(event.target.value) 

  }


  const onSubmit = (e) => {
    e.preventDefault()

    const envio = { // creamos un objeto para poder enviar el inputValue como objeto y no como string, ya que romperia
      nombre: inputValue,
      visto: false
    }
    
    agregarNombre(nombres => [...nombres, envio])
  }

  /* Creamos un input type text para tomar su valor e ingresarlo como nueva tarea, para ellos
      usamos la prop value, a la cual se le pasara el estado inputValue y tambien se creara el evento
      onChange el cual tendrá una funcion que permite ir modificando el estado a traves del setInputValue.
      a esto se denomina (input controlado)

      creamos un formulario el cual nos permite capturar la ejecución del input a traves del onSubmit
  */

  /*
    PARA CAPTURAR Y SETEAR EL NUEVO NOMBRE AL ARREGLO DEBEMOS HACER:

    Primero debemos pasar desde el padre una prop que nos permita modificar el estado de la variable, que este caso
    es setArreglo, se lo pasamos con el nombre agregarTarea (nombre opcional, se puede cambiar).

    Una vez pasada la prop en el hijo desestructuramos y la usamos en la funcion onSubmit para poder enviar y setear.

    Creamos un arreglo llamado envio en el ejemplo pra poder enviar el inputValue en la propiedad nombre, ya que si enviamos 
    directamente el inputValue en la desestructuracion agregarTarea() se romperia el codigo ya que estariamos enviando un string
    y se está esperando un array de objetos, cabe destacar que el objeto tambien lleva su propiedad "visto" en este caso en false.

    una ves hecho el objeto procedemos a enviar el arreglo "envio" como un [array], pero debemos hacerlo de la siguiente ,manera 
    para no pisar el arreglo anterior si no mas bien actualizarlo (agregarTarea(tareas => [...tareas, envio])), esto nos trae 
    el antiguo arreglo que teniamos y agregar el nuevo nombre
  
  */

  return (

    <form onSubmit={onSubmit}>
      <input type="text"
        placeholder="Ingresa tarea"
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>

  )
}

