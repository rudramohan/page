import React from "react";
import {Link} from "react-router-dom"
export default function navbar()
{
    return(
        <div className="navbar">
            <div>
            <h1 className="navbarh1">Choose your taste</h1>
            </div>
            <div className="nav">
                <ul class="subnav">
                    <li className="item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="item">
                        <Link to={"/Menu"}>Menu</Link>
                    </li>
                    <li className="item">
                        <Link to={"/About"}>About</Link>
                    </li>
                    <li className="item">
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                </ul>
            {/* <h2>Home</h2>
            <h2>Menu</h2>
            <h2>Contact us</h2> */}
            </div>
        </div>
           
    )
}