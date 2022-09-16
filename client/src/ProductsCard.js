import React from 'react'



const ProductsCard = ({products, cart}) => {
    
   console.log(cart)

    function handleAddToCart (){

        const productAdded = {
            product_id: products.id,
            cart_id: cart.id
        }
        fetch('/cart_products', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productAdded)
        })
        .then((r) => r.json())
        .then((data) => { console.log(data)

        })
        
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