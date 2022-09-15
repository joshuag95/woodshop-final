import React from "react";
import ProductsContainer from "./ProductsContainer";

export default function Products({products}){
    return (
        <>
        <h1 className='page-header'>Our Products</h1>
        <ProductsContainer products = {products}/>
        </>
    )
}