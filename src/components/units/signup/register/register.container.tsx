import React, { useState } from 'react';
import RegisterUI from './register.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './register.query';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IPropsNavigation } from './register.types';
import { Mutation, MutationCreateUserArgs } from '../../../../commons/types/generated/types';

const Register = ({ navigation }: IPropsNavigation) => {
  const [createUser] = useMutation<Pick<Mutation, 'createUser'>, MutationCreateUserArgs>(
    CREATE_USER,
  );

  const [email, setEmail] = useState<string>('');
  const [emailConfirm, setEmailConfirm] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [tempNumber, setTempNumber] = useState<string>('');
  const [, setAuthNumber] = useState<string>('');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);

  const [isAuth, setIsAuth] = useState(false);

  const onChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setEmailError(false);
    }
  };

  const onChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setPasswordError(false);
    }
  };

  const onChangeName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setName(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setNameError(false);
    }
  };

  const onChangePassConfirm = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPasswordConfirm(event.nativeEvent.text);
  };

  const onChangeEmailConfirm = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmailConfirm(event.nativeEvent.text);
  };

  const onChangeTempNumber = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setAuthNumber(event.nativeEvent.text);
  };

  const onPressAuth = () => {
    if (email === emailConfirm) {
      const temp = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
      setTempNumber(temp);
      Alert.alert('인증번호을 입력해주세요');
    } else {
      Alert.alert('이메일이 동일하지않습니다');
    }
    setIsAuth(true);
  };

  const onPressSubmit = async () => {
    if (!/\w+@\w+\.\w+/.test(email) || email.length <= 2) {
      setEmailError(true);
      return;
    }

    if (!password || password.length <= 2) {
      setPasswordError(true);
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      return;
    } else if (password === passwordConfirm) {
      setPasswordConfirmError(false);
    }

    if (!name || name.length <= 1) {
      setNameError(true);
      return;
    }

    // if (authNumber !== tempNumber) {
    //   Alert.alert('인증번호가 다릅니다');
    //   return;
    // }

    if (email && password && name && passwordConfirm && tempNumber) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });
        console.log(result);
        navigation.navigate('confirmation', { userName: result.data?.createUser.name });
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  return (
    <RegisterUI
      onPressSubmit={onPressSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onChangePassConfirm={onChangePassConfirm}
      onChangeEmailConfirm={onChangeEmailConfirm}
      onPressAuth={onPressAuth}
      onChangeTempNumber={onChangeTempNumber}
      email={email}
      password={password}
      name={name}
      emailError={emailError}
      passwordError={passwordError}
      passwordConfirm={passwordConfirm}
      nameError={nameError}
      passwordConfirmError={passwordConfirmError}
      isAuth={isAuth}
      tempNumber={tempNumber}
    />
  );
};
export default Register;
