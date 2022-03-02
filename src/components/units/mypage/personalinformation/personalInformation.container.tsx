import PersonalInformationUI from './personalInformation.presenter';
import React, { useState } from 'react';
import { IPropsPersonalinformation } from './personalinformation.types';
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from './personalinformation.queries';
import { useQuery, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalInformation = ({ navigation, route }: IPropsPersonalinformation) => {
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userHash, setUserhash] = useState(['캠페인']);

  const onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem('refreshToken');
      const result = await logoutUser;
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const setHash = (el: string) => () => {
    if (userHash.includes(el)) {
      userHash.splice(userHash.indexOf(el), 1);
      setUserhash([...userHash]);
    } else {
      setUserhash([...userHash, el]);
    }
  };


  return (
    <PersonalInformationUI
      navigation={navigation}
      data={data}
      onPressLogout={onPressLogout}
      route={route}
      userHash={userHash}
      setHash={setHash}
    />
  );
};

export default PersonalInformation;
