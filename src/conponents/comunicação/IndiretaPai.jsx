import React from "react";
import Indiretafilho from "./IndiretaFilho";

export default props=>{

    let nome = '?';
    let idade = 0;
    let nerd = false;


    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
    }

    return (

        // nome idade nerd

        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <Indiretafilho quandoClicar={fornecerInformacoes}></Indiretafilho>
        </div>

    )

}