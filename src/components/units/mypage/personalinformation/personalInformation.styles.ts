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
`;

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
`;

export const FooterText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const ButtonWrapper = styled.View`
  height: 90px;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  width: 100%;
`;

export const ProgressWrapper = styled.View`
  margin-bottom: 8px;
  padding: 20px 24px 12px 24px;
  background-color: #ffffff;
`;

export const InnerTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const LevelWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 6px;
  margin-bottom: 8px;
  padding-top: 12px;
  border-top-width: 3px;
`;

export const Percent = styled.Text`
  color: #448800;
  font-size: 16px;
  font-weight: 500;
`;

export const PercentText = styled.Text`
  align-self: flex-end;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 10px;
  letter-spacing: -0.5px;
`;

export const StampList = styled.View`
  padding: 20px 24px;
  background-color: #ffffff;
`;

export const ListWrapper = styled.Pressable`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StampListWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  padding-top: 20px;
  border-top-width: 3px;
`;

export const StampName = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ModalWrap = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.View`
  width: 100%;
  height: 440px;
  padding: 26px;
  background-color: #ffffff;
  border-radius: 16px 16px 0px 0px;
`;

export const Close = styled.Pressable`
  align-items: flex-end;
`;
