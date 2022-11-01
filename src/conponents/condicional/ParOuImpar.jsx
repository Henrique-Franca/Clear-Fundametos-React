import React from "react";

export default props =>{

    const  isPar = props.numero %2===0

    return(

        <div>
            {isPar ? <span>Pat</span> : <span>Impar</span>}
        </div>

    )

}