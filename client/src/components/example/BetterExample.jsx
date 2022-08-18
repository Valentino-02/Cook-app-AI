import './example.css'
import React, { useState } from 'react'

  //La unica diferencia con Example es que vamos a uno de los llamados React Hooks
  //en este caso useState
  //useState te permite decirle a la app que tal variable va a cambiar eventualmente y todo lo que la utilize nesesita un re-renderizado

const Example = (props) => {
  // siempre se escriben asi, primero la variable que queres vigilar, luego la funcion que la cambia, y despues el estado inicial, en este caso 'banana'. 
  //el estado inicial tambien podria ser '' (string vacia)
  const [randomIngredient, setRandomIngredient] = useState('banana')

  const listOfIngredients = props.ingredients

  const thirdIngredient = listOfIngredients[2]

  const pickRandomIngredient = () => {
    const randomNumber = Math.floor(Math.random() * listOfIngredients.length)
    setRandomIngredient(listOfIngredients[randomNumber]) 
  }// Notar que tenemos que usar la funcion setRandomIngredient que habiamos definido, y decirle cual es el nuevo ingrediente


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

export default Example