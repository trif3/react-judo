import React from 'react';
import { DojoServiceConsumer } from '../dojo-service-context';

const withDojoService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <DojoServiceConsumer>
        {
          (dojoService) => {
            const serviceProps = mapMethodsToProps(dojoService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </DojoServiceConsumer>
    );
  }
};

export default withDojoService;