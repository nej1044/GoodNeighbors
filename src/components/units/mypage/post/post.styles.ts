import styled from '@emotion/native';

export const Wrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex: 0.6;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ContentWrapper = styled.View`
  flex: 10;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const PostWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 73px;
  background-color: gray;
  border-radius: 10px;
  margin-top: 20px;
`;

export const InnerWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TagWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
  padding-left: 10px;
`;

export const Content = styled.Text``;

export const CountWrapper = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding-top: 5px;
`;

export const LikeCount = styled.Text`
  color: black;
  font-size: 10px;
  margin-left: 5px;
  padding-top: 3px;
`;

export const CommentWrapper = styled.View`
  width: 100%;
  height: 86px;
  justify-content: space-between;
  padding: 20px 24px;
  border: 1px solid #f0f0f0;
  background-color: #ffffff;
`;

export const ContentText = styled.Text`
  letter-spacing: -0.5px;
`;

export const CommentFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentText = styled.Text`
  width: 200px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const Date = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  letter-spacing: -0.5px;
`;

export const NonDataWrap = styled.View`
  height: 127px;
  justify-content: space-between;
  align-items: center;
  padding: 37px 0;
`;
export const NondataText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;
