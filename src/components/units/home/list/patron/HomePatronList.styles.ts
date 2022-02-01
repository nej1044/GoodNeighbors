import styled from '@emotion/native';

export const Wrapper = styled.ScrollView`
  padding: 0 20px;
  background-color: white;
`;

export const ChildrenList = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 30px 0;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  justify-content: space-between;
  background-color: white;
`;

export const ChildImgWrapper = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const ChildDetails = styled.View`
  flex-direction: row;
  padding: 0px 0px 0px 15px;
  align-items: stretch;
`;

export const ChildAbout = styled.Pressable`
  width: 77%;
  justify-content: space-between;
`;

export const ChildName = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const ChildBio = styled.Text`
  color: #000;
  font-size: 14px;
  letter-spacing: -0.5px;
  padding-right: 25px;
`;

export const ChildrenTags = styled.View`
  flex-direction: row;
`;

export const ChildBookmark = styled.View``;
