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

export const ContentWrap = styled.View`
  justify-content: space-between;
`;

export const ContentText = styled.Text`
  padding-right: 15px;
  letter-spacing: -0.5px;
`;

export const Date = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  letter-spacing: -0.5px;
`;
