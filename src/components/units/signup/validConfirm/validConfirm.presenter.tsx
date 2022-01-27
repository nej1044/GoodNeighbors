import React from 'react';
import * as S from './validConfirm.styles';
import * as R from 'react-native';
import GreenButton from '../../../commons/buttons/greenbutton';

const ValidConfirmUI = (props) => {
  return (
    <>
      <S.Wrapper>
        {props.route.params.isPassword ? (
          <S.Title>
            <S.BoldTitle>임시 비밀번호</S.BoldTitle>를 보내드렸어요 휴대폰을 확인해 주세요!
          </S.Title>
        ) : (
          <S.Title>입력하신 정보와 일치해요!</S.Title>
        )}
        {props.route.params.isPassword ? (
          <></>
        ) : (
          <S.EmailWrapper>
            <S.EmailIcon source={require('../../../../../public/images/signup/emailIcon.png')} />
            <S.EmailTitle>grace@hotmail.com</S.EmailTitle>
          </S.EmailWrapper>
        )}
        <GreenButton
          text={'로그인하러 가기'}
          width={'100%'}
          height={'48px'}
          borderRadius={8}
          fontSize={'16px'}
          fontWeight={500}
          onPressBtn={() => props.navigation.navigate('login')}
        />
        <S.BottomWrapper>
          <S.BottomTitle onPress={() => props.navigation.navigate('find', { isPassword: false })}>
            아이디 찾기
          </S.BottomTitle>
          <R.Text style={{ marginRight: 8, marginLeft: 8, color: '#989898', fontSize: 12 }}>
            |
          </R.Text>
          <S.BottomTitle onPress={() => props.navigation.navigate('find', { isPassword: true })}>
            비밀번호 찾기
          </S.BottomTitle>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
};

export default ValidConfirmUI;
