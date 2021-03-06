import styled from '@emotion/native';

export const Wrap = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: #ffffff;
`;

export const TitleInput = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const ContentsInput = styled.TextInput`
  flex: 5;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
  padding: 20px 0;
`;

export const HashWrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const TagInput = styled.TextInput``;

export const photoWrap = styled.View`
  flex-direction: row;
  flex: 2;
  padding: 24px 0;
`;

export const PhotoUpload = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
`;
