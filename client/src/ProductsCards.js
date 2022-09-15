import React from 'react'



const ProductsCards = ({products}) => {
    return(

        <div className= 'card'>
            
            <h2 className ='card header'>{products.name}</h2>
            <img className = 'card image' src = {products.image} alt=""/>
            <p className = 'card body'>{products.content}</p>




        </div>
        
        
        

    )





}



export default ProductsCards