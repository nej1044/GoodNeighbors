import styled from '@emotion/native';

export const WholeWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
`;
export const First_Wrapper = styled.View`
  background-color: white;
  margin-bottom: 32px;
  padding: 30px 24px;
`;

export const Second_Wrapper = styled.View`
  background-color: white;
  margin: 15px 0px 15px 0px;
`;

export const Third_Wrapper = styled.View`
  background-color: white;
  padding-bottom: 50px;
  margin: 15px 0px 15px 0px;
`;

export const ContentWrapper = styled.View`
  height: 66px;
  justify-content: space-between;
  margin-left: 45px;
`;

export const MainImage = styled.Image`
  position: absolute;
  left: -43px;
  top: -10px;
  width: 86px;
  height: 86px;
  border: 10px solid white;
  border-radius: 48px;
`;

export const DotImage = styled.Image`
  position: absolute;
  left: -9.5px;
  width: 18px;
  height: 18px;
  border: 6px solid white;
  border-radius: 9px;
`;

export const HeaderWrapper = styled.View`
  position: relative;
  margin-left: 37px;
  padding-bottom: 30px;
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.2);
`;

export const BottomWrapper = styled.View`
  position: relative;
  margin-left: 37px;
  padding-bottom: 5px;
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.2);
`;

export const ImageWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 209px;
  height: 100px;
  margin-top: 10px;
`;

export const RightImageWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  height: 100px;
`;

export const BottomImageWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const InnerTitle = styled.Text`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const Content = styled.Text`
  font-size: 14px;
  letter-spacing: -0.5px;
`;

export const TagWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ParagraphWrapper = styled.View`
  margin-left: 45px;
`;

export const Data = styled.Text`
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const DataWraper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 34%;
`;

export const LineWrapper = styled.View``;

export const InnerWrapper = styled.View``;

export const BodyWrapper = styled.View`
  height: ${(props) => (props.isMore ? '' : '242px')};
  overflow: ${(props) => (props.isMore ? '' : 'hidden')};
`;
