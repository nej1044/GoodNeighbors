/* eslint-disable no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Mutation } from '../../../../commons/types/generated/types';

type RootStackParamList = {
  confirmation: { userName: string };
};

type Props = NativeStackNavigationProp<RootStackParamList, 'confirmation'>;

export type IPropsNavigation = {
  navigation: Props;
  createUser?: Pick<Mutation, 'createUser'>;
  emailConfirm: string;
  authNumber: string;
};

export interface IPropsRegisterUI {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  tempNumber: string;
  emailError: boolean;
  passwordError: boolean;
  passwordConfirmError: boolean;
  nameError: boolean;
  isAuth: boolean;
  onChangeEmail: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangePassword: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeName: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangePassConfirm: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeEmailConfirm: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeTempNumber: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPressAuth: () => void;
  onPressSubmit: () => void;
}
