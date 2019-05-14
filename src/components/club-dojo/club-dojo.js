import React, { Fragment } from 'react';
import './club-dojo.css'

const ClubDojo = ( {dojo} ) => {
    const {name, details } = dojo;
    return (
        <Fragment>
            <span>{name}</span>
            <span>{details}</span>
        </Fragment>
    )
}

export default ClubDojo;