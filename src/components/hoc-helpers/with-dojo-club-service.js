import React from 'react';
import { DojoServiceConsumer } from '../dojo-service-context';

const withDojoClubService = () => (Wrapped) => {
    return(props) => {
        return(
            <DojoServiceConsumer>
                {
                    (dojoClubService) => {
                        return (
                            <Wrapped {...props} dojoClubService={dojoClubService} />
                        )
                    }
                }
            </DojoServiceConsumer>
        );
    }
}

export default withDojoClubService;