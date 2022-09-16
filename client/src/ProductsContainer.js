import React from "react";
import ProductsCard from "./ProductsCard"


const ProductsContainer = ({products}) => {
    const ProductsComponent = products.map(product => {
        return <ProductsCard key = {product.id} products = {product } > <img src = 'img not found' alt='img not found' /></ProductsCard>
    })

    return (
        <div className='content-large'>
            {ProductsComponent}
            
        </div>
    )
    




}



export default ProductsContainer