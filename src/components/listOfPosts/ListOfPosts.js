import React from "react"
import PostMaker from "../postMaker/PostMaker"


const ListOfPosts = ({posts,accounts}) => {

    const lPosts = posts.slice(0).reverse().map(post=>{
       return <PostMaker key={post.idpost} post={post} accounts={accounts} />
    })
   
    return (
        <>
             {lPosts}
        </>
        
    )
}

export default ListOfPosts