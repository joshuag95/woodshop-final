import React from 'react'



const ProductsCard = ({products}) => {
    
    
    function handleAddToCart (){
        fetch(`/add_to_cart/${products.id}`)
        
    }

    
    return(

            
        <div className= 'card'>
            
            <h2 className ='card header'>{products.name}</h2>
            <h3 className = 'card price'>${products.price}</h3>
            <img className = 'card image' src = {products.image} alt="product image"/>
            <p className = 'card body'>{products.description}</p>
            <button onClick={() => handleAddToCart(products.id)}>Add To Cart</button>
            



        </div>
        
        
        

    )





}



export default ProductsCard