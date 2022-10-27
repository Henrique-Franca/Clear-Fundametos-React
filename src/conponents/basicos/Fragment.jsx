import React from "react";

export default function Fragmento(){
    return (
    //precia sempre estar envolvido por uma tag como o <div>

        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
        //ou
        // <>
        //     <h2>Fragmento</h2>
        //     <p>Cuidado com esse erro!</p>
        // <>

    )
}
