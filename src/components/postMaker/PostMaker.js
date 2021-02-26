import React, { useState } from "react"
import { NavLink } from "react-router-dom"




const PostMaker = ({ selectedAccount,post,accounts,addPlus,addMinus,currentAccount1 }) => {


    let currentAccount = accounts.filter(account => {
        return account.id === post.idcreator
    })[0];
    let plus = post.plus.length;
    let minus = post.minus.length;

    const selectedAccount1=(id)=>{
        selectedAccount(id) 
    }

  


 

    return (
        <>

            <div className="row mt-2 mb-2 border siva">
                <div className="col-lg-3">
                    <NavLink id={currentAccount.id} onClick={()=>{selectedAccount1(currentAccount.id)}} to={'/profile/' + currentAccount.name+currentAccount.lastname}>
                    <img id="da" src={`${currentAccount.imagelinks}`} alt="profile-photo" class="img-thumbnail rounded-circle m-1" />
                    </NavLink>
                </div>
                <div className="col-lg-9">
                <NavLink id={currentAccount.id} onClick={()=>{selectedAccount1(currentAccount.id)}} to={'/profile/' + currentAccount.name+currentAccount.lastname}>
                    <h2>{currentAccount.name} {currentAccount.lastname}</h2>
                    </NavLink>

                    <p>{(post.text).substring(0, 400)}... <button id="current-post" onClick={()=>addPlus(currentAccount1.id,post.idpost,true)} current-post={post.idpost} type="button" class="btn btn-primary current" data-toggle="modal" data-target="#exampleModal">more</button></p>
                         <p>{post.date} {post.time} </p>
                </div>
                <div className="col-lg-12">
                    <div className="row mb-2">
                        <div className="col-lg-3">
                            <button onClick={()=>addPlus(currentAccount1.id,post.idpost)} className="btn btn-success form-control zelena">{plus}</button>
                        </div>
                        <div className="col-lg-3">
                        <button onClick={()=>addMinus(currentAccount1.id,post.idpost)} className="btn btn-danger form-control crvena">{minus}</button>
                        </div>
                        <div className="col-lg-6">
                        <button onClick={()=>addMinus(currentAccount1.id,post.idpost)} className="btn btn-primary form-control crvena">Comment</button>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default PostMaker