import React from 'react';
import { withRouter } from 'react-router-dom';
import { AthleteDetails, AthleteList } from '../dojo-components';

import SplitContainer from '../split-container';

const AthletePage = ({history, match}) => {
    const { id } = match.params;

    return(
        <SplitContainer 
            left={<AthleteList onItemSelected={(id) => history.push(id)} />}
            right={<AthleteDetails itemId={id} />}
        />
    );
};

export default withRouter(AthletePage);