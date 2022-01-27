import React from 'react';
import ValidConfirmUI from './validConfirm.presenter';

const ValidConfirm = ({ route, navigation }) => {
  console.log(route);
  return <ValidConfirmUI navigation={navigation} route={route} />;
};

export default ValidConfirm;
