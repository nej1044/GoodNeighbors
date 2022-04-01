import React from 'react';
import * as R from 'react-native';
import styled from '@emotion/native';
import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  signup: { userName: string; isPassword: boolean };
  mainScreen: undefined;
  login: undefined;
  valid: { isPassword: boolean; isPhone: boolean };
};

type INavigationProps = NativeStackNavigationProp<RootStackParamList, 'signup'>;

type IRouteProps = RouteProp<RootStackParamList, 'signup'>;

interface IFindProps {
  navigation: INavigationProps;
  route: IRouteProps;
}

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 215px 23px 0px 23px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  margin-bottom: 30px;
  color: #1e2002;
  font-size: 22px;
  font-weight: 700;
`;

const Button = styled.Pressable`
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
`;

const BtnTitle = styled.Text`
  color: #1e2022;
  font-size: 16px;
  font-weight: 500;
`;

const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #989898;
`;

export const BottomTitle = styled.Text`
  color: #989898;
  font-size: 12px;
`;

const Find = ({ navigation, route }: IFindProps) => {
  return (
    <>
      <Wrapper>
        <Title>{route.params.isPassword ? '비밀번호' : '아이디'} 찾기</Title>
        <Button>
          <BtnTitle
            onPress={() =>
              navigation.navigate('valid', {
                isPassword: route.params.isPassword,
                isPhone: false,
              })
            }
          >
            이메일로 찾기
          </BtnTitle>
        </Button>
        <Button>
          <BtnTitle
            onPress={() =>
              navigation.navigate('valid', {
                isPassword: route.params.isPassword,
                isPhone: true,
              })
            }
          >
            본인 명의 휴대폰으로 찾기
          </BtnTitle>
        </Button>
        <BottomWrapper>
          <BottomTitle onPress={() => navigation.navigate('login')}>로그인</BottomTitle>
          <R.Text style={{ marginRight: 8, marginLeft: 8, color: '#989898', fontSize: 12 }}>
            |
          </R.Text>
          {route.params.isPassword ? (
            <BottomTitle onPress={() => navigation.setParams({ isPassword: false })}>
              아이디 찾기
            </BottomTitle>
          ) : (
            <BottomTitle onPress={() => navigation.setParams({ isPassword: true })}>
              비밀번호 찾기
            </BottomTitle>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default Find;
