import styled from '@emotion/native';

export const Wrapper = styled.ScrollView``;

export const ChildrenList = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px 0px 0px 24px;
  justify-content: space-between;
  background-color: white;
`;

export const ChildImgWrapper = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const ChildDetails = styled.View`
  /* background-color: lightcoral; */
  flex-direction: row;
  padding: 0px 0px 0px 15px;
  /* justify-content: space-between; */
  align-items: stretch;
`;

export const ChildAbout = styled.Pressable`
  width: 80%;
  padding: 5px 0;
  /* background-color: lightyellow; */
`;

export const ChildName = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 6px;
  letter-spacing: -0.5px;
`;

export const ChildBio = styled.Text`
  color: #000;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

export const InputWrapper = styled.View`
  background-color: white;
  padding: 25px 20px 25px 20px;
`;

export const BottomColor = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #448800;
`;
export const EnterPrice = styled.TextInput`
  padding: 8px 4px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const TotalWrapper = styled.View`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 25px 20px 25px 20px;
`;

export const TotalTitle = styled.Text`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.5px;
`;

export const TotalPrice = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.5px;
`;

export const Agree = styled.Text`
  padding: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;
export const OptionsContainer = styled.Pressable`
  padding: 8px 12px 8px 12px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
  margin-right: 5px;
`;

export const OptionsPrice = styled.Text`
  color: rgba(113, 113, 113, 1);
  font-size: 10px;
  letter-spacing: -0.5px;
`;

export const PayMethodWrap = styled.View`
  margin-top: 10px;
  padding: 24px;
  background-color: #ffffff;
`;

export const PayMethodTitle = styled.Text`
  margin-bottom: 22px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const RadioText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
`;

export const RadioButton = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(193, 199, 205, 1);
  border-radius: 10px;
  background-color: ${(props) => (props.status === 'checked' ? '#448800' : '#ffffff')};
  padding: 10px;
`;

export const InnerRadio = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
`;

export const Checkbox = styled.View`
  width: 18px;
  height: 18px;
  border: 1px solid rgba(193, 199, 205, 1);
  border-radius: 3px;
`;

export const CheckText = styled.Text`
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const InnerView = styled.View`
  width: 180px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0px 8px 0px 28px;
  border-radius: 8px;
  background-color: #f6f6f7;
`;
export const InnerText = styled.Text`
  margin-top: 12px;
  font-size: 10px;
  letter-spacing: -0.5px;
`;

export const OwnPayView = styled.View`
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const AnotherPay = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  padding: 17px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const CheckWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MessageTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const MessageView = styled.View`
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const MessageInput = styled.TextInput`
  height: 100px;
  padding: 20px 0;
`;

export const ModalWrap = styled.View`
  height: 100%;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentWrap = styled.View`
  align-items: flex-end;
  height: 315px;
  padding: 26px;
  border-radius: 15px 15px 0px 0px;
  background-color: #ffffff;
`;

export const SelectPay = styled.Pressable`
  width: 100%;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`
