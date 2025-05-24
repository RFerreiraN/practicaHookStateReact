const Item = ({nombre, visto}) => {
  return(
    <li>{nombre} 
        {visto ? '✅' : '❌'} 
    </li>
  ) 
 /*
  Explicación:
  El operador ternario `? :` es una forma abreviada de usar `if...else`.

  En este caso:
  - Si la prop `visto` es `true`, se muestra un check verde ✅
  - Si `visto` es `false`, se muestra una equis roja ❌

  Es una forma de renderizar contenido condicional en JSX.
*/
}

export const CondicionalTernario = () => {
  return (
      <>
        <h1>Condicionales y Ternarios</h1>
        <ol>
          <Item nombre="Intalaciones necesarias" visto={true}/>
          <Item nombre="Uso de vite" visto={true}/>
          <Item nombre="Componentes" visto={true}/>
          <Item nombre="Varaibles de JSX" visto={true}/>
          <Item nombre="Props" visto={true}/>
          <Item nombre="Eventos" visto={true}/>
          <Item nombre="useState" visto={true}/>
          <Item nombre="redux" visto={false}/>
          <Item nombre="customHooks" visto={false}/>
        </ol>
  
      </>
  )
}

/*
  Explicación del código:

  1. Creamos un componente principal llamado `CondicionalTernario`.

  2. Dentro de él, renderizamos una lista ordenada (<ol>) que contiene varios componentes `Item`.

  3. El componente `Item` recibe dos props: `nombre` (string) y `visto` (booleano).

  4. Cada `Item` muestra su nombre y, mediante el operador ternario, decide si mostrar un ✅ (si `visto` es true)
     o un ❌ (si `visto` es false).

  5. Esto es una demostración del uso de condicionales con ternarios en JSX.
*/


