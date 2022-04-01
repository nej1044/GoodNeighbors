/* eslint-disable no-unused-vars */
import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  login: undefined;
  confirmation: { isPassword?: boolean; isPhone?: boolean };
  mainScreen: undefined;
  find: { isPassword: boolean };
  validConfirm: { isPassword?: boolean; isPhone?: boolean };
};

type INavigationProps = NativeStackNavigationProp<RootStackParamList, 'confirmation'>;

type IRouteProps = RouteProp<RootStackParamList, 'confirmation'>;

export type IPropsValidConfirm = {
  route: IRouteProps;
  navigation: INavigationProps;
};

export interface IValidConfirmProps {
  navigation: INavigationProps;
  route: IRouteProps;
}
