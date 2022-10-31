import React from "react";

import Cards from './conponents/layout/Cards'
import Primeiro from './conponents/basicos/Primeiro';
import ComParametro from './conponents/basicos/ComParametro';
import Fragmento from './conponents/basicos/Fragment';

//forma masi reduzida de uma função
export default _ =>                                                                                           

    //sintaxe jsx(parece html mas não é)
    //precia sempre estar envolvido por uma tag como o <div>
    <div id='app'>
        <h1>Fundamentos React </h1>

        <Cards titulo="#03Fragmento">
        <Fragmento/>
        </Cards>

        <Cards titulo="#02 Segundo Componente">
        <ComParametro 
        titulo='Segundo Componente!' 
        aluno='Pedro' nota={9.3}/>
        </Cards>

        <Cards titulo="#01 Primeiro Componente">
        <Fragmento/>
        </Cards>
    </div>
    


