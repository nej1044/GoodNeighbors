import styled from '@emotion/native';

export const WholeWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const ProfileWrapper = styled.View`
  width: 100%;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px 20px 0px;
`;

export const ProfileEditWrap = styled.View`
  position: relative;
`;

export const ProfileImg = styled.View`
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  padding: 20px;
  border-radius: 44px;
  background-color: #f0f0f0;
`;

export const ProfileIcon = styled.Image`
  width: 85%;
  height: 85%;
`;

export const EditImg = styled.Pressable`
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid #ffffff;
  border-radius: 14px;
  background-color: #f0f0f0;
`;

export const EditIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

export const InputWrapper = styled.View`
  flex: 6;
  justify-content: space-between;
  padding: 0px 24px 24px 24px
`;

export const InputTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const InputCommon = styled.Text``;

export const ButtonWrapper = styled.View`
  flex: 0.95;
  width: 100%;
`;
