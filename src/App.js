import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header"
import WelcomePage from "./components/welcomePage/WelcomePage";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomePage from "./components/homePage/HomePage";
import Profile from "./components/profile/Profile";
import Modal from "./components/Modal";
import Result from "./components/results/Results";
import EditProfile from "./components/editProfile/EditProfile";




let selectAcc;
let novi;

const App = (props) => {

    const [accounts, setAccounts] = useState([
        {
            id: "1", name: "Gosp", lastname: "Gospic", username: "danilov",
            password: "danilov", city: "Sarajevo", email: "danilo@email.com", followers: ["2"], following: ["2", "1"], datefbirth: "22/02/1992", imagelinks: "https://upload.wikimedia.org/wikipedia/commons/6/61/Gandhi_smiling_1942.jpg"
        },
        {
            id: "2", name: "Mirza", lastname: "Horman", username: "mirzah",
            password: "mirzah", city: "Sarajevo", email: "mirza@rmail.com", followers: ["1"], following: ["1", "2"], datefbirth: "07/07/1997", imagelinks: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
        },
        {
            id: "3", name: "Mirza", lastname: "Tomas", username: "asdsad",
            password: "mirzah", city: "Sarajevo", email: "mirza@rmail.com", followers: [], following: ["1", "2"], datefbirth: "07/07/1997", imagelinks: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
        }
    ])
    const [currentAccount, setCurrentAccount] = useState({})
    const [selectedAccu, setSelectedAccu] = useState({})
    const [currentPost, setCurrentPost] = useState({})
    const [sResults, setSResults] = useState([])
    const [comments, setComments] = useState([
        {id:"1",idpost:"1",idauthor:"1",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, ss"},
        {id:"2",idpost:"2",idauthor:"1",text:" years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {id:"3",idpost:"2",idauthor:"2",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"} 

    ])


    const setCurrentAccountToState = (currentAccount1) => {
        setCurrentAccount(currentAccount1)
    }
    const [posts, setPosts] = useState([
        {
            idpost: "1", idcreator: "1", naslov: "titel1", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). hundred times every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",
            date: "22/1/2021", time: "20:22", plus: ["3"], minus: ["2", "5", "7",]
        },
        {
            idpost: "2", idcreator: "2", naslov: "titel2", text: "2 stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
            date: "27/1/2021", time: "20:00", plus: ["2"], minus: ["1"]
        },
    ])

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const checkUsername = (usernameForCheck) =>{
        if(usernameForCheck){
                let checker = false;
        accounts.map(element=>{
            if (element.username === usernameForCheck ) {
                checker = true;
            }
        })
        return checker
        }
    }
    const addNewUser = (userToAdd) =>{
        if (userToAdd === "number") {
            return ((accounts.length)+1).toString()
        } else {
            let copyAccounts = accounts;
            copyAccounts.push(userToAdd)
            setAccounts(copyAccounts)
            console.log(accounts)
        }
    }

    const addPlus = (id, idPost, attribute) => {
        if (attribute) {
            let postToSet = posts.filter(p => {
                return idPost === p.idpost
            })[0]
            setCurrentPost(postToSet)
        } else {
            const copyPosts = posts.map(post => {
                if (post.idpost === idPost) {
                    let plusCheck = false;
                    let minusCheck = false;
                    let index;
                    for (let i = 0; i < post.plus.length; i++) {
                        const element = post.plus[i];
                        if (element === id) {
                            plusCheck = true
                            index = post.plus.indexOf(id)
                            break;
                        }
                    }
                    for (let i = 0; i < post.minus.length; i++) {
                        const element = post.minus[i];
                        if (element === id) {
                            minusCheck = true
                            index = post.minus.indexOf(id)
                            break;
                        }
                    }

                    if (plusCheck) {
                        post.plus.splice(index, 1)
                    }
                    else if (minusCheck) {
                        post.minus.splice(index, 1)
                        post.plus.push(id)
                    }
                    else {
                        post.plus.push(id)
                    }


                    return post
                }
                else return post
            })
            setPosts(copyPosts);
        }


    }

    const selectedAccount = (id) => {
        console.log(id)
        selectAcc = accounts.filter(acc => {
            return acc.id === id
        })
        setSelectedAccu(selectAcc[0])


    }
    function followersq(id, accForAction) {

        if (accForAction) {
            let copyAccounts = accounts;
            let copyCurrent = currentAccount;
            let copySelected = selectedAccu
            let currentFol;
            let selectFol;
            let checker = false
            for (let index = 0; index < currentAccount.following.length; index++) {
                const element = currentAccount.following[index];
                if (element === accForAction.id) {
                    checker = true
                }
            }
   
        copyAccounts = accounts.filter(el=>{
            if (el.id === copyCurrent.id) {
                console.log(true)
            }else {
                console.log(false)
            }
            return el.id !== copyCurrent.id
        })
        console.log(copyAccounts)

        let copyAccounts1 = copyAccounts.filter(el=>{
            if (el.id === copySelected.id) {
                console.log(true)
            }else {
                console.log(false)
            }
            return el.id !== copySelected.id
        })
        console.log(copyAccounts1)
        if (checker) {
   
         currentFol = copyCurrent.following.filter(el=>{
             return el !== copySelected.id
         })
         selectFol = copySelected.followers.filter(el=>{
            return el !== copyCurrent.id
        })
    

        } else {
         currentFol = copyCurrent.following
         currentFol.push(copySelected.id)
        selectFol = copySelected.followers
        selectFol.push(copyCurrent.id)
        }
        copyCurrent.following = currentFol;
        copySelected.followers = selectFol;
        setCurrentAccount(copyCurrent)
        setSelectedAccu(copySelected)
        if (copyCurrent.id === copySelected.id) {
            copyAccounts1.push(currentAccount)
        }
        else {
            copyAccounts1.push(currentAccount)
            copyAccounts1.push(selectedAccu)
        }
        setAccounts(copyAccounts1)
        console.log(accounts)
        } else {
            let follower = false;
            for (let i = 0; i < currentAccount.following.length; i++) {
                const element = currentAccount.following[i];
                if (id === element) {
                    follower = true
                }
            }
            return follower;

        }

    }

    const addMinus = (id, idPost) => {

        const copyPosts = posts.map(post => {
            if (post.idpost === idPost) {
                let plusCheck = false;
                let minusCheck = false;
                let index;
                for (let i = 0; i < post.plus.length; i++) {
                    const element = post.plus[i];
                    if (element === id) {
                        plusCheck = true
                        index = post.plus.indexOf(id)
                        break;
                    }
                }
                for (let i = 0; i < post.minus.length; i++) {
                    const element = post.minus[i];
                    if (element === id) {
                        minusCheck = true
                        index = post.minus.indexOf(id)
                        break;
                    }
                }


                if (plusCheck) {
                    post.plus.splice(index, 1)
                    post.minus.push(id)

                }
                else if (minusCheck) {
                    post.minus.splice(index, 1)
                }
                else {
                    post.minus.push(id)
                }


                return post
            }
            else return post
        })
        setPosts(copyPosts);
    }
    const searchContent = (text) =>{
        let result = accounts.filter(el => {
            return ((el.name).toUpperCase() === text.toUpperCase())||((el.lastname).toUpperCase() === text.toUpperCase())
        })
        setSResults(result)
    }



    return (
        <BrowserRouter>
            <Route path="/" exact>
                <WelcomePage />
            </Route>
            <Route path="/homepage" setPosts={setPosts} exact>
                <Header currentAccount={currentAccount} searchContent={searchContent}/>
                <Modal currentPost={currentPost} />
                <HomePage setComments={setComments} comments={comments} selectedAccount={selectedAccount} addPlus={addPlus} addMinus={addMinus} addNewPost={addNewPost} currentAccount={currentAccount} accounts={accounts} posts={posts} />
            </Route>

            <Switch>
                <Route path="/profile/:id" exact>
                    <Header currentAccount={currentAccount} searchContent={searchContent}/>
                    <Profile follow={true} followersq={followersq} currentAccount={selectedAccu} accounts={accounts} posts={posts} />
                </Route>

                <Route path="/profile" exact>
                    <Header currentAccount={currentAccount} searchContent={searchContent} />
                    <Profile currentAccount={currentAccount} accounts={accounts} posts={posts} />
                </Route>
            </Switch>



            <Route path="/register">
                <Register checkUsername={checkUsername} addNewUser={addNewUser}/>
            </Route>
            <Route path="/login">
                <Login setCurrentAccountToState={setCurrentAccountToState} accounts={accounts} />
            </Route>
            <Route path="/result">
                <Header searchContent={searchContent} currentAccount={currentAccount} />
                <Result selectedAccount={selectedAccount} sResults={sResults}/>
            </Route>
            <Route path="/edit">
                <Header searchContent={searchContent} currentAccount={currentAccount}  />
                <EditProfile currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} accounts={accounts} setAccounts={setAccounts} />
            </Route>
    
        </BrowserRouter>
    )
}

export default App;







