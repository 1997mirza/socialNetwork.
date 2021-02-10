import React, { useState } from "react"



const PostMaker = ({ post,accounts }) => {
    let currentAccount = accounts.filter(account => {
        return account.id === post.idcreator
    })[0];
    console.log(currentAccount.imagelinks)
    
 




    return (
        <>

            <div className="row mt-2 mb-2 border siva">
                <div className="col-lg-3">
                    <img id="da" src={`${currentAccount.imagelinks}`} alt="profile-photo" class="img-thumbnail rounded-circle m-1" />
                </div>
                <div className="col-lg-9">
                    <h2>{currentAccount.name} {currentAccount.lastname}</h2>
                    <p>{(post.text).substring(0, 400)}...</p>
                         <p>{post.date} {post.time}</p>
                </div>
                <div className="col-lg-12">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <button className="btn btn-success form-control">0</button>
                        </div>
                        <div className="col-lg-6">
                        <button className="btn btn-danger form-control">0</button>

                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default PostMaker