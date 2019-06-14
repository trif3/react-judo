import React from 'react';
import { FaHome, FaMedal } from 'react-icons/fa';

import './dojo.css'

const Dojo = ( {dojo} ) => {
    const {id, name, details, brandImage, address } = dojo;
    var dojoIco = <FaHome />
    if(id%2 === 0){
        dojoIco = <FaMedal />
    }
    console.log(brandImage)
    return (
        <div className="club-dojo">
            <div className="brand-image">
                <img src={brandImage} alt="brand" />
            </div>
            <div className="club-dojo-details">
                <a href="#">{id}. {dojoIco} </a>
                <a href="#" className="dojo-name">{name}</a>
                <div className="dojo-details">{details}</div>
                <div className="dojo-address">{address}</div>
                <button className="btn btn-info go-to-dojo">Go to Dojo</button>
            </div>
        </div>
    )
}

export default Dojo;