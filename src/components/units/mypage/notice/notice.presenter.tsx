import * as S from './notice.styles';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const NoticeUIItem = (props) => {
  const [read, setRead] = React.useState(false);

  const onPressRead = () => {
    setRead(true);
  };

  return (
    <S.Wrapper onPress={onPressRead} status={read}>
      <S.ContentWrap>
        <S.ContentText>
          이번 주 굿네이버스에 업데이트 된 기부리스트가 있습니다! 지금 함께 만나보세요!
        </S.ContentText>
        <S.Date>2021.03.21</S.Date>
      </S.ContentWrap>
    </S.Wrapper>
  );
};

const NoticeUI = () => {
  const noticeArr = new Array(10).fill(1);

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      {noticeArr.map((_, idx) => (
        <NoticeUIItem key={idx} idx={idx} />
      ))}
    </ScrollView>
  );
};
export default NoticeUI;
