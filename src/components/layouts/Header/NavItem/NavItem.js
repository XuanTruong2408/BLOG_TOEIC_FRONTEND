import React from 'react';
import { Link } from 'react-router-dom';
import SubnavItem from './SubnavItem/SubnavItem';

const NavItems = (props) =>{
    console.log(props.subnav === "1");
    if (props.subnav === "1"){
        return(
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.name}
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                    <SubnavItem   route="/courses/2020" name = "Khoá 2020"/>
                    <SubnavItem   route="/courses/2021" name = "Khoá 2021"/>
                    <SubnavItem   route="/courses/2022" name = "khoá 2022"/>
                </ul>
            </li>    
        )
    } else{
        return(
            <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to={props.route}>{props.name}</Link>
            </li>
        )
    }
}

export default NavItems;

