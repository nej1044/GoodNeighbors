import * as React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewMoreWrapper = styled.Pressable`
  align-items: center;
`;

const ViewMoreTxt = styled.Text`
  padding-right: 20px;
  color: rgba(147, 147, 147, 1);
`;

interface IViewMoreButton {
  onPressBtn?: () => void;
}

export default function ViewMoreButton(props: IViewMoreButton) {
  return (
    <ViewMoreWrapper onPress={props.onPressBtn}>
      <ViewMoreTxt>
        더 보기 <Icon name="add-outline" style={{ fontSize: 16 }} />
      </ViewMoreTxt>
    </ViewMoreWrapper>
  );
}
