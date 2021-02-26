import React, {useState} from "react"
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom"



const Login = ({accounts,setCurrentAccountToState}) => {


    const [loginAccount, setLoginAccount] = useState({username:"",password:""});

    const history = useHistory();


    const check = () => {
        let success = false;
       for (let index = 0; index < accounts.length; index++) {
           const account = accounts[index];
           if (account.username === loginAccount.username && account.password === loginAccount.password ) {
            console.log("success")
            success = true;
            setCurrentAccountToState(account);
            history.push("/homepage");
            break;
        }    
       }
       if (success == false) {
        console.log("unsuccess")
        document.querySelector('.unsuccessfully').style.visibility  = 'visible';

    }
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 mt-5">
                <div class="login-form-1">
                    <h3>Welcome To Pub</h3>
                    <div>
                        <div class="form-group">
                            <input onChange = {e => {setLoginAccount({...loginAccount,username:e.target.value})}}  
                            type="text" id="phone" className="form-control" placeholder="username" /><br />
                        </div>
                        <div class="form-group">
                        <input onChange = {e => {setLoginAccount({...loginAccount,password:e.target.value})}} 
                        type="password" id="phone" className="form-control" placeholder="password" />
                                <p className="unsuccessfully">Login failed: Invalid username or password</p>
                        </div>
                        <div class="form-group">
                        <button  className="form-control btn btn-primary" onClick={()=>{check()}}>Login</button>                        </div>
                        <div class="form-group">
                            <NavLink className="nav-link" to="/register">Don't have an account yet? <b>Sign Up!</b></NavLink> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Login