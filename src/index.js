//import relacionado a css
import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

//contate de um elemento pelo ID
//const el =document.getElementById('root')

const tag = <strong>Olá React!</strong>;

ReactDOM.render(
    //sintaxe jsx(parece html mas não é)
    //interpretando o valor da constante
    <div>
        {tag}
    </div>, 
    document.getElementById('root')
);