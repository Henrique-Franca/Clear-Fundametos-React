import './App.css'
import React from "react";

import TabelaProdutos from './conponents/repetição/TabelaProdutos';
import ListaAlunos from './conponents/repetição/ListaAlunos';
import FamiliaMembro from './conponents/basicos/FamiliaMembro';
import Familia from './conponents/basicos/Familia';
import Cards from './conponents/layout/Cards'
import Primeiro from './conponents/basicos/Primeiro';
import ComParametro from './conponents/basicos/ComParametro';
import Fragmento from './conponents/basicos/Fragment';

//forma masi reduzida de uma função
export default _ =>                                                                                           

    //sintaxe jsx(parece html mas não é)
    //precia sempre estar envolvido por uma tag como o <div>
    <div className='App'>
        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Cards titulo="#06Tabela de Repetião" color="#a24">
                <TabelaProdutos/>
            </Cards>

            <Cards titulo="#05Repetição" color="#fa4">
                <ListaAlunos/>
            </Cards>

            <Cards titulo="#04Familia" color="#808">
            <Familia sobrenome = "Silva">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Ana" />
                <FamiliaMembro nome="Gustavo" />
            </Familia>
            </Cards>

            <Cards titulo="#03Fragmento" color="#080">
            <Fragmento/>
            </Cards>

            <Cards titulo="#02 Segundo Componente" color="#780">
            <ComParametro 
            titulo='Segundo Componente!' 
            aluno='Pedro' nota={9.3}/>
            </Cards>

            <Cards titulo="#01 Primeiro Componente" color='#660'>
            <Primeiro/>
            </Cards>

        </div>

        
    </div>
    


