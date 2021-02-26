import React from "react"
import { Link, NavLink } from "react-router-dom"
import { useHistory } from 'react-router-dom';

const Header = ({searchContent}) => {
    const history = useHistory();

    const sContent = () =>{
        let sText = document.querySelector('.rounded').value
        searchContent(sText)
        history.push("/result")
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto ml-5">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/homepage" exact>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto w-75">
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <button type="button" onClick={()=>{sContent()}} class="btn btn-light">Search</button>
                    </div>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                            <NavLink class="nav-link dropdown-toggle mr-5" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Option
                            </NavLink>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <NavLink class="dropdown-item" to="#">Edit profile</NavLink>
                                <NavLink class="dropdown-item" to="#">Show all posts</NavLink>
                                <NavLink class="dropdown-item disabled" to="#">Dark  mode</NavLink>
                                <div class="dropdown-divider"></div>
                                <NavLink class="dropdown-item" to="/login">Logout</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header