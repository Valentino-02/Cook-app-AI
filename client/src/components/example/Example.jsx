import './example.css'
import React from 'react'


// en este caso, vamos a tener un componente con logica y ademas le vamos a pasar info desde otro componente
// desde ya, este componente no sabe quien le pasa la data
// la info o las variables mejor dicho pueden ser lo que sea y cuantas se quiera y se acceden a ellas por medio de la variable props
// luego se accede a las variables individuales. En este caso es una sola y se llama ingredients
const Example = (props) => {
  const listOfIngredients = props.ingredients

  const thirdIngredient = listOfIngredients[2]
  let randomIngredient 

  // Aca estamos definiendo logica que vamos a usar en el componente, la cual va a ser disparada por el usuario
  const pickRandomIngredient = () => {
    const randomNumber = Math.floor(Math.random() * listOfIngredients.length)
    randomIngredient = listOfIngredients[randomNumber]
  }

  return (
    <section>
      <h4>Este es el tercer ingrediente:</h4>
      <p>{thirdIngredient}</p>
      <h4>Este es un ingrediente aleatorio:</h4>
      <p>{randomIngredient}</p>
      <button onClick={pickRandomIngredient}>Elejir ingrediente aleatorio</button>
    </section>
  )
}

// Notar que despues del return tiene que haber un unico elemento de marcado, en este caso <section></section>
// se puede usar <></> para englobar al resto de los elementos si no se quiere usar ninguno en particular

export default Example