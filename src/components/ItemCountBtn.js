import React from 'react'
import {useState} from 'react'
import cart from '../images/icon-cart-white.svg'
import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'

const ItemCountBtn = () => {

    
    const [count, setCount] = useState(0)

    const countBound = () => {
        if( count > 0){
            setCount(count-1)
        }
    }


    return(
        <div className='btns'>
            <div className='count-btn-container'>
                    <img className='icon-minus' onClick = {countBound} 
                            src={iconMinus}/>
                        <p className='count' >{count}</p>
                    <img className='icon-plus' onClick = {() => setCount(count + 1)} 
                            src={iconPlus}/>  
            </div>
            <div className='add-to-cart-container'>
                <button className='add-to-cart'>
                    <img className='cart-icon-btn' src={cart}/>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ItemCountBtn

