import React from "react";

export default class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: null
        }
       
    }


    render(){
        return(
            <div className="cart-container">
                <div className="cart-header">
                    <h3>Cart</h3>
                </div>
                <div className="cart-content">
                    <p className="cart-content-text">Your cart is empty</p>
                </div>
            </div>
        )
    }
}