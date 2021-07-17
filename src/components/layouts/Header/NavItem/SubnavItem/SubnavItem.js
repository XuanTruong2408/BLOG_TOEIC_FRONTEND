import React from 'react';
import { Link } from 'react-router-dom';

const SubnavItem = (props) =>{
    return(
        <li>
            <Link className="dropdown-item " to={props.route}>{props.name}</Link>
        </li>
    )
}
export default SubnavItem;