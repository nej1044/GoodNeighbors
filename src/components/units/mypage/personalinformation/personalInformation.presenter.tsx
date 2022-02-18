import * as C from './personalInformation.styles';
import * as R from 'react-native';
import * as React from 'react';
import { IPropsPersonalinformationUI } from './personalinformation.types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GreenButton from '../../../commons/buttons/greenbutton';
import WhiteButton from '../../../commons/buttons/whitebutton';

const Tab = createMaterialTopTabNavigator();

function PIScreen(props) {
  return (
    <>
      <C.TabInnerWrapper>
        <C.ContentWrap>
          <C.PITitle>
            <C.PITitleText>나의 활동 내역</C.PITitleText>
          </C.PITitle>
          <C.Content>
            <R.Text onPress={() => props.navigation.navigate('mypage', { screen: 'post' })}>
              커뮤니티 글 목록
            </R.Text>
          </C.Content>
          <C.Content>
            <R.Text>후원이력</R.Text>
          </C.Content>
          <C.Content>
            <R.Text>관심 카테고리 설정</R.Text>
          </C.Content>
        </C.ContentWrap>
        <C.ContentWrap>
          <C.PITitle>
            <C.PITitleText>About 굿네이버스</C.PITitleText>
          </C.PITitle>
          <C.Content>
            <R.Text>회사소개</R.Text>
          </C.Content>
          <C.Content>
            <R.Text onPress={() => props.navigation.navigate('mypage', { screen: 'notice' })}>
              공지사항
            </R.Text>
          </C.Content>
        </C.ContentWrap>
        <C.Footer>
          <C.FooterText>02-6717-4000</C.FooterText>
          <R.Text>WWW.Goodneighbors.Kr</R.Text>
          <R.Text>AM 10:00~PM 17:00 (점심시간 12:00~14:00)</R.Text>
        </C.Footer>
        <C.ButtonWrapper>
          <R.View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <GreenButton text="자주 묻는 질문" width="160px" height="34px" borderRadius={8} />
            <GreenButton text="1:1문의" width="160px" height="34px" borderRadius={8} />
          </R.View>
          <WhiteButton
            text="로그아웃"
            borderRadius={8}
            height="48px"
            fontSize="16px"
            onPressBtn={() => props.navigation.navigate('login')}
          />
        </C.ButtonWrapper>
      </C.TabInnerWrapper>
    </>
  );
}

function StampScreen(props) {
  return (
    <>
      <R.ScrollView style={{ width: '100%' }}>
        <R.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <R.Text>123</R.Text>
        </R.View>
      </R.ScrollView>
    </>
  );
}

const PersonalInformationUI = (props: IPropsPersonalinformationUI) => {
  return (
    <C.WholeWrapper>
      <C.ProfileWrapper>
        <C.ProfileEditWrap>
          <C.ProfileImg>
            <C.ProfileIcon source={require('../../../../../public/images/mypage/profile.png')} />
          </C.ProfileImg>
          <C.EditImg onPress={() => props.navigation.navigate('mypage', { screen: 'editprofile' })}>
            <C.EditIcon source={require('../../../../../public/images/mypage/pencil.png')} />
          </C.EditImg>
        </C.ProfileEditWrap>
        <C.Name>{props.data?.fetchUserLoggedIn.name || '김이웃'}</C.Name>
      </C.ProfileWrapper>
      <C.TabWrapper>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { borderBottomColor: '#f0f0f0', borderBottomWidth: 1 },
            tabBarLabelStyle: { fontSize: 14, fontWeight: '500' },
            tabBarActiveTintColor: '#448800',
            tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
            tabBarIndicatorStyle: { width: 120, marginLeft: 35, backgroundColor: '#448800' },
          }}
        >
          <Tab.Screen
            name="개인정보확인/변경"
            children={() => <PIScreen navigation={props.navigation} />}
          />
          <Tab.Screen name="스탬프" children={() => <StampScreen data={props.data} />} />
        </Tab.Navigator>
      </C.TabWrapper>
    </C.WholeWrapper>
  );
};

export default PersonalInformationUI;
