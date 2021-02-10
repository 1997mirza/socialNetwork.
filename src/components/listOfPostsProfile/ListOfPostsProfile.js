import React from "react"
import PostMakerSm from "../postMakerSm/PostMakerSm"



const ListOfPostsProfile = ({posts,accounts,currentAccount}) => {


    let postsCopy = posts.filter(post1=>{
        return (post1.idcreator === (currentAccount.id) )
    })
    postsCopy.reverse();
    let postsCopy3 = postsCopy.slice(0, 3);

    const lPosts = postsCopy3.map(post=>{
       return <PostMakerSm key={post.idpost} post={post} accounts={accounts} />
    })
   
    return (
        <>
             {lPosts}
        </>
        
    )
}

export default ListOfPostsProfile