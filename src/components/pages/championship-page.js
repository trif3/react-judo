import React from 'react';
import { ChampionshipList } from '../dojo-components';
import { withRouter } from 'react-router-dom';

const ChampionshipsPage = ({ history }) => {
    return (
        <ChampionshipList onItemSelected={ (id) => history.push(id) } />
    );
};

export default withRouter(ChampionshipsPage);