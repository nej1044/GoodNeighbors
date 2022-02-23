import { ScrollView, Text, View } from 'react-native';
import * as P from './post.styles';
import React from 'react';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import { IPropsPostUI } from './post.types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const PostUI = (props) => {
  return (
    <P.Wrapper>
      {props.data?.fetchBoards.length !== 0 ? (
        <P.ContentWrapper>
          {props.data?.fetchBoards.map((el: any, idx: any) => (
            <P.PostWrapper key={idx}>
              <P.Image source={{ uri: el.images[0] }} />
              <P.InnerWrapper>
                <P.TagWrapper>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                </P.TagWrapper>
                <P.Content numberOfLines={4} ellipsizeMode="tail">
                  {el.contents}
                </P.Content>
                <P.CountWrapper>
                  <Icon name="heart-outline" size={20}></Icon>
                  <P.LikeCount>{el.likeCount}</P.LikeCount>
                </P.CountWrapper>
              </P.InnerWrapper>
            </P.PostWrapper>
          ))}
        </P.ContentWrapper>
      ) : (
        <P.NonDataWrap>
          <Icon name="alert-circle-outline" size={22} color="rgba(0,0,0,0.4)" />
          <P.NondataText>결과가 없어요.</P.NondataText>
        </P.NonDataWrap>
      )}
    </P.Wrapper>
  );
};

const CommentUIItem = () => {
  return (
    <P.CommentWrapper>
      <P.ContentText>저와 함께 여행중인 데르가 어느덧 성인이 되었어요!</P.ContentText>
      <P.CommentFooter>
        <P.CommentText numberOfLines={1}>
          너무 따뜻한 후기네요! 앞으로도 멋진 후원하시길 바랄게요! 저는 이제 막 1년 되었답니다!
        </P.CommentText>
        <P.Date>2021.03.21</P.Date>
      </P.CommentFooter>
    </P.CommentWrapper>
  );
};

const CommentUI = () => {
  const commentArr = new Array(10).fill(1);

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      {commentArr.map((_, idx) => (
        <CommentUIItem key={idx} idx={idx} />
      ))}
    </ScrollView>
  );
};

const MypagePostUI = (props: IPropsPostUI) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { borderBottomColor: '#f0f0f0', borderBottomWidth: 1 },
          tabBarItemStyle: { height: 36 },
          tabBarLabelStyle: { fontSize: 14, fontWeight: '500', bottom: 5 },
          tabBarActiveTintColor: '#448800',
          tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
          tabBarIndicatorStyle: { width: 90, marginLeft: 48, backgroundColor: '#448800' },
        }}
      >
        <Tab.Screen name="게시글" children={() => <PostUI data={props.data} />} />
        <Tab.Screen name="댓글" children={() => <CommentUI />} />
      </Tab.Navigator>
    </>
  );
};

export default MypagePostUI;
