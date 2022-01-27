import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 215px 23px 0px 23px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  margin-bottom: 30px;
  padding: 0 30px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

export const BoldTitle = styled.Text`
  color: #448800;
  font-size: 22px;
  font-weight: 700;
`;

export const EmailWrapper = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px 34px 15px 21px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
`;

export const EmailIcon = styled.Image`
  width: 8%;
`;

export const EmailTitle = styled.Text`
  width: 92%;
  font-size: 14px;
  text-align: center;
`;

export const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BottomTitle = styled.Text`
  color: #989898;
  font-size: 12px;
`;
