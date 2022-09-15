import React from "react"


const ProfileCard = ({user}) => {
    return(
 
    <div className= 'profile'>
        <>
        <h2 className ='user header'>{user.name}</h2>
        <h3 className="user subhead">My profile details:</h3>
        <p className = 'user phone'>{user.phone}</p>
        <p className = 'user email'>{user.email}</p>
        <p className = 'user address'>{user.address}</p>
        </>



    </div>
)
}

export default ProfileCard