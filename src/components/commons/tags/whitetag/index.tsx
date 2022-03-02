import React from 'react';
import styled from '@emotion/native';

interface IPropsWhiteTag {
  text?: string;
  fontSize?: string;
  onPress?: () => void;
  padding?: string;
  margin?: string;
}

const Tag = styled.Pressable`
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid #9f9f9f;
  border-radius: 20px;
  align-self: flex-start;
`;

const TagText = styled.Text`
  color: ${(props: IPropsWhiteTag) => props.color};
  font-size: ${(props: IPropsWhiteTag) => props.fontSize};
`;

const WhiteTag = (props: IPropsWhiteTag) => {
  return (
    <Tag onPress={props.onPress} padding={props.padding} margin={props.margin}>
      <TagText fontSize={props.fontSize} color={props.color}>
        # {props.text}
      </TagText>
    </Tag>
  );
};

export default WhiteTag;
