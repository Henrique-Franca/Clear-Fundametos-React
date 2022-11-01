import React from "react";
import If, { Else } from './if';

export default props =>{

    const usuario = props.usuario  ||  {}
    
    return(
    <div> 
       {/* <If teste= {usuario && usuario.nome}>
        seja bem vindo <strong>{usuario.nome}!</strong>
        </If>
        <If teste= {!usuario || !usuario.nome}>
        seja bem vindo <strong>Amigão!</strong>
    </If>*/}

        <If teste= {usuario && usuario.nome}>
        seja bem vindo <strong>{usuario.nome}!</strong>
            <Else>
            seja bem vondo <strong>Amigão!</strong>
            </Else>
        </If>
    </div>
    )
}