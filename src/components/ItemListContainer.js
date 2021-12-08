import React from "react";

const greeting = {
    Articulo1: (props)=>(<h1>{props.id}</h1>),
    Artiuclo2: (props)=>(<h1>{props.id}</h1>)
}

function ItemListContainer(props){
    console.log(props)
    const {id:value, ejemplo:titulo} = props

    return (
        <div className="Catalogo">
            <greeting.Articulo1 id="Catalogo oficial"/>
            <greeting.Artiuclo2 id="Bizarrap"/>
            <div>{titulo}</div>
            <div>{value}</div>
        </div>
    )
}

export default ItemListContainer;