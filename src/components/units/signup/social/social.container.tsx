import React, { useContext, useEffect } from 'react';
import SocialUI from './social.presenter';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { IPropsNavigation } from './social.types';
import { useMutation } from '@apollo/client';
import { Mutation, MutationLoginUserArgs } from '../../../../commons/types/generated/types';
import { LOGIN_USER } from './socail.queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../../../../../App';

const Social = ({ navigation }: IPropsNavigation) => {
  const [loginUser] = useMutation<Pick<Mutation, 'loginUser'>, MutationLoginUserArgs>(LOGIN_USER);
  const { setAccessToken }: any = useContext(GlobalContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '872992369963-s4ktu6uj793evslqu84dqnaacevq7ijn.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      const { idToken, accessToken }: any = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken, accessToken);
      if (idToken || accessToken) {
        navigation.navigate('mainScreen');
        Alert.alert('로그인 되셨습니다. 환영합니다!');
      } else {
        navigation.navigate('login');
        Alert.alert('로그인을 해주세요');
      }
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        if (error instanceof Error) console.log(error.message);
      }
    }
  }

  const onPressLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: 'grace@hotmail.com',
          password: '1234',
        },
      });
      AsyncStorage.setItem('isLoggedIn', 'true');
      AsyncStorage.setItem('refreshToken', result.data?.loginUser.accessToken || '');
      console.log(result.data?.loginUser.accessToken);
      setAccessToken?.(result.data?.loginUser.accessToken || '');
      navigation.navigate('mainScreen');
    } catch (error) {
      if (error instanceof Error) console.log('LoginError:', error.message);
    }
  };

  return (
    <SocialUI
      navigation={navigation}
      onGoogleButtonPress={onGoogleButtonPress}
      onPressLogin={onPressLogin}
    />
  );
};
export default Social;
