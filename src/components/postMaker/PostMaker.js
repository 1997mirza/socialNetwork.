import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useHistory } from 'react-router-dom';





const PostMaker = ({ publish,posts,setPosts,selectedAccount, post, accounts, addPlus, addMinus, currentAccount1, comments,setComments }) => {

    const history = useHistory();


    let currentAccount = accounts.filter(account => {
        return account.id === post.idcreator
    })[0];
    let plus = post.plus.length;
    let minus = post.minus.length;
 
    let commentsForAdd = comments.filter(el => {
        return el.idpost === post.idpost
    })
    const addComment = (a,b) =>{
       
        let text = document.querySelector('#wage').value
        document.querySelector('#wage').value = ""
        let copyComents = comments;
        let newComment = {id:(comments.length+1).toString(),idpost:post.idpost,idauthor:currentAccount1.id,text:text}
        copyComents.push(newComment)
        setComments(copyComents)
        let copyPosts = posts
        setPosts = copyPosts
        publish() 
        show1(post.idpost)   
    }

    const postComments = commentsForAdd.map(el=>{
        let  author = accounts.filter(acc => {
            return acc.id === el.idauthor
        })[0]
        return (
            <div className="comments comment mt-1 mb-1 p-2" id={post.idpost}>
             <label>
             <NavLink id={currentAccount.id} onClick={() => { selectedAccount1(author.id) }} to={'/profile/' + currentAccount.name + currentAccount.lastname}>
                        <h4>{author.name} {author.lastname}</h4>
                    </NavLink>
             </label>
               <div className="row">
               <label  className="col-12">{el.text}</label>
               </div>
        </div>
        )
    })


    const selectedAccount1 = (id) => {
        selectedAccount(id)
    }
    const show = (id) => {
        
        let allComents = document.querySelectorAll('.comments')
        for (let index = 0; index < allComents.length; index++) {
            const element = allComents[index];
            let idValue = element.getAttribute("id")
            if (idValue.toString() === id.toString()) {
                if (element.style.display === "block") {
                    element.style.display = "none"
                } else {
                    element.style.display = "block"
                }
            }

        }
    }
    const show1 = (id) => {
        setTimeout(function(){ 
        show2(id)
         }, 200);

    }
    const show2 = (id) => {
        let allComents = document.querySelectorAll('.comments')
        for (let index = 0; index < allComents.length; index++) {
            const element = allComents[index];
            let idValue = element.getAttribute("id")
            if (idValue.toString() === id.toString()) {
                element.style.display = "block"

            }

        }
    }

    




    return (
        <>

            <div className="row mt-2 mb-2 border siva">
                <div className="col-lg-3">
                    <NavLink id={currentAccount.id} onClick={() => { selectedAccount1(currentAccount.id) }} to={'/profile/' + currentAccount.name + currentAccount.lastname}>
                        <img id="da" src={`${currentAccount.imagelinks}`} alt="profile-photo" class="img-thumbnail rounded-circle m-1" />
                    </NavLink>
                </div>
                <div className="col-lg-9">
                    <NavLink id={currentAccount.id} onClick={() => { selectedAccount1(currentAccount.id) }} to={'/profile/' + currentAccount.name + currentAccount.lastname}>
                        <h2>{currentAccount.name} {currentAccount.lastname}</h2>
                    </NavLink>

                    <p>{(post.text).substring(0, 400)}... <button id="current-post" onClick={() => addPlus(currentAccount1.id, post.idpost, true)} current-post={post.idpost} type="button" class="btn btn-primary current" data-toggle="modal" data-target="#exampleModal">more</button></p>
                    <p>{post.date} {post.time} </p>
                </div>
                <div className="col-lg-12">
                    <div className="row mb-2">
                        <div className="col-lg-3">
                            <button onClick={() => addPlus(currentAccount1.id, post.idpost)} className="btn btn-success form-control zelena">{plus}</button>
                        </div>
                        <div className="col-lg-3">
                            <button onClick={() => addMinus(currentAccount1.id, post.idpost)} className="btn btn-danger form-control crvena">{minus}</button>
                        </div>
                        <div className="col-lg-6">
                            <button onClick={() => show(post.idpost)} className="btn btn-primary form-control plava">Comments ({commentsForAdd.length})</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 ">
                    <div className="dada">
                    {postComments}
                    </div>
                    <div className="row ml-1 mr-1 mb-1">
                <input className="form-control comment col-11" id="wage" type="text" placeholder="write a comment"></input>
                <button onClick={()=>{addComment(currentAccount.id,post.idpost)}} className="col-1 btn btn-primary cbutton">+</button>
                    </div>
                </div>

         
          

            </div>



        </>
    )
}

export default PostMaker