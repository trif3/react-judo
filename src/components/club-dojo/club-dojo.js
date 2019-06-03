import React from 'react';
import './club-dojo.css'

const ClubDojo = ( {dojo} ) => {
    const {id, name, details, brandImage } = dojo;
    console.log(brandImage)
    return (
        <div className="club-dojo">
            <div className="brand-image">
                <img src={brandImage} alt="brand" />
            </div>
            <div className="club-dojo-details">
                <a href="#">{id}. </a>
                <a href="#" className="dojo-name">{name}</a>
                <div className="dojo-details">{details}</div>
            </div>
        </div>
    )
}

export default ClubDojo;