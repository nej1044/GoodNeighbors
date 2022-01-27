import React from 'react';
import InputBasic from '../../../commons/inputs/basic';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './valid.styles';
import * as R from 'react-native';

const ValidUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.route.params.isPhone ? '본인 명의 휴대폰' : '이메일'} 인증</S.Title>
        <InputBasic height={'48px'} marginBottom={'10px'} value="정이웃" />
        <InputBasic
          height={'48px'}
          value={props.route.params.isPhone ? '010-1234-5678' : 'grace@hotmail.com'}
        />
        <S.Auth>
          <S.AuthInput
            placeholder="인증번호"
            onChange={props.onChangeTempNumber}
            value={props.tempNumber || ''}
          />
          {!props.isAuth ? (
            <GreenButton
              text="인증"
              onPressBtn={props.getAuth}
              width="108px"
              height="48px"
              borderRadius={8}
              fontSize="16px"
              fontWeight={500}
            />
          ) : (
            <GreenButton
              text="인증"
              onPressBtn={props.onPressAuth}
              width="108px"
              height="48px"
              borderRadius={8}
              fontSize="16px"
              fontWeight={500}
            />
          )}
        </S.Auth>
        <S.IntroWrapper onPress={props.onPressVisible}>
          <S.BottomTitle>인증번호가 오지 않나요?</S.BottomTitle>
          <Icon name="help-circle-outline" size={15} color="#989898" style={{ marginLeft: 2 }} />
        </S.IntroWrapper>
        <S.BottomWrapper>
          <S.BottomTitle onPress={() => props.navigation.navigate('login')}>로그인</S.BottomTitle>
          <R.Text style={{ marginRight: 8, marginLeft: 8, color: '#989898', fontSize: 12 }}>
            |
          </R.Text>
          {props.route.params.isPassword ? (
            <S.BottomTitle onPress={() => props.navigation.setParams({ isPassword: false })}>
              아이디 찾기
            </S.BottomTitle>
          ) : (
            <S.BottomTitle onPress={() => props.navigation.setParams({ isPassword: true })}>
              비밀번호 찾기
            </S.BottomTitle>
          )}
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
};

export default ValidUI;
