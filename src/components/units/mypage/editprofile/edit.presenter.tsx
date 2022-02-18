import * as E from './edit.styles';
import React from 'react';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBasic from '../../../commons/inputs/basic';
import { IPropsEditUI } from './edit.types';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const EditUI = (props: IPropsEditUI) => {
  return (
    <E.WholeWrapper>
      <E.ProfileWrapper>
        <E.ProfileEditWrap>
          <E.ProfileImg>
            <E.ProfileIcon source={require('../../../../../public/images/mypage/profile.png')} />
          </E.ProfileImg>
          <E.EditImg>
            <Icon name="add-outline" color=" #898989" />
          </E.EditImg>
        </E.ProfileEditWrap>
        <E.Name>{props.data?.fetchUserLoggedIn.name || '김이웃'}</E.Name>
      </E.ProfileWrapper>
      <E.InputWrapper>
        <View>
          <E.InputTitle>닉네임</E.InputTitle>
          <InputBasic height="50px" onChange={props.onChangeName} value={props.name} />
        </View>
        <View>
          <E.InputTitle>이메일</E.InputTitle>
          <InputBasic />
        </View>
        <View>
          <E.InputTitle>생년월일</E.InputTitle>
          <InputBasic />
        </View>
        <View>
          <E.InputTitle>성별</E.InputTitle>
          <InputBasic />
        </View>
        <View>
          <E.InputTitle>휴대전화</E.InputTitle>
          <InputBasic />
        </View>
        {/* <View>
          <E.InputCommon>비밀번호</E.InputCommon>
          <InputBasic height="50px" onChange={props.onChangePassword} value={props.password} />
        </View> */}
      </E.InputWrapper>
      <E.ButtonWrapper>
        <GreenButton width="100%" height="52px" fontSize="16px" fontWeight={500} text="수정완료" onPressBtn={props.onClickUpdate} />
      </E.ButtonWrapper>
    </E.WholeWrapper>
  );
};

export default EditUI;
