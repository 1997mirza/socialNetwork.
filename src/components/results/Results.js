import React from "react"
import ListProfile from "../listProfile/Listprofile";


 

const Result = ({sResults,selectedAccount}) => {

    

    return <>
    <ListProfile selectedAccount={selectedAccount} sResults={sResults} />
    </>
}
export default Result