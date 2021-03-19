import React from "react"
import { useHistory } from 'react-router-dom';



const EditProfile = ({ currentAccount,setCurrentAccount,setAccounts,accounts }) => {
    const history = useHistory();
    const text =  <div className="unsuccessfully-username">This field is required</div>
    const save = () => {
        let success = true;
        let fName = document.querySelector('#first-name')
        let lName = document.querySelector('#last-name')
        let pw = document.querySelector('#password')
        let email = document.querySelector('#e-mail')
        let add = document.querySelector('#address')
        let iLink = document.querySelector('#image-link') 
        let birtDate = document.querySelector('#bird-date') 
        let warning = document.querySelectorAll(".unsuccessfully-username")
        let inputValues = document.querySelectorAll(".selected")
        console.log(inputValues)

        for (let index = 0; index < (inputValues.length); index++) {
            warning[index].style.display  = 'none';
            const element = inputValues[index];
            if (!element.value) {
                success = false;
                warning[index].style.display  = 'block';
            }
        }
        if (success) {
            let user = {
                id: currentAccount.id, name: fName.value, lastname: lName.value, username: currentAccount.username,
                password: pw.value, city: add.value, email: email.value, followers: currentAccount.followers , following: currentAccount.following, datefbirth: birtDate.value, imagelinks:iLink.value
            }
            setCurrentAccount(user)
            let users = accounts.filter(el=>{
                return el.id !== user.id
            })
            users.push(user)
            setAccounts(users)
            history.push("/profile")

        }
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="row siva mt-3">
                            <div className="col-12">
                                <div class="form-group mt-3">
                                    <input
                                        type="text" id="first-name"  className="form-control selected"  defaultValue={currentAccount.name} />
                                        {text}
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text" id="last-name" className="form-control selected" placeholder="Last name" onChange={()=>{}} defaultValue={currentAccount.lastname}  />
                                        {text}
                                </div>
                                <div class="form-group">
                                <input
                                        type="text"  className="form-control"disabled="true" placeholder="Last name" vadefaultValuelue={currentAccount.username}  />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="password" id="password" className="form-control selected" placeholder="password" defaultValue={currentAccount.password} />
                                        {text}

                                </div>
                                <div class="form-group">
                                    <input
                                        type="email" id="e-mail" className="form-control selected" placeholder="E-mail"  defaultValue={currentAccount.email} />
                                        {text}

                                </div>
                                <div class="form-group">
                                    <input
                                        type="text" id="address" className="form-control selected" placeholder="Adresse" defaultValue={currentAccount.city}/>
                                        {text}

                                </div>
                                <div class="form-group">
                                    <input
                                        type="text" id="bird-date" className="form-control selected" placeholder="Birth date" defaultValue={currentAccount.datefbirth} />
                                        {text}
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text" id="image-link" className="form-control" placeholder="Image link(optional)" defaultValue={currentAccount.imagelinks} />
                                </div>
                                <div class="form-group">
                                <button  className="form-control btn btn-primary"  onClick={()=>{save()}} >Save</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default EditProfile