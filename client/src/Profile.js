import React from "react";
import ProfileCard from "./ProfileCard";

export default function Profile({currentUser}){
    
   const array = [currentUser]
   
    const ProfileComponent = array.map((user) => {
        return <ProfileCard key = {user.id} user = {user} > </ProfileCard>
    })
    const CartComponent = array.map((user) => {
        return <CartsContainer key = {user.id} user = {user} > </CartsContainer>
    })

    return (
        <div className='content-large'>
           {ProfileComponent} 
        </div>
    )
    }    
   
    
