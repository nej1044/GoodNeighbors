import React, { useState } from 'react';
import * as R from 'react-native';
import * as S from './alarm.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const AlarmUIItem = (props) => {
  const [read, setRead] = useState(false);

  const onPressRead = () => {
    setRead(true);
  };

  const onPressDelete = () => (idx: number) => {
    props.alarmArr.splice(idx, 1);
    props.setAlarmArr([...props.alarmArr]);
  };

  return (
    <S.Wrapper onPress={onPressRead} status={read}>
      <S.ProfileImg source={require('../../../../../public/images/mypage/alarmProfile.png')} />
      <S.ContentWrap deleteMode={props.route.params?.deleteMode}>
        <S.ContentText deleteMode={props.route.params?.deleteMode}>
          "저와 함께 여행중인 데르가 어느덧 성인이..." 글에 댓글이 달렸어요!
        </S.ContentText>
        <S.Date>2021.03.21</S.Date>
      </S.ContentWrap>
      {props.route.params?.deleteMode && (
        <Icon name="close-outline" color="#898989" size={16} onPress={onPressDelete(props.idx)} />
      )}
    </S.Wrapper>
  );
};

const AlarmUI = (props) => {
  const [alarmArr, setAlarmArr] = useState(new Array(10).fill(1));

  return (
    <R.ScrollView style={{ backgroundColor: '#ffffff' }}>
      {alarmArr.map((_, idx) => (
        <AlarmUIItem
          key={idx}
          route={props.route}
          idx={idx}
          alarmArr={alarmArr}
          setAlarmArr={setAlarmArr}
        />
      ))}
    </R.ScrollView>
  );
};

export default AlarmUI;
