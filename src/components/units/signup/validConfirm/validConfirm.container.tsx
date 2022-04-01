import React from 'react';
import ValidConfirmUI from './validConfirm.presenter';
import { IPropsValidConfirm } from './validConfirm.types';

const ValidConfirm = ({ route, navigation }: IPropsValidConfirm) => {
  console.log(route);
  return <ValidConfirmUI navigation={navigation} route={route} />;
};

export default ValidConfirm;
