import React from "react";

import Primeiro from './conponents/basicos/Primeiro';
import ComParametro from './conponents/basicos/ComParametro';
import Fragmento from './conponents/basicos/Fragment';

//forma masi reduzida de uma função
export default _ =>                                                                                           

    //sintaxe jsx(parece html mas não é)
    //precia sempre estar envolvido por uma tag como o <div>
    <div id='app'>
        <h1>Fundamentos React </h1>
        <Fragmento/>
        <ComParametro 
        titulo='Segundo Componente!' 
        aluno='Pedro' nota={9.3}/>
        <Primeiro></Primeiro>
    </div>
    


