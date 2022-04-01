import React from 'react';
import ConfirmationUI from './confirmation.presenter';
import { INavigation } from './confirmation.types';
import { withAuth } from '../../../commons/withAuth/withAuth';

const Confirmation = ({ route, navigation }: INavigation) => {
  console.log(route);

  return <ConfirmationUI navigation={navigation} route={route} />;
};
export default withAuth(Confirmation);
