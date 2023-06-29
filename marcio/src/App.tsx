
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

const AppNavBar = () => {
 return(
  <h1>Requisção a API</h1>
 )
}
const AppUFLista = (props: any) => {

  return(
    <ul>
      <li>{props.sigla}</li>
    </ul>
  )
 }
 const AppUFDetalhe = () => {
  
  return(
   <>
    <h2>RN</h2>
    <p>Rio Grande do Norte</p>
    <h2>PB</h2>
    <p>Paraiba</p>
    <h2>RJ</h2>
    <p>Rio Janeiro</p>
    <h2>SP</h2>
    <p>São Paulo</p>
   </>
  )
 }
 

function App() {
  const [uf, setUf] = useState([
    "RN",
    "RJ",
    "PB",
    "SP",
    "BA"
  ])
  

  return (
    <>
      <AppNavBar/>
        {uf.map( (uf, indice) => ( <AppUFLista key={indice} sigla={uf} ></AppUFLista> ) )}
      <AppUFDetalhe/>
    </>
  )
}

export default App
