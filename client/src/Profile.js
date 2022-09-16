import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import CartsContainer from "./CartsContainer";

export default function Profile({ currentUser }) {


  const [currentCart, setCurrentCart] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  useEffect(() => {
    fetch("/me/carts")
      .then(resp => resp.json())
      .then(carts => {
        setCurrentCart(carts)
        setCartProducts(carts.products)
      }
      )
  }, [])

  const array2 = [currentCart]

  const array = [currentUser]
 

  const ProfileComponent = array.map((user) => {
    return <ProfileCard key={user.id} user={user} > </ProfileCard>
  })
  const CartComponent = array2.map((cart) => {
    return <CartsContainer key={cart.id} cart={cart} cartProducts = {cartProducts}> </CartsContainer>
  })

  return (
    <div className='content-large'>
      {ProfileComponent}
      {CartComponent}
    </div>
  )
}


