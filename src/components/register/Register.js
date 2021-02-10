import React from "react"

const Register = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h1 className="display-4 m-4 text-center pubh1">PUB</h1>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" id="name" className="form-control" placeholder="name"/><br />
                                <input  type="text" id="lastname" className="form-control" placeholder="lastname"  /><br />
                                <input  type="text" id="phone" className="form-control" placeholder="username" /><br />
                                <input  type="password" id="phone" className="form-control" placeholder="password" /><br />
                                <input  type="text" id="email" className="form-control" placeholder="email"/><br />
                                <input  type="text" id="email" className="form-control" placeholder="date of birth"/><br />
                                <input  type="text" id="email" className="form-control" placeholder="image links"/><br />
                                <button  className="form-control btn btn-info pubh1">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register