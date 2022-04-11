import * as React from 'react';
import { ScrollView, Share, StatusBar, Text, View } from 'react-native';
import * as E from './HomeDetails.styles';
import WhiteButton from '../../../commons/buttons/whitebutton/';
import AvatarGroup from '../../../commons/avatargroup/index';
import GreenButton from '../../../commons/buttons/greenbutton';
// import LinearGradient from 'react-native-linear-gradient';
import WhiteTag from '../../../commons/tags/whitetag';
import ReadMore from 'react-native-read-more-text';
import ProgressBar from '../../../commons/progressbar/coloredprogressbar/index';
import { displayDate, displayDDay } from '../../../../commons/libraries/utils';
import HomeLetterWrite from '../letter/write/HomeLetterWrite.container';
import HomeLetter from '../letter/list/HomeLetter.container';
import Icon from 'react-native-vector-icons/Ionicons';
import Tooltip from 'rn-tooltip';
import HomeListBottom from '../list/bottomlist/HomeListBottom.container';
import { IPropsHomeDetailsUI } from './HomeDetails.types';

const HomeDetailsUI = (props: IPropsHomeDetailsUI) => {
  const start = props.data?.fetchUseditem.createdAt;
  const end = props.getDate;
  const children = props.data?.fetchUseditem.name.split('/')[0] === '결연아동';
  const category = props.data?.fetchUseditem.name.split('/')[0];
  const el = props.data?.fetchUseditem;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <E.SupportWrap>
        <GreenButton
          text={'나도 참여하기'}
          width="100%"
          height={'52px'}
          onPressBtn={props.onPressSupport}
          fontSize="16px"
          fontWeight={500}
        />
      </E.SupportWrap>
      <E.Wrapper>
        <E.Top>
          <E.TopImgWrapper>
            <E.Img
              source={{
                uri: `https://${props.data?.fetchUseditem.images[0]}`,
              }}
            />
          </E.TopImgWrapper>
          {/* <LinearGradient
            colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          > */}
          <E.TopOverWrapper>
            {/* <E.IconBtns>
              {!props.dataForPicked?.fetchUseditemsIPicked
                .map((pick) => pick._id)
                .includes(props.data?.fetchUseditem._id) ? (
                <Icon
                  name="bookmark-outline"
                  size={20}
                  color={'#fff'}
                  onPress={props.onPressPick(el)}
                />
              ) : (
                <Icon name="bookmark" size={20} color={'#fff'} onPress={props.onPressPick(el)} />
              )}
              <Icon
                name="share-outline"
                size={20}
                color={'#fff'}
                style={{ margin: 5 }}
                onPress={() => onShare()}
              />
            </E.IconBtns> */}
            <E.Info>
              <E.InfoDetails>
                <E.InfoDetailTitle>
                  {props.data?.fetchUseditem.name.split('/')[1]}
                </E.InfoDetailTitle>
                {children && (
                  <E.ChildrenTextWrap>
                    <E.ChildrenText>나이</E.ChildrenText>
                    <E.ChildrenBoldText>{props.data?.fetchUseditem.tags?.[3]}</E.ChildrenBoldText>
                    <E.ChildrenText>성별</E.ChildrenText>
                    <E.ChildrenBoldText>{props.data?.fetchUseditem.tags?.[2]}</E.ChildrenBoldText>
                    <E.ChildrenText>나라</E.ChildrenText>
                    <E.ChildrenBoldText>{props.data?.fetchUseditem.tags?.[0]}</E.ChildrenBoldText>
                  </E.ChildrenTextWrap>
                )}
                {!children && (
                  <E.DetailRemark>{props.data?.fetchUseditem.remarks.split('!')[0]}</E.DetailRemark>
                )}
              </E.InfoDetails>

              {!children ? (
                <E.InfoPeriod>
                  <E.PeriodTxt>
                    {`기간 ${displayDate(props.data?.fetchUseditem.createdAt)} - ${displayDate(
                      props.getDate,
                    )}`}
                  </E.PeriodTxt>
                </E.InfoPeriod>
              ) : (
                <E.TempInfo>
                  <E.Temp>10º</E.Temp>
                  <E.TempTitle>
                    가치온도
                    <Tooltip
                      actionType={'press'}
                      backgroundColor={'white'}
                      overlayColor={'#00000076'}
                      popover={
                        <Text style={{ fontSize: 7 }}>
                          가치 온도는 나와 결연 아동의 친밀감을 나타내는 지표에요!
                        </Text>
                      }
                    >
                      <Icon name="help-circle-outline" color={'rgba(255, 255, 255, 0.7)'} />
                    </Tooltip>
                  </E.TempTitle>
                </E.TempInfo>
              )}
            </E.Info>
          </E.TopOverWrapper>
          {/* </LinearGradient> */}
        </E.Top>
        <E.Bottom>
          <E.BottomSummaryWrapper>
            {children && (
              <E.SummaryRemarks>{`"${props.data?.fetchUseditem.remarks}"`}</E.SummaryRemarks>
            )}
            <E.SummaryContent>{props.data?.fetchUseditem.contents}</E.SummaryContent>
            <E.Tags>
              {!children &&
                props.data?.fetchUseditem.tags?.map((el, index) => (
                  <WhiteTag key={index} text={el} fontSize="10px" />
                ))}
            </E.Tags>
            {!children && (
              <E.Progress>
                <ProgressBar
                  id={props.data?.fetchUseditem._id}
                  current={props.people}
                  dday={displayDDay(start, end)}
                />
              </E.Progress>
            )}
          </E.BottomSummaryWrapper>
          <E.BottomDetailsWrapper>
            <E.DetailTitle>
              {children ? '편지를 남겨주세요!' : props.planTitle || '계획'}
            </E.DetailTitle>
            {children && <HomeLetter route={props.route} />}
            {!children && (
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
              >
                <E.DetailContent>
                  후원자, 아동 편지 번역 번역 봉사단으로 선발되면 후원자와 아동이 주고 받는 편지를
                  각각 한국어와 영어로 번역하는 봉사에 참여하게 되요! 후원자 및 아동 편지 한-영 번역
                  오프라인 모임 참석 번역봉사를 시작하기 전, 번역봉사자가 한 자리에 모이는
                  오리엔테이션에 참석해 주시면 번역봉사 활동이 가능해요. 온라인 커뮤니티 활동
                  비전메이커 번역봉사단 홈페이지의 번역 커뮤니티를 통해, 다른 봉사자님들과 편지 번역
                  및 봉사 활동에 대해 자유롭게 이야기를 나눌 수 있어요!
                </E.DetailContent>
              </ReadMore>
            )}
          </E.BottomDetailsWrapper>
          {!children ? (
            <E.BottomSupporters>
              <E.SupportersTxt>
                <E.SupportersNums>{`+${props.people} `}</E.SupportersNums>명의 사람들이 함께 참여
                중입니다.
              </E.SupportersTxt>
              <AvatarGroup />
            </E.BottomSupporters>
          ) : (
            <HomeLetterWrite route={props.route} />
          )}
          <E.BottomRecommendWrapper>
            <HomeListBottom category={category} navigation={props.navigation} />
          </E.BottomRecommendWrapper>
        </E.Bottom>
        <View style={{ height: 52 }}></View>
      </E.Wrapper>
    </>
  );
};

const _renderTruncatedFooter = (handlePress: any) => {
  return (
    <>
      {/* <LinearGradient
        colors={['#ffffff', 'rgba(0,0,0,0)']}
        style={{ width: '100%', height: '70%', position: 'absolute' }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      /> */}
      <View style={{ marginTop: 15 }}>
        <WhiteButton onPressBtn={handlePress} text={'더 보기'} borderRadius={8} height={'48px'} />
      </View>
    </>
  );
};

const _renderRevealedFooter = (handlePress: any) => {
  return (
    <View style={{ marginTop: 15 }}>
      <WhiteButton onPressBtn={handlePress} text={'접기'} borderRadius={8} height={'48px'} />
    </View>
  );
};

export default HomeDetailsUI;
