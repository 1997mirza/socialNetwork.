import React, {useState} from "react"
import { useHistory } from 'react-router-dom';


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
    }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h1 className="display-4 m-4 text-center pubh1">PUB</h1>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input onChange = {e => {setLoginAccount({...loginAccount,username:e.target.value})}}  type="text" id="phone" className="form-control" placeholder="username" /><br />
                                <input onChange = {e => {setLoginAccount({...loginAccount,password:e.target.value})}} type="password" id="phone" className="form-control" placeholder="password" /><br />
                                <button  className="form-control btn btn-info pubh1" onClick={()=>{check()}}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login