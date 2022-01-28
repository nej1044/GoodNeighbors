import React from 'react';
import styled from '@emotion/native';

interface IPropsColoredTag {
  text?: string;
  fontSize?: string;
  padding?: string;
}

const Tag = styled.View`
  padding: ${(props: IPropsColoredTag) => props.padding};
  margin-right: 5px;
  border-radius: 40px;
  background-color: #448800;
  align-self: flex-start;
`;

const TagText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: ${(props: IPropsColoredTag) => props.fontSize};
`;

const ColoredTag = (props: IPropsColoredTag) => {
  return (
    <Tag padding={props.padding}>
      <TagText fontSize={props.fontSize}>{props.text}</TagText>
    </Tag>
  );
};

export default ColoredTag;
