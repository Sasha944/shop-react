import React from "react";
import {NavLink} from "react-router-dom";
import {routes} from "../../routes";
import Logo from "../../image/logo.png";

const Navigation = () => (
    <>
    <nav className="user_nav">
        <ul className="navigation">
            <li>
                <NavLink to= { routes.home } > <img className="logo-img" src={Logo} alt=""/> </NavLink>
            </li>
        </ul>
    </nav>
        </>
);

export default Navigation;