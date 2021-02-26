import React, { useState, useEffect } from "react"
import ListOfPosts from "../listOfPosts/ListOfPosts";

const HomePage = ({ selectedAccount, posts, accounts, currentAccount, addNewPost, addPlus, addMinus }) => {




    const [newPost, setNewPost] = useState({})

    const publish = () => {
        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let day = d.getDate()
        let hours = d.getHours();
        let minutes = d.getMinutes()
        let date = day + "/" + month + "/" + year
        let time = hours + ":" + minutes
        let idP = posts.length + 1




        const inputText = document.querySelector('#text-input').value
        setNewPost({
            idpost: idP, idcreator: currentAccount.id, naslov: "titel1", text: inputText,
            date: date, time: time, plus: [], minus: []
        })
    }



    const publish1 = () => {
        addNewPost(newPost)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-10 offset-1">
                        <div className="row">
                            <div className="col-lg-11 ">
                                <div className="row mt-2 md-2 border siva">
                                    <div className="col-lg-12">
                                        <div className="row mb-2">
                                            <input onChange={() => { publish() }} id="text-input" type="text" placeholder="make-post..." className="form-control m-2" />
                                            <div className="col-lg-12 mt-2">

                                                <button onClick={() => { publish1() }} className="btn btn-light form-control">Publish</button>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <ListOfPosts selectedAccount={selectedAccount} currentAccount1={currentAccount} addMinus={addMinus} addPlus={addPlus} posts={posts} accounts={accounts} />
                            </div>
                            <div className="col-lg-1">
                                <div className="col-12 dva">
                                    <p className="reklama">A</p>
                                    <p className="reklama">D</p>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage 