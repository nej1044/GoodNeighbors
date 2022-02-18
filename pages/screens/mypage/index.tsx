import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Edit from '../../../src/components/units/mypage/editprofile/edit.container';
import Notice from '../../../src/components/units/mypage/notice/notice.container';
import PersonalInformation from '../../../src/components/units/mypage/personalinformation/personalInformation.container';
import MypagePost from '../../../src/components/units/mypage/post/post.container';
import Setting from '../../../src/components/units/mypage/setting/setting.container';
import Icon from 'react-native-vector-icons/Ionicons';
import Stamp from '../../../src/components/units/mypage/stamp/stamp.container';
import { Pressable, View } from 'react-native';
import Alarm from '../../../src/components/units/mypage/alarm/alarm.container';

const Stack = createStackNavigator();

const MypageScreen = ({ navigation }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const onPressDelete = () => {
    setDeleteMode(true);
    navigation.navigate('alarm', {deleteMode: deleteMode})

    if (deleteMode) {
      setDeleteMode(false);
      
    }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="personalInformation"
        component={PersonalInformation}
        options={{
          headerTitle: '내정보',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 300 },
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('search')}
              >
                <Icon
                  name="search"
                  color="rgba(0,0,0,0.4)"
                  size={25}
                  style={{ paddingRight: 30 }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('alarm')}>
                <Icon
                  name="notifications-outline"
                  color="rgba(0,0,0,0.4)"
                  size={25}
                  style={{ paddingRight: 31 }}
                />
              </Pressable>
              <Icon
                name="settings-outline"
                color="rgba(0,0,0,0.4)"
                size={25}
                style={{ paddingRight: 50 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="editprofile"
        component={Edit}
        options={{
          title: '내 정보 수정',
          headerTitleStyle: { fontSize: 22, fontWeight: '700', width: 250 },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="alarm"
        component={Alarm}
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="arrow-back-outline"
              size={25}
              style={{ paddingLeft: 25, paddingTop: 15, paddingBottom: 40, color: '#898989' }}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Pressable style={{ flexDirection: 'row' }} onPress={onPressDelete}>
                <Icon
                  name={deleteMode ? 'checkmark-outline' : 'trash-outline'}
                  color="#898989"
                  size={23}
                  style={{ paddingRight: 30 }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="notice"
        component={Notice}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="post"
        component={MypagePost}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="stamp"
        component={Stamp}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
    </Stack.Navigator>
  );
};
export default MypageScreen;
