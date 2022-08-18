import React from "react";

// El alma de react son los componentes. se pueden pensar como elementos de marcado custom con logica
import Header from "./components/header/Header";
import Example from "./components/example/Example";

// primero revisa Header para ver que hace y luego Example

const ingredients = ['banana', 'pan', 'cebolla', 'queso', 'atun', 'remolacha']


const App = () => (
  <div>
    <p>Primero vamos a renderizar el componente Header:</p>
    <Header />
    <p>Y luego el componente Example, al cual le vamos a pasar una lista de ingredientes para que las maneje:</p>
    <Example ingredients={ingredients} />
  </div>
)

// seguramente hallas notado que elejir ingrediente aleatorio no esta andando
// esto no es por que halla algo que ande mal, si no que nunca le dijimos a la app que
// haga un nuevo renderizado para mostrar la nueva info
// esto se soluciona muy rapidamente con uno de los hooks de react
// cambia Example por BetterExample, que esta en la misma carpeta

// Notar que App tambien es un componente igual que Header y Example
// Notar que los componentes llevan mayusculas, esto no es solo convencion. Si los escribis con minusculas no andan
export default App;