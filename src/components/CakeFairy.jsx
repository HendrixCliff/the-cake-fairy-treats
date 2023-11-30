import React from 'react'

export default function CakeFairy({coverImg, name, price, location}) {
    return (
        <div>
            <div>
                <img className="paparazii" src={`./src/assets/${coverImg}`}/>
                 <h3 className="location">{location === "online" ? "online" : "sold-out"}</h3>
            </div>
            <h3 className="trip">{name}</h3>
            <h4>{price}</h4>
        </div>
    )
}