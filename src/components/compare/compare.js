import React from 'react';
import { FaRegClone } from 'react-icons/fa';


const Compare = ({numItems, total}) => {
    return(
        <div>
            <a className="compareIco textd-dark" href="#"><FaRegClone /> c </a>
            <a>
                <i className="cart-icon"/>
                {numItems} dojo(s) in{total}
            </a>
            <a>
            <i class="fas fa-compress-arrows-alt"></i>
            </a>

        </div>
    );
};

export default Compare;