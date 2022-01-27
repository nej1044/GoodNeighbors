import React from 'react';
import * as R from 'react-native';
import * as S from './register.style';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';
import { IPropsRegisterUI } from './register.types';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterUI = (props: IPropsRegisterUI) => {
  return (
    <>
      <S.Wrapper>
        <S.ProfileWrap>
          <R.Image source={require('../../../../../public/images/signup/profileIcon.png')} />
          <S.CameraWrap>
            <R.Image source={require('../../../../../public/images/signup/cameraIcon.png')} />
          </S.CameraWrap>
        </S.ProfileWrap>
        <S.Email_Wrapper>
          <S.TitleWrap>
            <S.Title>이메일</S.Title>
            {props.emailError && <Icon name="alert-circle-outline" size={12} color="#FF9F9F" />}
          </S.TitleWrap>
          <InputBasic height={'48px'} onChange={props.onChangeEmail} value={props.email} />
        </S.Email_Wrapper>
        <S.Password_Wrapper>
          <S.TitleWrap>
            <S.Title>비밀번호</S.Title>
            {props.passwordError && <Icon name="alert-circle-outline" size={12} color="#FF9F9F" />}
          </S.TitleWrap>
          <InputBasic
            height={'48px'}
            onChange={props.onChangePassword}
            value={props.password}
            secureTextEntry={true}
          />
        </S.Password_Wrapper>
        <S.PasswordConfirm_Wrapper>
          <S.TitleWrap>
            <S.Title>비밀번호 재확인</S.Title>
            {props.passwordConfirmError && (
              <Icon name="alert-circle-outline" size={12} color="#FF9F9F" />
            )}
          </S.TitleWrap>
          <InputBasic height={'48px'} onChange={props.onChangePassConfirm} secureTextEntry={true} />
        </S.PasswordConfirm_Wrapper>
        <S.Name_Wrapper>
          <S.TitleWrap>
            <S.Title>닉네임</S.Title>
            {props.nameError && <Icon name="alert-circle-outline" size={12} color="#FF9F9F" />}
          </S.TitleWrap>
          <InputBasic height={'48px'} onChange={props.onChangeName} value={props.name} />
        </S.Name_Wrapper>
        <S.Email_Auth>
          <S.TitleWrap>
            <S.Title>이메일 인증</S.Title>
          </S.TitleWrap>
          <InputBasic height={'48px'} onChange={props.onChangeEmailConfirm} />
          <S.Auth>
            <S.AuthInput
              placeholder="인증번호"
              onChange={props.onChangeTempNumber}
              value={props.tempNumber || ''}
            />
            {!props.isAuth ? (
              <GreenButton
                text="인증"
                onPressBtn={props.onPressAuth}
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
        </S.Email_Auth>
      </S.Wrapper>
      <GreenButton
        text="회원가입"
        width="100%"
        height="50px"
        fontSize="16px"
        fontWeight={500}
        onPressBtn={props.onPressSubmit}
      />
    </>
  );
};
export default RegisterUI;
