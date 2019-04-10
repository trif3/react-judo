import React from 'react';
import ItemDetails from '../item-details';
import { withDojoService } from '../hoc-helpers';

const ChampionshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label ="Name" />
            <Record field="name" label ="Name" />
        </ItemDetails>
    );
};