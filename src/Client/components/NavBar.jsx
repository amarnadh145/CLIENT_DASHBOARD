import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="topBarSection">
                <div className="companyTitle">
                    <Link to="/" className='link'>
                        <h2>AMAR</h2>
                    </Link>
                </div>
                <div className="searchBar">
                    <input type='text' placeholder='Search..'></input>
                </div>
                <div className="userAuth">Login/SignUp</div>
            </div>
        </div>
    )
}

export default NavBar
