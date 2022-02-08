import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../../../src/components/units/home/main/HomeMain.container';
import HomeCampaignList from '../../../src/components/units/home/list/campaign/HomeCampaignList.container';
import HomeDetails from '../../../src/components/units/home/details/HomeDetails.container';
import HomeChildrenList from '../../../src/components/units/home/list/children/HomeChildrenList.container';
import HomePatronList from '../../../src/components/units/home/list/patron/HomePatronList.container';
import HomePayment from '../../../src/components/units/home/homePayment/HomePayment.container';
import Payment from '../../../src/components/units/home/Payment/index';
import PaymentResult from '../../../src/components/units/home/complete/index';
import HomeSearch from '../../../src/components/units/home/search/HomeSearch.container';
import { Image, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeMain}
        options={() => ({
          headerTitle: '',
          headerStyle: { height: 100 },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable>
              <Image
                style={{ height: 40, width: 50, margin: 20 }}
                source={require('../../../public/images/home/mainLogo.png')}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{ flexDirection: 'row' }}
              onPress={() => navigation.navigate('search')}
            >
              <Icon name="search" color="rgba(0,0,0,0.4)" size={25} style={{ padding: 20 }} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="homeSearch"
        component={HomeSearch}
        options={() => ({
          headerTitle: '',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: true,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="homelist"
        component={HomeCampaignList}
        options={() => ({
          headerTitle: '캠페인',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 250 },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="childrenList"
        component={HomeChildrenList}
        options={() => ({
          headerTitle: '결연 아동',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 250 },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="patronList"
        component={HomePatronList}
        options={() => ({
          headerTitle: '정기 후원',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 250 },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="homeDetails"
        component={HomeDetails}
        options={() => ({
          headerTitle: '',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: true,
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ color: '#ffffff', paddingLeft: 20, paddingBottom: 40 }}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="share-outline"
                color="white"
                size={24}
                style={{ paddingTop: 15, paddingRight: 10 }}
                onPress={() => share()}
              />
              <Menu>
                <MenuTrigger>
                  <Icon
                    name="bookmark-outline"
                    color="white"
                    size={24}
                    style={{ paddingRight: 20, paddingTop: 15 }}
                  />
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 100 }}>
                  <MenuOption
                    onSelect={() => {
                      navigation.navigate('write', {
                        isEdit: true,
                        // boardId: route.params.params.boardId,
                      });
                    }}
                    text="수정"
                    style={{ padding: 10 }}
                  />
                  <MenuOption text="삭제" style={{ padding: 10 }} />
                </MenuOptions>
              </Menu>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="homePayment"
        component={HomePayment}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 250 },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              color="rgba(137,137,137, 0.9)"
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="PaymentResult"
        component={PaymentResult}
        options={() => ({
          headerTitle: '',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
