import React, { useState } from 'react';
import { View, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

interface IPropsContainer {
  width?: string;
  height?: string;
  marginBottom?: string;
}

interface IPropsInputBasic {
  width?: string;
  height?: string;
  marginBottom?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value?: string;
}

const Container = styled.View`
  width: ${(props: IPropsContainer) => props.width};
  height: ${(props: IPropsContainer) => props.height};
  margin-bottom: ${(props: IPropsContainer) => props.marginBottom};
`;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  justify-content: center;
  width: 5%;
`;
const Input = styled.TextInput`
  width: 95%;
`;

export default function InputBasic(props: IPropsInputBasic) {
  const [isFocus, setIsFocus] = useState(false);

  function onFocusInput() {
    setIsFocus(true);
  }

  function onBlurInput() {
    setIsFocus(false);
  }

  return (
    <Container width={props.width} height={props.height} marginBottom={props.marginBottom}>
      <View style={isFocus ? styles.textInputFocused : styles.textInput}>
        <Wrapper>
          <Input
            placeholder={props.placeholder}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onChange={props.onChange}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
          />
          <Icon name="close-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
        </Wrapper>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dbdbdb',
    padding: 13,
    paddingLeft: 20,
    paddingRight: 18,
    fontSize: 14,
  },

  textInputFocused: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#448800',
    padding: 13,
    paddingLeft: 20,
    paddingRight: 18,
    fontSize: 14,
  },
});
