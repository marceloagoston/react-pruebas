import React, {useState} from 'react';
import {render} from 'react-dom';

const Saludo = ({idiom='es' , nombre}) =>{
  if (idiom === "es"){
    return <span>Hola {nombre}</span>
  } else {
    return <span>Hello {nombre}</span>
  }
} 
const Ingnombre= () =>{
  const [name, setName]=useState("")
   return(
    <div>
      <input onChange={ (ev) => {setName(ev.target.value)}}/>
      <p>Nombre: {name}</p>
    </div>
  )
}
const Contador = ({}) =>{
  const[estado, setEstado]=useState(0);
  return(
    <div>
      <button onClick={ () => {setEstado(++estado)}}>Sumar</button>
      <button onClick={ () => {setEstado(--estado)}}>Restar</button>
      <p>{estado}</p>
    </div>
  )
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
   <div>
      <Saludo nombre='Marcelo' idiom='en'/>
      <br/><br/>
      <Contador />
      <br/>
      <Ingnombre/>
      <ul>
        <GetNombres lta={lista}/>
    </ul>
   </div>
  
 )

}

render(<App/>, document.getElementById('root'));