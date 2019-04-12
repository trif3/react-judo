import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDojoService } from '../hoc-helpers';

const ChampionshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (dojoService) => {
  return {
    getData: dojoService.getChampionship,
    getImageUrl: dojoService.getChampionshipImage
  }
};

export default withDojoService(mapMethodsToProps)(ChampionshipDetails);
