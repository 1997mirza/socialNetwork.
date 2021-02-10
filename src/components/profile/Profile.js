import React from "react"
import ListOfPostsProfile from "../listOfPostsProfile/ListOfPostsProfile"

  

const Profile = ({ posts,accounts,currentAccount }) => {
    
    // let x;
    // if(currentAccount.length === 0) {
    //     x=2
    // }else {x=1}
    // console.log(x)
    // console.log(currentAccount)

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
                                                        <h2>{currentAccount.name} {currentAccount.lastname}</h2>
                                                        <p>Birth date {currentAccount.name}</p>
                                                        <p>Birth date {currentAccount.name}</p>
                                                        <p>Birth date {currentAccount.name}</p>

                                                        <p>sdsadasd</p>
                                                    </div>
                                            
                                                </div>
                                    </div>
                                    <h2 >Recent posts</h2>
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