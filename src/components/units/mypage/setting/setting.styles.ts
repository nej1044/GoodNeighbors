import styled from '@emotion/native';

export const WholeWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const UsageWrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const TitleWrapper = styled.View`
  padding-bottom: 12px;
  border-bottom-width: 3px;
  border-bottom-color: #000000;
`;

export const InnerContents = styled.Text`
  letter-spacing: -0.5px;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const UsagePolicy = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const AlarmWrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const AlarmAgreement = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const AlarmSound = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const EtcWrapper = styled.View`
  flex: 3;
  background-color: white;
  padding: 20px;
`;

export const Language = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Version = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NonSwitch = styled.Switch``;

export const TermsModal = styled.View`
  margin: 0;
  padding: 20px;
  background-color: white;
`;

export const Terms = styled.Text`
  font-size: 17px;
`;
