import styled from '@emotion/native';

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 142px 24px 230px 24px;
  background-color: #ffffff;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  width: 50%;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 60%;
  height: 40%;
`;

export const SubTitle = styled.Text`
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const Title = styled.Text`
  color: #448800;
  font-size: 22px;
  font-weight: 700;
`;

export const BodyWrapper = styled.View`
  flex: 1.5;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Bottom_Wrapper = styled.View`
  flex-direction: row;
  margin-top: 30px;
  color: #989898;
`;

export const Search_Email = styled.Text`
  margin-right: 8px;
  color: #989898;
  font-size: 12px;
`;

export const Search_Password = styled.Text`
  margin-left: 8px;
  color: #989898;
  font-size: 12px;
`;
