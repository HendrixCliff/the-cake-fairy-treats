import React from 'react'

export default function CakeFairy({coverImg, name, price, location}) {
    return (
        <div>
            <div>
                <img className="paparazii" src={`./images/${coverImg}`}/>
                 <h3 className="location">{location === "online" ? "online" : "sold-out"}</h3>
            </div>
            <div className="details">
                <h3 className="trip">{name}</h3>
                <h4 className="price">{price}</h4>
            </div>
        </div>
    )
}