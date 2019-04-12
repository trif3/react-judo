import React from 'react';
import ItemList from '../item-list';
import {
  withData,
  withDojoService,
  withChildFunction,
  compose } from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapAthleteMethodsToProps = (dojoService) => {
  return {
    getData: dojoService.getAllAthletes
  };
};

const mapTeacherMethodsToProps = (dojoService) => {
  return {
    getData: dojoService.getAllTeachers
  };
};

const mapChampionshipMethodsToProps = (dojoService) => {
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
                     withDojoService(mapTeacherMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const ChampionshipList = compose(
                       withDojoService(mapChampionshipMethodsToProps),
                       withData,
                       withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  AthleteList,
  TeacherList,
  ChampionshipList
};
