import { useEffect, useState } from "react";


export const UsuariosApp = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [endPoint, setEndPoint] = useState('users')

  const FetchUsuarios = async () => {
     try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const datos = await response.json()
      setUsuarios(datos)
     }catch( error ){
      console.error( error )
     }
  }

  const cambiarEndPoint = () => {
    setEndPoint('comments')
  }

  useEffect( () => {
    FetchUsuarios()
  }, [endPoint])
  

  return (
    <>
      <h1>Datos del Personal: </h1>
      <ul>
          { usuarios.map(usuario => <li key={usuario.id}>{ usuario.name }</li>)}
      </ul>
      <button onClick={cambiarEndPoint}>Traer Usuarios</button>
    </>
  )
}

//En este caso no usamos useEffect() por que estamos llamando la funcion de la API con un boton.