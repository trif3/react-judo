import React from 'react';
import { FaHome, FaMedal } from 'react-icons/fa';

import './dojo.css'

const Dojo = ( {dojo, onAddedToCompare} ) => {
    const {id, name, details, brandImage, address } = dojo;
    var dojoIco = <FaHome />
    if(id%2 === 0){
        dojoIco = <FaMedal />
    }
    return (
        <div className="club-dojo">
            <div className="brand-image">
                <img src={brandImage} alt="brand" />
            </div>
            <div className="club-dojo-details">
                <span >{id}. {dojoIco} </span>
                <span className="dojo-name">{name}</span>
                <div className="dojo-details">{details}</div>
                <div className="dojo-address">{address}</div>
                <button
                    onClick={onAddedToCompare} 
                    className="btn btn-info go-to-dojo">
                    Go to Dojo
                </button>
            </div>
        </div>
    )
}

export default Dojo;