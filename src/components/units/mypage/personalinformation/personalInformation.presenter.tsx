import * as C from './personalInformation.styles';
import * as R from 'react-native';
import * as React from 'react';
import { IPropsPersonalinformationUI } from './personalinformation.types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GreenButton from '../../../commons/buttons/greenbutton';
import WhiteButton from '../../../commons/buttons/whitebutton';
import { Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import GreenTag from '../../../commons/tags/greentag';
import WhiteTag from '../../../commons/tags/whitetag';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

function PIScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const hashArr = [
    '정기후원',
    '단체후원',
    '소액후원',
    '기부',
    '캠페인',
    '챌린지',
    '1:1후원',
    '국내주거위기아동후원',
    '국내위기가정후원',
    '해외아동결연',
    '자원봉사',
    '재능기부',
  ];
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
            <R.Text onPress={() => setModalVisible(true)}>관심 카테고리 설정</R.Text>
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
          <R.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
      <R.Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          R.Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <C.ModalWrap>
          <C.ModalHash>
            <C.Close onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={20} />
            </C.Close>
            <R.View>
              <C.ModalHeader>
                <C.ModalTitle>
                  <R.Text style={{ fontWeight: 'bold' }}>관심있는해시태그</R.Text>를 설정해보세요!
                </C.ModalTitle>
                <C.ModalSubtitle>
                  선택한 해시태그의 후원이 추천되고, 알림을 받을 수 있어요.
                </C.ModalSubtitle>
              </C.ModalHeader>
              <C.ModalBody>
                <C.ModalTagWrap>
                  {hashArr.map((el, idx) =>
                    props.userHash.includes(el) ? (
                      <GreenTag key={idx} text={el} onPress={props.setHash(el)} />
                    ) : (
                      <WhiteTag key={idx} text={el} onPress={props.setHash(el)} />
                    ),
                  )}
                </C.ModalTagWrap>
                <C.SubmitBtn onPress={() => setModalVisible(!modalVisible)}>
                  <C.SubmitText>확인</C.SubmitText>
                </C.SubmitBtn>
              </C.ModalBody>
            </R.View>
          </C.ModalHash>
        </C.ModalWrap>
      </R.Modal>
    </>
  );
}

function StampScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const curPrice = 80000;
  const price = 100000;
  const stampArr = [
    {
      name: '새로운 가족',
      url: require('../../../../../public/images/stamp/newfamily.png'),
      infoTitle: '첫 기부',
      info: '첫 기부는 따뜻한 기부 문화를 만드는 첫걸음이에요.',
      hash: ['첫 기부', '환영해요'],
    },
    {
      name: '따뜻한 첫걸음',
      url: require('../../../../../public/images/stamp/step.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '가치 여행의 시작',
      url: require('../../../../../public/images/stamp/start.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '특별한 소통',
      url: require('../../../../../public/images/stamp/letter.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '취향 존중',
      url: require('../../../../../public/images/stamp/child.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '따뜻한 가족',
      url: require('../../../../../public/images/stamp/lock.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '따뜻한 마음가짐',
      url: require('../../../../../public/images/stamp/lock.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '나누는 기쁨',
      url: require('../../../../../public/images/stamp/lock.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
    {
      name: '소통하는 기쁨',
      url: require('../../../../../public/images/stamp/lock.png'),
      infoTitle: '',
      info: '',
      hash: [],
    },
  ];
  return (
    <>
      <C.Wrapper>
        <C.ProgressWrapper>
          <C.InnerTitle>나의 현황</C.InnerTitle>
          <C.LevelWrapper>
            <R.Text>다음 등급까지</R.Text>
            <C.Percent>80%</C.Percent>
          </C.LevelWrapper>
          <ProgressBar progress={curPrice / price} color="green" />
          <C.PercentText>
            {curPrice.toLocaleString()}/{price.toLocaleString()}
          </C.PercentText>
        </C.ProgressWrapper>
        <C.StampList>
          <C.InnerTitle>나의 스탬프</C.InnerTitle>
          <C.StampListWrapper>
            {stampArr.map((el, idx) => (
              <>
                <C.ListWrapper key={idx} onPress={() => setModalVisible(true)}>
                  <Image source={el.url} />
                  <C.StampName>{el.name}</C.StampName>
                </C.ListWrapper>
                {/* <R.Modal
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    R.Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}
                >
                  <StampModal
                    el={el}
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                  />
                </R.Modal> */}
              </>
            ))}
          </C.StampListWrapper>
        </C.StampList>
      </C.Wrapper>
    </>
  );
}

// const StampModal = (props) => {
//   console.log(props.el);
//   return (
//     <C.ModalWrap>
//       <C.ModalBody>
//         <C.Close onPress={() => props.setModalVisible(!props.modalVisible)}>
//           <Icon name="close" size={20} color="rgba(0,0,0,0.4)" />
//         </C.Close>
//         <R.View>
//           <R.Image source={props.el.url} />
//           <R.View>
//             <R.Text>{props.el.infoTitle}</R.Text>
//             <R.Text>{props.el.info}</R.Text>
//           </R.View>
//           <R.View>
//             {props.el.hash.map((el, idx) => (
//               <R.Text>{el}</R.Text>
//             ))}
//           </R.View>
//         </R.View>
//       </C.ModalBody>
//     </C.ModalWrap>
//   );
// };

const PersonalInformationUI = (props: IPropsPersonalinformationUI) => {
  const [isStamp, setIsStamp] = React.useState(false);
  return (
    <C.WholeWrapper>
      {isStamp ? (
        <C.ProfileWrapper>
          <R.Image source={require('../../../../../public/images/mypage/silver.png')} />
          <C.Name>
            실버 <R.Text style={{ fontWeight: '400' }}>등급</R.Text>
          </C.Name>
        </C.ProfileWrapper>
      ) : (
        <C.ProfileWrapper>
          <C.ProfileEditWrap>
            <C.ProfileImg>
              <C.ProfileIcon source={require('../../../../../public/images/mypage/profile.png')} />
            </C.ProfileImg>
            <C.EditImg
              onPress={() => props.navigation.navigate('mypage', { screen: 'editprofile' })}
            >
              <C.EditIcon source={require('../../../../../public/images/mypage/pencil.png')} />
            </C.EditImg>
          </C.ProfileEditWrap>
          <C.Name>{props.data?.fetchUserLoggedIn.name || '김이웃'}</C.Name>
        </C.ProfileWrapper>
      )}

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
            listeners={{
              tabPress: (event) => {
                event.preventDefault();
                setIsStamp(false);
                props.navigation.navigate('개인정보확인/변경');
              },
            }}
            children={() => (
              <PIScreen
                navigation={props.navigation}
                userHash={props.userHash}
                setHash={props.setHash}
              />
            )}
          />
          <Tab.Screen
            name="스탬프"
            listeners={{
              tabPress: (event) => {
                event.preventDefault();
                setIsStamp(true);
                props.navigation.navigate('스탬프');
              },
            }}
            children={() => <StampScreen data={props.data} />}
          />
        </Tab.Navigator>
      </C.TabWrapper>
    </C.WholeWrapper>
  );
};

export default PersonalInformationUI;
