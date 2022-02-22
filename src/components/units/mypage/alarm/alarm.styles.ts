import styled from '@emotion/native';

export const Wrapper = styled.Pressable`
  width: 100%;
  height: 86px;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
  border: 1px solid #f0f0f0;
  background-color: ${(props) => (props.status ? '#ffffff' : '#fbeeeb')};
`;

export const ProfileImg = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ContentWrap = styled.View`
  width: ${(props) => (props.deleteMode ? '250px' : '280px')};
  justify-content: space-between;
`;

export const ContentText = styled.Text`
  padding-right: ${(props) => (props.deleteMode ? '10px' : '15px')};
  letter-spacing: -0.5px;
`;

export const Date = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  letter-spacing: -0.5px;
`;
