import styled from '@emotion/native';

export const Wrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Top = styled.View`
  height: 280px;
`;

export const TopImgWrapper = styled.View``;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopOverWrapper = styled.View`
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
`;

export const IconBtns = styled.View`
  flex-direction: row-reverse;
  align-items: center;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InfoDetails = styled.View`
  width: 70%;
  padding-right: 10px;
`;

export const InfoDetailTitle = styled.Text`
  margin-bottom: 6px;
  color: white;
  font-weight: 700;
  font-size: 22px;
`;

export const DetailRemark = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const InfoPeriod = styled.View``;

export const PeriodTxt = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  letter-spacing: -0.5px;
`;

export const TempInfo = styled.View`
  align-items: flex-end;
`;

export const Temp = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
  font-weight: 300;
`;
export const TempTitle = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
`;

export const Bottom = styled.View`
  width: 100%;
`;

export const BottomSummaryWrapper = styled.View`
  padding: 30px 20px;
  background-color: white;
`;

export const SummaryRemarks = styled.Text`
  text-align: center;
  font-weight: 700;
  padding-bottom: 10px;
  color: #000;
  font-size: 15px;
`;

export const SummaryContent = styled.Text`
  margin-bottom: 15px;
  color: #000;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

export const Tags = styled.View`
  flex-direction: row;
`;

export const Progress = styled.View`
  margin-top: 30px;
`;

export const BottomDetailsWrapper = styled.View`
  margin-top: 10px;
  padding: 30px 20px;
  background-color: white;
`;

export const DetailTitle = styled.Text`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 20px;
`;

export const DetailContent = styled.Text`
  color: #000;
`;

export const BottomSupporters = styled.View`
  width: 100%;
  margin: 10px 0px 0px 0px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const SupportersTxt = styled.Text`
  color: rgba(0, 0, 0, 0.7);
`;

export const SupportersNums = styled.Text`
  font-weight: 700;
  color: #000;
`;
export const BottomRecommendWrapper = styled.View`
  width: 100%;
`;

export const RecommendWrapper = styled.View`
  background-color: #fff;
  padding: 30px 20px 30px 20px;
`;

export const RecommendTitle = styled.View`
  padding-bottom: 15px;
`;

export const RecommendTitleText = styled.Text`
  color: #000;
  font-weight: 700;
`;

export const UserName = styled.Text`
  color: #448800;
`;

export const RecommendList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RecommendCard = styled.View``;

export const RImageWrpper = styled.Pressable`
  width: 160px;
  height: 160px;
`;

export const RecommendCardDetails = styled.View`
  padding: 10px 0px 15px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RecommendCardTitle = styled.Text`
  color: #000;
  font-weight: 500;
`;

export const RecommendBookmark = styled.View``;

export const CardTag = styled.View`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const SupportWrap = styled.Pressable`
  z-index: 1;
  position: absolute;
  top: 745px;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
`;
