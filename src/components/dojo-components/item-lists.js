import React from 'react';
import ItemList from '../item-list';
import { withData, withDojoService, withChildFunction, compose } from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>;

const mapAthleteMethodsToProps = (dojoService) => {
    return {
        getData: dojoService.getAllAthletes
    };
};

const mapTeacherMethodToProps = (dojoService) => {
    return {
        getData: dojoService.getAllTeachers
    };
};

const mapChampionshipMethodToProps = (dojoService) => {
    return {
        getData: dojoService.getAllChampionships
    };
};

const AthleteList = compose(
                        withDojoService(mapAthleteMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const TeacherList = compose(
                        withDojoService(mapTeacherMethodToProps),
                        withData,
                        withChildFunction(renderName)                 
                    )(ItemList)

const ChampionshipList = compose(
                        withDojoService(mapChampionshipMethodToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);
                    
export {
    AthleteList,
    TeacherList,
    ChampionshipList
};