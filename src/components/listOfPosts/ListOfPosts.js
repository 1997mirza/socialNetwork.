import React from "react"
import PostMaker from "../postMaker/PostMaker"


const ListOfPosts = ({publish,setPosts,setComments,selectedAccount,currentAccount1,posts,accounts,addPlus,addMinus,comments}) => {


    const lPosts = posts.slice(0).reverse().map(post=>{
       return <PostMaker publish={publish} posts={posts} setPosts={setPosts} setComments={setComments} comments={comments} selectedAccount={selectedAccount} addPlus={addPlus} addMinus={addMinus} key={post.idpost} post={post} accounts={accounts} currentAccount1={currentAccount1} />
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