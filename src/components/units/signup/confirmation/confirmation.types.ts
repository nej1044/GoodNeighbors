import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsConfirmationUI {
  navigation: Props;
}

type RootStackParamList = {
  signup: undefined;
  mainScreen: undefined;
  login: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'signup'>;

export type INavigation = {
  navigation: Props;
};
