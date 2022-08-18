import "./header.css";
import React from "react";

// Sin hilar muy fino los archivos.jsx son como html, pero te dan toda la funcionalidad de javascript

const comentario = <p>Fijate como puedo guardar un "html" dentro de una constante</p>

const ejemplo = 'como en este ejemplo'

// La esencia de react son los componentes, como este Header. los componentes son funciones guardadas en una constante
// que devuelven "html" para luego ser renderizado
//
// por un tema de orden, los componentes se trabajan cada uno por separado y luego se exportan
//
// los componentes pueden tener logica y otras funciones antes de que devuelvan el "html", pero este no es el caso
const Header = () => {
  return (
    <header>
      <div>
        <h2>Hola Auri</h2>
        <p>Esto es como html, pero al ser un archivo.jsx te permite meter javascript dentro de el, {ejemplo}</p>
        {comentario}
      </div>
    </header>
  )
}

// Ya viste que para meter javascript dentro del "html" tenes que usar los {}

// esto que estamos exportando es el componente, y en principio lo podes pensar como un html custom con logica
export default Header