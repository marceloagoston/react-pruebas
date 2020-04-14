import React from 'react';
import {render} from 'react-dom';

const Saludaridiomas = ({idiom}) =>{
  if (idiom === "es"){
    return <span>Hola</span>
  } else {
    return <span>Hello</span>
  }
}

let lista = [
  'Japo',
  'Paloma',
  'Lucas',
  'Marcelo',
  'Potro'
]
const GetNombres = ({lta}) => {
  return (
    lta.map(i => <li>{i}</li>)
    )
}
const App = () => {
 return (
   <ul>
    <GetNombres lta={lista}/>
   </ul>
 )

}

render(<App/>, document.getElementById('root'));