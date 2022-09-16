import React from "react"


const ProfileCard = ({user}) => {
    

    
    return(
 
    <div className= 'profile'>
        <>
        <h2 className ='user header'>Name: {user.name}</h2>
        <h3 className="user subhead">My profile details</h3>
        <p className = 'user phone'>Phone: {user.phone}</p>
        <p className = 'user email'>Email: {user.email}</p>
        <p className = 'user address'>Shipping Address: {user.address}</p>
        <p className = 'user cart status'>Order Confirmed: {user.carts}</p>
        
        </>



    </div>
)
}

export default ProfileCard