import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDojoService } from '../hoc-helpers';

const AthleteDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (dojoService) => {
  return {
    getData: dojoService.getAthlete,
    getImageUrl: dojoService.getAthleteImage
  }
};

export default withDojoService(mapMethodsToProps)(AthleteDetails);
