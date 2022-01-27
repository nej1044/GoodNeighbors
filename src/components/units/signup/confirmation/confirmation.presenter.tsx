import React from 'react';
import * as R from 'react-native';
import * as S from './confirmation.styles';
import GreenButton from '../../../commons/buttons/greenbutton/index';
import { IPropsConfirmationUI } from './confirmation.types';

const ConfirmationUI = (props: IPropsConfirmationUI) => {
  return (
    <>
      <S.Wrapper>
        <S.ProfileWrap>
          <R.Image source={require('../../../../../public/images/signup/profileIcon.png')} />
          <S.CameraWrap>
            <R.Image source={require('../../../../../public/images/signup/cameraIcon.png')} />
          </S.CameraWrap>
        </S.ProfileWrap>
        <S.WelcomeLetter>축하합니다!</S.WelcomeLetter>
        <S.WelcomeLetter>
          <S.User>{props.route?.params.userName}</S.User>님의 계정이
        </S.WelcomeLetter>
        <S.WelcomeLetter>생성되었어요!</S.WelcomeLetter>
      </S.Wrapper>
      <GreenButton
        text="완료"
        width="100%"
        fontSize="16px"
        fontWeight={500}
        height="52px"
        onPressBtn={() => props.navigation.navigate('login')}
      />
    </>
  );
};
export default ConfirmationUI;
