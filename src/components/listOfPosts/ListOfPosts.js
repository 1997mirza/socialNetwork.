import React from "react"
import PostMaker from "../postMaker/PostMaker"


const ListOfPosts = ({selectedAccount,currentAccount1,posts,accounts,addPlus,addMinus}) => {


    const lPosts = posts.slice(0).reverse().map(post=>{
       return <PostMaker selectedAccount={selectedAccount} addPlus={addPlus} addMinus={addMinus} key={post.idpost} post={post} accounts={accounts} currentAccount1={currentAccount1} />
    })
   
    return (
        <>
        <div className="container">
                {lPosts}
        </div>
        </>
        
    )
}

export default ListOfPosts