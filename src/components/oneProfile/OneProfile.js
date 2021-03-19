import React from "react"
import { Link, NavLink } from "react-router-dom"


const OneProfile = ({profile,selectedAccount}) =>{
    return (
        <div className="container">
               <div className="row mt-2 mb-2">
            <div className="col-8 offset-2">
                <div className="row border siva">
                    <div className="col-3 ">
                    <NavLink  onClick={()=>{selectedAccount(profile.id)}} to={'/profile/' + profile.name+profile.lastname}>
                    <img  src={`${profile.imagelinks}`} alt="profile-photo" class="img-thumbnail rounded-circle m-1" />
                    </NavLink>
                    </div>
                    <div className="col-9">
                    <NavLink  onClick={()=>{selectedAccount(profile.id)}} to={'/profile/' + profile.name+profile.lastname}>
                    <h3>{profile.name} {profile.lastname}</h3>
                    </NavLink>
                        <h5>{profile.city}</h5>
                        <h5>{profile.datefbirth}</h5>
                        <h5>{profile.email}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
     
    )
}
export default OneProfile