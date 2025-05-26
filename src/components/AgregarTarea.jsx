import { useState } from "react"

export const AgregarTarea = () => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
      }

  const onSubmit = (event) => {
      event.preventDefault()
      console.log(inputValue)
      console.log(event)
      if(inputValue == 0){
        return
      }
  }
  return (
    /* Definimos un input de property type = 'text', placeholder y value, el valor que le daremos al value será aquel que viene
       del estado (useState()).

       Añadimos un evento de cambio onChange() para que escuche el cambio que haya dentro del input, le pasaremos una función
       (onInputChange(event), en el cual usaremos el setInputValue() para modificar el valor inicial del estado, como valor para
       modificar el estado usaremos del evento (event.target.value)
    */
    <form onSubmit = {onSubmit}>
      <input  
        type='text' 
        placeholder='Ingresa una nueva tarea'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
