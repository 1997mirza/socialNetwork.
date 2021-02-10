import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand ml-5" >PUB</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul  className="navbar-nav ml-auto ml-1">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/homepage" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <NavLink class="nav-link dropdown-toggle mr-5" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Option
        </NavLink>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown"> 
                                <NavLink class="dropdown-item" to="#">Edit profile</NavLink>
                                <NavLink class="dropdown-item disabled" to="#">Dark  mode</NavLink>
                                <div class="dropdown-divider"></div>
                                <NavLink class="dropdown-item" to="#">Logout</NavLink>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header