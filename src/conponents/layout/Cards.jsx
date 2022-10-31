import "./Cards.css";
import React from 'react';

export default (props) =>{

    const cardStyle = {

        backgroundColor : props.color,
        borderColor: props.color


    }

    return (
        <div className="Card" style={{
            backgroundColor : props.color,
            borderColor: props.color
            }}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )

}