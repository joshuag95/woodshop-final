import React from "react";
import ProductsCards from './ProductsCard'


const ProductsContainer = ({products}) => {
    const ProductsComponent = products.map(product => {
        return <ProductsCards key = {product.id} products = {product } > <img src = 'img not found' alt='img not found' /></ProductsCards>
    })

    return (
        <div className='content-large'>
            {ProductsComponent}
        </div>
    )
    




}



export default ProductsContainer