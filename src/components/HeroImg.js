import React from "react"
import ItemImgData from './ItemImgData'

import ItemText from "./ItemText"



import img1 from '../images/image-product-1.jpg'



 const HeroImg = () => {

 
         
   

    const itemList = ItemImgData.map((item1) => 
        <div className="card-hero" key={item1.id}>
            <img className="card-list-img" src={item1.thumb} 
            
               />
        </div> 

        
    )

    

    return(
        <div className="hero-section">
          <div className="column-1">
            <div className="card"  >
              <img className="card-img"  id="main" src={img1}  >
               
              </img>
            </div>
              <div className="card-container" >
                {itemList}
              </div>
          </div>
          <div className="column-2">
            <ItemText/>
          </div>
            
        </div>
        
    )
    
} 
export default HeroImg

