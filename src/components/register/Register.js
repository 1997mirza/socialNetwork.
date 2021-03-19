import React,  { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useHistory } from 'react-router-dom';



const Register = ({checkUsername,addNewUser}) => {

    const [problem, setProblem] = useState(true)

    const history = useHistory();



    const text =  <div className="unsuccessfully-username">This field is required</div>

    const register = () =>{
        let problem = true;
        let success = true;
        let fName = document.querySelector('#first-name')
        let lName = document.querySelector('#last-name')
        let uName = document.querySelector('#username')
        let pw = document.querySelector('#password')
        let email = document.querySelector('#e-mail')
        let add = document.querySelector('#address')
        let iLink = document.querySelector('#image-link') 
        let birtDate = document.querySelector('#birth-date') 
        let warning = document.querySelectorAll(".unsuccessfully-username")
        let inputValues = document.querySelectorAll(".selected")
        if (problem) {
            if(checkUsername(uName.value)){
                warning[7].style.display  = 'block';
                success = false;
            } else {
                warning[7].style.display  = 'none';
    
            }
        }
      

        for (let index = 0; index < ((inputValues.length)-1); index++) {
            warning[index].style.display  = 'none';
            const element = inputValues[index];
            if (!element.value) {
                success = false;
                warning[index].style.display  = 'block';
            }
        }
        if (success) {
            let slika;
            if (iLink.value==="") {
                slika ="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            }
            else {
                slika=iLink.value
            }
            let id = addNewUser("number")
            let user = {
                id: id, name: fName.value, lastname: lName.value, username:uName.value ,
                password: pw.value, city: add.value, email: email.value, followers: [], following: [id], datefbirth: birtDate.value, imagelinks: slika
            }
            setProblem(false)
            addNewUser(user)
            document.querySelector('#login-here').style.display = "none"
            document.querySelector('#login-success').style.display = "block"

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
                            <input  
                            type="text" id="first-name" className="form-control selected" placeholder="First name" />
                            {text}
                        </div>
                        <div class="form-group">
                        <input  
                            type="text" id="last-name" className="form-control selected" placeholder="Surname" />
                            {text}
                        </div>
                        <div class="form-group">
                        <input  
                            type="text" id="username" className="form-control selected" placeholder="Username" />
                            {text}
                        </div>
                        <div class="form-group">
                        <input  
                            type="password" id="password" className="form-control selected" placeholder="Password" />
                            {text}
                        </div>
                        <div class="form-group">
                        <input  
                            type="text" id="e-mail" className="form-control selected" placeholder="E-mail" />
                            {text}
                            
                        </div>
                        <div class="form-group">
                        <input  
                            type="text" id="address" className="form-control selected" placeholder="Address" />
                            {text}
        
                        </div>
                        <div class="form-group">
                        <input  
                            type="text" id="birth-date" className="form-control selected" placeholder="Birth date" />
                            {text}
                        </div >
                        <div class="form-group">
                        <input  
                            type="text" id="image-link" className="form-control selected" placeholder="image link (optional)" />
                        </div>
                        <div class="form-group">
                        <button  className="form-control btn btn-primary"  onClick={()=>{register()}}>Register</button>  
                        <p className="unsuccessfully-username">That username is taken. Try another</p>
                      </div>
                        <div class="form-group">
                            <NavLink id="login-here" className="nav-link" to="/login">Already have an account? <b>Login here</b></NavLink> 
                            <NavLink id="login-success" className="nav-link login-success" to="/login">Thank you for registering! <b>Login here</b></NavLink> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register