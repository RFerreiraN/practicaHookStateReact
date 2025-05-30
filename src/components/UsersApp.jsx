import { useEffect, useState } from "react"

export const UsersApp = () => {

  const [users, setUsers] = useState([])

    const fetchUsers = async()=> {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        console.log(data)
      }catch (error){
          console.error(error)
      }
    }


    useEffect( () => {
      fetchUsers()
    }, [])

  return (
    <>
      <h1>Listado de Usuarios: </h1>
      <ul>
        { users.map(user => <li key={user.id}>Nombre :  {user.name} {<br/> }  Username : {user.username} {<br/>} Email : {user.email} {<br/>}{<br/>}</li>)}
      </ul>

    </>
  )
}
