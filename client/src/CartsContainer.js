import React from "react";
// import CartsCard from "./CartsCard"
import ProductsCard from "./ProductsCard";

const CartsContainer = ({cart, cartProducts}) => {
    console.log(cartProducts)
    const ProductsComponent = cartProducts.map(product => {
                return <ProductsCard key = {product.id} products = {product } > <img src = 'img not found' alt='img not found' /></ProductsCard>
    })

    return (
        <div className='content-large'>
         {ProductsComponent}
        </div>
    )




}



export default CartsContainer