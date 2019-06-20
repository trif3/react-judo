import React from 'react';
import { FaRegClone } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Compare = ({numItems, total}) => {
    return(
        <div>
            <Link to="/">
                <div className="compareIco textd-dark" href="#"><FaRegClone /> c </div>
            </Link>
            <Link to="/compare">
                <div>
                    <i className="cart-icon"/>
                    {numItems} dojo(s) in{total}
                </div>
            </Link>
        </div>
    );
};

export default Compare;