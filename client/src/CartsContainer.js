import React from "react";
import ProductsCard from "./ProductsCard";

const CartsContainer = ({cart, cartProducts}) => {
    
    const ProductsComponent = cartProducts.map(product => {
                return <ProductsCard key = {product.id} products = {product } > <img src = 'img not found' alt='img not found' /></ProductsCard>
    })

    return (
        <div className='content-large'>
            <h3>Here is your cart</h3>
         {ProductsComponent}
        </div>
    )




}



export default CartsContainer