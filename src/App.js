import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
//Importar el componente HolaMundo para utilizarlo en otros lugares como en App.js
//import HolaMundo, {AdiosMundo} from "./components/HolaMundo";
import Saludar from "./components/Saludar";

function App() {
  const UserInfo = {
    nombre: "Gustavo Ignacio",
    edad: 25,
    color: "verde"
  }

  const Saludo = (name, edad, color) => {
    //ejemplo de template string
    alert(`Hola ${name}, tienes ${edad} años y tu color favorito es el ${color}`)
  }
  //Ejemplo de hook de estado, useState
  const [stateCar, setStateCar] = useState(false)

  //Ejemplo de hook de efecto, useEffect
  const [contar, setContar] = useState(0)
  useEffect(() => {
    console.log("Total:", contar)

  }, [contar])
  
  const estadoAuto = () => {
    setStateCar(!stateCar)
    setContar(contar + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {/* Se utiliza el componente HolaMundo */}
        <Saludar UserInfo={UserInfo} Saludo={Saludo}/>
        <h3>Estado del auto: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={estadoAuto}>Encender / Apagar</button>
        <h4>Veces que el auto cambio de estado: {contar}</h4>
      </header>
    </div>
  );
}

export default App;
