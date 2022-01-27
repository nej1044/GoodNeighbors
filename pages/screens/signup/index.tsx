import React from 'react';
import Social from '../../../src/components/units/signup/social/social.container';
import Register from '../../../src/components/units/signup/register/register.container';
import Login from '../../../src/components/units/signup/login/login.container';
import Confirmation from '../../../src/components/units/signup/confirmation/confirmation.container';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Find from '../../../src/components/units/signup/find';
import Vaild from '../../../src/components/units/signup/valid/valid.container';
import ValidConfirm from '../../../src/components/units/signup/validConfirm/validConfirm.container';

const Stack = createStackNavigator();

const LoginScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="social"
          component={Social}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="confirmation"
          component={Confirmation}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="find"
          component={Find}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="valid"
          component={Vaild}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="validConfirm"
          component={ValidConfirm}
          options={() => ({
            headerTitle: '',
            headerStyle: { shadowColor: 'transparent' },
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Icon
                name="arrow-back-outline"
                size={25}
                style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 15 }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};
export default LoginScreen;
