import React from 'react'
import PropTypes from 'prop-types';


export const PrimerComponente = ({titulo, subtitulo}) => { //Desestructuracion de la props
  return (
    <>
     <h1>Props: </h1>
     <h3>{titulo}</h3>
     <h3>{subtitulo}</h3>
    </>
  )
  /*
  Para establecer comunicación entre un componente hijo y su componente padre en React, utilizamos las props.
  
  Las props (propiedades) se pasan desde el componente padre al hijo mediante atributos en la etiqueta del componente.  
  Por ejemplo: <MiComponente titulo="Esto es una prop" />
  
  En el componente hijo, podemos acceder a esa prop desestructurándola directamente desde los parámetros de la función:  
  ejemplo: function MiComponente({ titulo }) { ... }
  
  Esto nos permite reutilizar componentes y personalizar su contenido desde el padre.
  */

  
}

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired, 
  subtitulo: PropTypes.number.isRequired,
  /*
  Al no usar typescript, debemos usar las propsTypes para tipar estrictamente el tipo de dato que queremos que sea la props que viene del padre
  Tambien podemos hacer que sea obligatoria

  */
};

PrimerComponente.defaultProps = {
  titulo: 'Curso de React',
  subtitulo : 'Sección de props'
}

/*
Tambien podemos definir valores por default para evitar posibles errores, en caso tal de que no manden alguna prop
*/




