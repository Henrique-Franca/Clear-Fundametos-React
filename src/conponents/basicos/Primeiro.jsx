import React from "react";

export default function Primeiro(){

    //qunado for variavel tem sempre que estar dentro de um par de chaves { }
    const msg =  'Seja bem vindo!';

    return( 
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>  
    )

}