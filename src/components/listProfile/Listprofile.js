import React from "react"
import { Link, NavLink } from "react-router-dom"
import OneProfile from "../oneProfile/OneProfile";



const ListProfile = ({sResults,selectedAccount}) => {
    const lPosts =sResults.map(profile=>{
        return <OneProfile selectedAccount={selectedAccount} profile={profile} />
     })
    return (
        <>
            {lPosts}
        </>
    )
}
export default ListProfile

