import React,{ useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header"
import WelcomePage from "./components/welcomePage/WelcomePage";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomePage from "./components/homePage/HomePage";
import Profile from "./components/profile/Profile";


const App = (props) => {

    const [accounts, setAccounts] = useState([
        { id: "1", name: "Gosp", lastname: "Gospic", username: "danilov", 
        password: "danilov", email:"danilo@email.com", datefbirth:"22/02/1992", imagelinks:"https://upload.wikimedia.org/wikipedia/commons/6/61/Gandhi_smiling_1942.jpg" },
        { id: "2", name: "Mirza", lastname: "Horman", username: "mirzah", 
        password: "mirzah", email:"mirza@rmail.com", datefbirth:"07/07/1997", imagelinks:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg" }
    ])
    const [currentAccount, setCurrentAccount] = useState({})

  
    const setCurrentAccountToState = (currentAccount1) => {
        setCurrentAccount(currentAccount1)
    }

   
    
    const [posts, setPosts] = useState([
        {idpost:"1", idcreator:"1", naslov:"titel1", text:"1 hundred times every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",
     date:"22/1/2021", time:"20:22"},
     {idpost:"2", idcreator:"2", naslov:"titel2", text:"2 stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
     date:"27/1/2021", time:"20:00"},
     ])

    const addNewPost = (newPost) => {
    setPosts([...posts,newPost])
    } 
   


 
    return (
        <BrowserRouter>
        <Route path="/" exact>
            <WelcomePage />
        </Route>
        <Route path="/homepage" exact>
            <Header />
            <HomePage addNewPost={addNewPost} currentAccount={currentAccount} accounts={accounts} posts={posts} />
        </Route>
        <Route path="/profile" exact>
            <Header />
            <Profile currentAccount={currentAccount} accounts={accounts} posts={posts} />
        </Route>
        <Route  path="/register">
            <Register  />
        </Route>
        <Route path="/login">
            <Login  setCurrentAccountToState={setCurrentAccountToState} accounts={accounts}/>
        </Route>
            {/* <Header /> */}
        </BrowserRouter>
    )
}

export default App;







