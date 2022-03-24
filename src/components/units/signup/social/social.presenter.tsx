import React from 'react';
import * as R from 'react-native';
import * as S from './social.styles';
import { IPropsSocialUI } from './social.types';

const SocialUI = (props: IPropsSocialUI) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.LogoImage source={require('../../../../../public/images/signup/mainLogo.png')} />
        <S.SubTtitle>세상을 위한 좋은 변화</S.SubTtitle>
        <S.Title>굿네이버스</S.Title>
      </S.TitleWrapper>
      <S.BodyWrapper>
        <S.SocialBtn onPress={props.onPressLogin}>
          <S.SocialLogo source={require('../../../../../public/images/signup/naverLogo.jpg')} />
          <S.SocialTitle>네이버로 시작하기</S.SocialTitle>
        </S.SocialBtn>
        <S.SocialBtn onPress={props.onPressLogin}>
          <S.SocialLogo source={require('../../../../../public/images/signup/kakaoLogo.jpg')} />
          <S.SocialTitle>카카오로 시작하기</S.SocialTitle>
        </S.SocialBtn>
        <S.SocialBtn onPress={props.onGoogleButtonPress}>
          <S.SocialLogo source={require('../../../../../public/images/signup/googleLogo.jpg')} />
          <S.SocialTitle>구글로 시작하기</S.SocialTitle>
        </S.SocialBtn>
        {/* <S.SocialBtn onPress={() => props.navigation.navigate('firebaselogin')}> */}
        <S.SocialBtn onPress={() => props.navigation.navigate('register')}>
          <S.SocialIcon source={require('../../../../../public/images/signup/emailIcon.png')} />
          <S.SocialTitle>이메일로 시작하기</S.SocialTitle>
        </S.SocialBtn>
        <S.Bottom_Wrapper>
          <S.Login onPress={() => props.navigation.navigate('login')}>로그인</S.Login>
          <R.Text style={{ color: '#989898', fontSize: 12 }}>|</R.Text>
          <S.Register onPress={() => props.navigation.navigate('find', { isPassword: false })}>
            아이디 찾기
          </S.Register>
        </S.Bottom_Wrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};
export default SocialUI;
