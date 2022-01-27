import React from 'react';
import * as R from 'react-native';
import * as S from './login.styles';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';
import { IPropsLoginUI } from './login.types';

const LoginUI = (props: IPropsLoginUI) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.LogoImage source={require('../../../../../public/images/signup/mainLogo.png')} />
        <S.SubTitle>가장 좋은 이웃</S.SubTitle>
        <S.Title>굿네이버스</S.Title>
      </S.TitleWrapper>
      <S.BodyWrapper>
        <InputBasic
          width="100%"
          marginBottom="10px"
          placeholder="이메일"
          value={props.email}
          onChange={props.onChangeEmail}
        />
        <InputBasic
          width="100%"
          marginBottom="10px"
          placeholder="비밀번호"
          value={props.password}
          secureTextEntry={true}
          onChange={props.onChangePassword}
        />
        <GreenButton
          text={'로그인'}
          width={'100%'}
          height={'48px'}
          borderRadius={8}
          fontSize={'16px'}
          fontWeight={500}
          onPressBtn={props.onPressLogin}
        />
        <S.Bottom_Wrapper>
          <R.View>
            <S.Search_Email
              onPress={() => props.navigation.navigate('find', { isPassword: false })}
            >
              아이디 찾기
            </S.Search_Email>
          </R.View>
          <R.View>
            <R.Text style={{ color: '#989898', fontSize: 12 }}>|</R.Text>
          </R.View>
          <R.View>
            <S.Search_Password
              onPress={() => props.navigation.navigate('find', { isPassword: true })}
            >
              비밀번호 찾기
            </S.Search_Password>
          </R.View>
        </S.Bottom_Wrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};
export default LoginUI;
