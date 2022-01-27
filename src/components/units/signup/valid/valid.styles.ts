import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 175px 23px 0px 23px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  margin-bottom: 30px;
  color: #1e2002;
  font-size: 22px;
  font-weight: 700;
`;

export const Auth = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`;

export const AuthInput = styled.TextInput`
  width: 210px;
  height: 48px;
  margin-right: 10px;
  padding: 16px 20px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
  font-size: 14px;
`;

export const Button = styled.Pressable`
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
`;

export const BtnTitle = styled.Text`
  color: #1e2022;
  font-size: 16px;
  font-weight: 500;
`;

export const IntroWrapper = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;

export const BottomTitle = styled.Text`
  color: #989898;
  font-size: 12px;
`;
