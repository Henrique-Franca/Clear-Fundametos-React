import React from "react";
import If from './if';

export default props =>{

    const usuario = props.usuario  ||  {}
    
    return(
    <div> 
        <If teste= {usuario && usuario.nome}>
        seja bem vondo <strong>{usuario.nome}!</strong>
        </If>
        <If teste= {!usuario || !usuario.nome}>
        seja bem vondo <strong>Amigão!</strong>
        </If>
    </div>
    )
}