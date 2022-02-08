import * as React from 'react';
import * as E from './HomePayment.styles';
import { Alert, Image, Modal, Pressable, Text, View } from 'react-native';
import GreenButton from '../../../commons/buttons/greenbutton';
import { IPropsHomePaymentUI } from './HomePayment.types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomePaymentUI(props: IPropsHomePaymentUI) {
  Icon.loadFont();
  IonIcon.loadFont();

  const [checked, setChecked] = React.useState('first');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [anotherPay, setAnotherPay] = React.useState('네이버페이');

  return (
    <>
      <E.Wrapper>
        <E.ChildrenList>
          <E.ChildImgWrapper>
            <Image
              style={{ width: 68, height: 68, borderRadius: 8 }}
              source={{
                uri: `https://${props.data?.fetchUseditem.images[0]}`,
              }}
            />
          </E.ChildImgWrapper>
          <E.ChildDetails>
            <E.ChildAbout>
              <E.ChildName>{props.data?.fetchUseditem.name.split('/')[1]}</E.ChildName>
              <E.ChildBio>{props.data?.fetchUseditem.remarks}</E.ChildBio>
            </E.ChildAbout>
          </E.ChildDetails>
        </E.ChildrenList>
        <E.InputWrapper>
          <E.BottomColor>
            <E.EnterPrice onChange={props.onChangePrice} keyboardType={'number-pad'} />
          </E.BottomColor>
          <E.OptionsWrapper>
            {props.option.map((el: number) => (
              <E.OptionsContainer key={el} onPress={props.onPressOption(el)}>
                <E.OptionsPrice>+ {el.toLocaleString()}원</E.OptionsPrice>
              </E.OptionsContainer>
            ))}
          </E.OptionsWrapper>
        </E.InputWrapper>
        <E.PayMethodWrap>
          <E.PayMethodTitle>결제 수단</E.PayMethodTitle>
          <View>
            <E.OwnPayView>
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}
                onPress={() => setChecked('first')}
              >
                <E.RadioButton status={checked === 'first' ? 'checked' : 'unchecked'}>
                  <E.InnerRadio />
                </E.RadioButton>
                <E.RadioText>굿네이버스페이</E.RadioText>
              </Pressable>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <E.InnerView>
                  <IonIcon name="add-circle-outline" size={20} color="#898989" />
                  <E.InnerText>간편결제 수단 등록</E.InnerText>
                </E.InnerView>
              </ScrollView>
            </E.OwnPayView>
            <E.OwnPayView>
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}
                onPress={() => setChecked('second')}
              >
                <E.RadioButton status={checked === 'second' ? 'checked' : 'unchecked'}>
                  <E.InnerRadio />
                </E.RadioButton>
                <E.RadioText>다른 결제수단</E.RadioText>
              </Pressable>
              <E.AnotherPay onPress={() => setModalVisible(true)}>
                <Text>{anotherPay}</Text>
                <Text style={{ color: '#448800' }}>변경</Text>
              </E.AnotherPay>
            </E.OwnPayView>
            <E.CheckWrap>
              <E.Checkbox style={{ marginRight: 8 }} />
              <E.CheckText>
                정기 결제하시겠습니까?{' '}
                <Text style={{ color: '#999999' }}>(체크하지 않을 경우 일시 결제 됩니다.)</Text>
              </E.CheckText>
            </E.CheckWrap>
          </View>
        </E.PayMethodWrap>
        <E.PayMethodWrap>
          <E.MessageView>
            <E.MessageTitle>메세지</E.MessageTitle>
            <Text style={{ letterSpacing: -0.5, color: 'rgba(0,0,0,0.7)' }}>
              후원을 하여 전할 메세지가 있다면 입력하세요.
            </Text>
          </E.MessageView>
          <E.MessageInput multiline textAlignVertical="top" placeholder="내용을 입력해 주세요." />
        </E.PayMethodWrap>
        <E.TotalWrapper>
          <E.TotalTitle>총 후원금액</E.TotalTitle>
          <E.TotalPrice>{props.price.toLocaleString()} 원</E.TotalPrice>
        </E.TotalWrapper>
        <E.Agree>위 내용을 확인하였으며 후원에 동의합니다.</E.Agree>
        <GreenButton
          text={'후원하기'}
          height={'52px'}
          fontSize="16px"
          fontWeight={500}
          onPressBtn={props.onPressPay}
        />
        <View style={{ height: 15, backgroundColor: 'ffffff' }}></View>
      </E.Wrapper>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <E.ModalWrap>
          <E.ContentWrap>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={25} color="rgba(0,0,0,0.4)" />
            </Pressable>
            <E.SelectPay
              onPress={() => {
                setModalVisible(!modalVisible);
                setAnotherPay('네이버페이');
              }}
            >
              <Text>네이버페이</Text>
            </E.SelectPay>
            <E.SelectPay
              onPress={() => {
                setModalVisible(!modalVisible);
                setAnotherPay('카카오페이');
              }}
            >
              <Text>카카오페이</Text>
            </E.SelectPay>
            <E.SelectPay onPress={() => {
                setModalVisible(!modalVisible);
                setAnotherPay('신용카드');
              }}>
              <Text>신용카드</Text>
            </E.SelectPay>
            <E.SelectPay onPress={() => {
                setModalVisible(!modalVisible);
                setAnotherPay('가상계좌');
              }}>
              <Text>가상계좌</Text>
            </E.SelectPay>
          </E.ContentWrap>
        </E.ModalWrap>
      </Modal>
    </>
  );
}
