import React from "react";
import './card.css'
function Card({product}) {
    return (
       <>
        <div className="card h-95 w-100">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text mb-4">{product.description}</p>
                <div className="flex">
                <h3 ><span className="pe-2">Rs</span>{product.price}</h3>
                <a href="#" className="btn bucket w-100 ms-4">Add to bucket</a>
                </div>
            </div>
        </div>
       </>
    )
}


export default Card