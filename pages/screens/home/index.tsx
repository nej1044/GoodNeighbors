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
import { Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeMain}
        options={() => ({
          headerTitle: '',
          headerStyle: { height: 60 },
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
        })}
      />
      <Stack.Screen
        name="homePayment"
        component={HomePayment}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
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
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
