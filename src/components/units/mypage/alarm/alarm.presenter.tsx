import React, { useState } from 'react';
import * as R from 'react-native';
import * as S from './alarm.styles';

const AlarmUIItem = () => {
  const [read, setRead] = useState(false);

  const onPressRead = () => {
    setRead(true);
  };
  return (
    <S.Wrapper onPress={onPressRead} status={read}>
      <S.ProfileImg source={require('../../../../../public/images/mypage/alarmProfile.png')} />
      <S.ContentWrap>
        <S.ContentText>
          "저와 함께 여행중인 데르가 어느덧 성인이..." 글에 댓글이 달렸어요!
        </S.ContentText>
        <S.Date>2021.03.21</S.Date>
      </S.ContentWrap>
    </S.Wrapper>
  );
};

const AlarmUI = ({ route }) => {
  console.log(route);
  return (
    <R.ScrollView style={{ backgroundColor: '#ffffff' }}>
      {new Array(10).fill(1).map((_, idx) => (
        <AlarmUIItem key={idx} />
      ))}
    </R.ScrollView>
  );
};

export default AlarmUI;
