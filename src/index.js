//import relacionado a css
import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './conponents/basicos/Primeiro';
import ComParametro from './conponents/basicos/ComParametro';

//contate de um elemento pelo ID
//const el =document.getElementById('root');
//<ComParametro titulo='Segundo Componente' subtitulo='Muito legal'/>

ReactDOM.render(
    //sintaxe jsx(parece html mas não é)
   
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo='Segundo Componente!' 
        aluno='Pedro' nota='9.3'/>

    </div>, 
    document.getElementById('root')
);