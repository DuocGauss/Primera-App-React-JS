import React from "react";


//Función para renderizar el componente creado
//Ejemplo de componente
function HolaMundo() {

    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>Gustavo Martínez</h2>
        </div>
    );
}

//El componente de se exportar si no se exporta no se puede utilizar o reutilizar
export default HolaMundo;


//Crear otro componente para utilizar
export function AdiosMundo() {
    //Arriba del return es donde se escribe JavaScript y en el return html
    return(
        <div>
            <h3>Adios Mundo</h3>
        </div>
    )
}

//El return solo puede devolver solo 1 contenido, en este caso lo hace porque solo devuelve
//un div solo, pero si se quitara ese div y si retornara 2 etiquetas h1 daria un error 
//Porque se debe manda solo una cosa encapsulada y no multiples cosas no encapsuladas.