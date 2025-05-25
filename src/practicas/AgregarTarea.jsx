import { useState } from "react"

export const AgregarTarea = () => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => {
      setInputValue(event.target.value)
      console.log(inputValue)
  }

  return (
    <>
      <input type="text"
             placeholder="Ingresa Tarea"
             value={inputValue}
             onChange={handleInputValue}
      />
    
    </>
  )
}
