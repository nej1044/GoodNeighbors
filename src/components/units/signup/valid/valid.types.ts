/* eslint-disable no-unused-vars */
import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type RootStackParamList = {
  login: undefined;
  confirmation: { isPassword?: boolean; isPhone?: boolean };
  mainScreen: undefined;
  find: { isPassword: boolean };
  validConfirm: { isPassword?: boolean; isPhone?: boolean };
};

type INavigationProps = NativeStackNavigationProp<RootStackParamList, 'confirmation'>;

type IRouteProps = RouteProp<RootStackParamList, 'confirmation'>;

export type IPropsValid = {
  route: IRouteProps;
  navigation: INavigationProps;
};

export interface IValidProps {
  onChangeTempNumber: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  getAuth: () => void;
  onPressAuth: () => void;
  tempNumber: string;
  isAuth: boolean;
  navigation: INavigationProps;
  route: IRouteProps;
  isPopup: boolean;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}
