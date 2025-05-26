import { useState } from "react";

export const AgregarTarea = () => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
    
  }


  const onSubmit = (e) => {
      e.preventDefault()
      console.log(e)
  }

    {/* Creamos un input type text para tomar su valor e ingresarlo como nueva tarea, para ellos
        usamos la prop value, a la cual se le pasara el estado inputValue y tambien se creara el evento
        onChange el cual tendrá una funcion que permite ir modificando el estado a traves del setInputValue.
        a esto se denomina (input controlado)

        creamos un formulario el cual nos permite capturar la ejecución del input a traves del onSubmit
    */}

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

