import React from "react"
import ListOfPostsProfile from "../listOfPostsProfile/ListOfPostsProfile"
let follower;

  

const Profile = ({ followersq,posts,accounts,currentAccount,follow }) => {
    
    // let x;
    // if(currentAccount.length === 0) {
    //     x=2
    // }else {x=1}
    // console.log(x)
    if (follow) {
        follower = followersq(currentAccount.id);
    }
    const poziv = () => {
        followersq(currentAccount.id,currentAccount)
        let followAction = document.querySelector('#followChanger')
        if (followAction.textContent === "Follow") {
            followAction.innerHTML ="Unfollow"
        } else {
            followAction.innerHTML ="Follow"
        }
    }
 

 
    const followContent = follow? (
        <button  onClick={() => { poziv() }} id="followChanger" className="btn btn-lx btn-primary float-right mt-2">{follower ? ("Unfollow") : ("Follow")}</button>
    ) : null
    

    return (
        <>
            
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-10 offset-1">
                            <div className="row">
                                <div className="col-lg-11 ">
                                        <div className="col-lg-12">
                                                <div className="row mt-2 mb-2 border siva">
                                                    <div className="col-lg-3">
                                                        <img id="da" src={`${currentAccount.imagelinks}`} alt="profile-ph" class="img-thumbnail m-1" />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <h2> <b>{currentAccount.name} {currentAccount.lastname} {followContent}</b></h2>
                                                        <p>Birth date <b>{currentAccount.datefbirth}</b></p>
                                                        <p>Address <b>{currentAccount.city}</b></p>
                                                        <p>Birth date <b>{currentAccount.datefbirth}</b></p>
                                                        <p>Email <b>{currentAccount.email}</b></p>
                                                    </div>
                                            
                                                </div>
                                    </div>
                                    <h4 >Recent posts:</h4>
                                <ListOfPostsProfile currentAccount={currentAccount} posts={posts} accounts={accounts}/>

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
export default Profile