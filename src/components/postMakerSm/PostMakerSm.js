import React, { useState } from "react"



const PostMakerSm = ({ post,accounts }) => {

    let currentAccount = accounts.filter(account => {
        return account.id === post.idcreator
    })[0];
    let plus = post.plus.length;
    let minus = post.minus.length;
    return (
        <>

            <div className="row mt-2 mb-2">
            <div className="col-10 border siva ml-3">
            <div className="col-lg-12">
                    <h2>{currentAccount.name} {currentAccount.lastname}</h2>
                    <p>{(post.text).substring(0, 400)}...</p>
                         <p>{post.date} {post.time}</p>
                </div>
                <div className="col-lg-12">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <button className="btn btn-success form-control">{plus}</button>
                        </div>
                        <div className="col-lg-6">
                        <button className="btn btn-danger form-control">{minus}</button>

                        </div>

                    </div>
                </div>
            </div>


               



            </div>



        </>
    )
}

export default PostMakerSm