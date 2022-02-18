import styled from '@emotion/native';

export const WholeWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const ProfileWrapper = styled.View`
  width: 100%;
  height: 172px;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px 10px 0px;
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
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 14px;
  background-color: #f0f0f0;
`;

export const EditIcon = styled.Image`
  width: 85%;
  height: 85%;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

export const TabWrapper = styled.View`
  width: 100%;
  height: 642px;
`;

export const TabInnerWrapper = styled.View`
  width: 100%;
  padding: 20px 24px;
  background-color: white;
`;

export const ContentWrap = styled.View`
  margin-bottom: 40px;
`

export const PITitle = styled.View`
  width: 100%;
  padding-bottom: 6px;
  border-bottom-width: 3px;
`;
export const PITitleText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const Footer = styled.View`
  width: 100%;
  height: 100px;
  justify-content: space-around;
  margin-bottom: 25px;
  border-top-width: 3px;
`

export const FooterText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
`

export const ButtonWrapper = styled.View`
  height: 90px;
  justify-content: space-between;
`