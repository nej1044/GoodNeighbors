import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 137px 24px 201px 24px;
  background-color: #ffffff;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  width: 50%;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 60%;
  height: 50%;
`;

export const SubTtitle = styled.Text`
  color: #9f9f9f;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const Title = styled.Text`
  color: #448800;
  font-size: 22px;
  font-weight: 700;
`;

export const BodyWrapper = styled.View`
  flex: 2;
  width: 100%;
  margin-top: 20px;
`

export const SocialBtn = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 9px 16px;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 8px;
`

export const SocialTitle = styled.Text`
  width: 83%;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const SocialLogo = styled.Image`
  width: 25px;
  height: 25px;
`

export const SocialIcon = styled.Image`
  width: 23px;
  height: 23px;
`

export const Bottom_Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: #989898;
`;

export const Login = styled.Text`
  margin-right: 8px;
  color: #989898;
  font-size: 12px;
`;

export const Register = styled.Text`
  margin-left: 8px;
  color: #989898;
  font-size: 12px;
`;
