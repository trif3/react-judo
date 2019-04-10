import React from 'react';
import ItemDetails , { Record } from '../item-details';
import { withDojoService } from '../hoc-helpers';

const ChampionshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label ="Name" />
            <Record field="name" label ="Name" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (dojoService) => {
    return {
        getDate: dojoService.getChampionship,
        getImageUrl: dojoService.getChampionshipImage
    }
};

export default withDojoService(mapMethodsToProps)(ChampionshipDetails);