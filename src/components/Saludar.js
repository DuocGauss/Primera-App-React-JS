import React from "react";

//Ejemplo de componentes utilizando props o propiedades
export default function Saludar(props) {
    //Ejemplo de destructuring
    const {UserInfo, Saludo} = props
    //Asignarle un valor por defecto si no existe ningún nombre
    const {nombre = "Anonimo"} = UserInfo

    console.log(nombre);
    console.log(UserInfo.edad);
    console.log(UserInfo.color);
    
    return (
        <div>
            <p>Hola {nombre}, tienes {UserInfo.edad} años
                y tu color favorito es el {UserInfo.color}
            </p>
            <button onClick={()=> Saludo(nombre, UserInfo.edad, UserInfo.color)}>Saludo</button>

        </div>
    )
}