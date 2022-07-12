import React from "react";
import ItemCountBtn from "./ItemCountBtn";

const ItemText = () => {
    return(
        <div className="text">
        <div className="text-container">
            <h5 className="sneaker-company">
                SNEAKER COMPANY
            </h5>
            <h1 className="item-heading">
                Fall Limited Edition Sneakers
            </h1>
            <p className="item-description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price-sale-container">
                <h1 className="price">$125.00</h1>
                <div className="sale-block">
                        <h5 className="sale">50%</h5>
                </div>
            </div>
            <p className="original-price">
                $250.00
            </p>
        </div>
                <ItemCountBtn/>
          
    </div>
    )
}

export default ItemText