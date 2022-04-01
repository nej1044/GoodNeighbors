import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsConfirmationUI {
  navigation: Props;
  route: SignupListScreenRouteProp;
}

type RootStackParamList = {
  signup: { userName: string };
  mainScreen: undefined;
  login: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'signup'>;

type SignupListScreenRouteProp = RouteProp<RootStackParamList, 'signup'>;

export type INavigation = {
  navigation: Props;
  route: SignupListScreenRouteProp;
};
