import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDojoService } from '../hoc-helpers';

const TeacherDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (dojoService) => {
  return {
    getData: dojoService.getTeacher,
    getImageUrl: dojoService.getTeacherImage
  };
};

export default withDojoService(mapMethodsToProps)(TeacherDetails);
