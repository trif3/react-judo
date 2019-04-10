import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDojoService } from '../hoc-helpers';

const TeacherDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label ="gender" />
            <Record field="gender" label ="gender" />
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