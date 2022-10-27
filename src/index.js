//import relacionado a css
import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './conponents/basicos/Primeiro';

//contate de um elemento pelo ID
//const el =document.getElementById('root');



ReactDOM.render(
    //sintaxe jsx(parece html mas não é)
   
    <div>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
);