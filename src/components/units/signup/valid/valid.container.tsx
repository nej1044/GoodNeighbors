import React, { useState } from 'react';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import ValidUI from './valid.presenter';
import { IPropsValid } from './valid.types';

const Vaild = ({ route, navigation }: IPropsValid) => {
  const [isAuth, setIsAuth] = useState(false);
  const [tempNumber, setTempNumber] = useState<string>('');
  const [, setAuthNumber] = useState<string>('');
  const [isPopup, setIsPopup] = useState(false);

  const onChangeTempNumber = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setAuthNumber(event.nativeEvent.text);
  };

  const getAuth = () => {
    const temp = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    setTempNumber(temp);
    Alert.alert('인증 버튼을 눌러 인증을 완료해주세요');
    setIsAuth(true);
  };

  const onPressAuth = () => {
    navigation.navigate('validConfirm', { isPassword: route.params.isPassword });
  };

  return (
    <ValidUI
      onChangeTempNumber={onChangeTempNumber}
      getAuth={getAuth}
      onPressAuth={onPressAuth}
      tempNumber={tempNumber}
      isAuth={isAuth}
      route={route}
      navigation={navigation}
      isPopup={isPopup}
      setIsPopup={setIsPopup}
    />
  );
};

export default Vaild;
