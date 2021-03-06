import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeCampaign.styles';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
import ViewMoreButton from '../../../commons/buttons/viewmorebutton';
import ClearProgressBar from '../../../commons/progressbar/clearprogressbar';
import { IPropsHomeCampaignUI } from './HomeCampaign.types';

export default function HomeCampaignUI(props: IPropsHomeCampaignUI) {
  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>캠페인</E.SelectionTitleText>
              <ViewMoreButton onPressBtn={() => props.navigation.navigate('homelist')} />
            </E.SelectionTitle>
            <E.SelectionList>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.data?.fetchUseditems
                  .map((el) => (
                    <E.Card key={el._id}>
                      <E.ImgWrapper
                        onPress={() =>
                          props.navigation.navigate('homeDetails', { useditemId: el._id })
                        }
                      >
                        {el.images && (
                          <Image
                            style={{
                              width: 277,
                              height: 150,
                              borderRadius: 8,
                              position: 'relative',
                            }}
                            source={{
                              uri: `https://${el.images[0]}`,
                            }}
                          />
                        )}
                        {/* <LinearGradient
                          colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            borderRadius: 8,
                          }}
                          start={{ x: 0, y: 1 }}
                          end={{ x: 0, y: 0 }}
                        ></LinearGradient> */}
                        <E.CardTag>
                          <ColoredTag key={el._id} text={`#${el.tags[0]}`} fontSize="8px" />
                          <ClearProgressBar height={'4px'} id={el._id} createdAt={el.createdAt} />
                        </E.CardTag>
                      </E.ImgWrapper>
                      <E.CardDetails>
                        <E.DetailsContent>
                          <E.ContentTitle>{el.name.split('/')[1]}</E.ContentTitle>
                          <E.ContentRemark numberOfLines={1} ellipsizeMode="tail">
                            {el.remarks}
                          </E.ContentRemark>
                        </E.DetailsContent>
                        <E.DetailsBookmark>
                          {!props.dataForPicked?.fetchUseditemsIPicked
                            .map((pick) => pick._id)
                            .includes(el._id) ? (
                            <Icon
                              name="bookmark-outline"
                              size={24}
                              color={'rgba(0, 0, 0, 0.4)'}
                              onPress={props.onPressPick(el)}
                            />
                          ) : (
                            <Icon
                              name="bookmark"
                              size={24}
                              color={'#448800'}
                              onPress={props.onPressPick(el)}
                            />
                          )}
                        </E.DetailsBookmark>
                      </E.CardDetails>
                    </E.Card>
                  ))
                  .splice(0, 4)}
              </ScrollView>
            </E.SelectionList>
          </E.SelectionWrapper>
          <E.RecommendWrapper>
            <E.RecommendTitle>
              <E.RecommendTitleText>
                <E.UserName>{props.dataForUser?.fetchUserLoggedIn.name || '김이웃'}</E.UserName>님과
                어울리는 캠페인이에요!
              </E.RecommendTitleText>
            </E.RecommendTitle>

            <E.RecommendList>
              {props.data?.fetchUseditems
                .map((el) => (
                  <E.RecommendCard key={el._id}>
                    <E.RImageWrpper
                      onPress={() =>
                        props.navigation.navigate('homeDetails', { useditemId: el._id })
                      }
                    >
                      <Image
                        style={{ width: 160, height: 160, borderRadius: 8 }}
                        source={{
                          uri: `https://${el.images[0]}`,
                        }}
                      />
                      {/* <LinearGradient
                        colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          borderRadius: 8,
                        }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                      ></LinearGradient> */}
                      <E.CardTag>
                        <ColoredTag key={el._id} text={`#${el.tags[0]}`} fontSize="8px" />
                        <ClearProgressBar createdAt={el.createdAt} height={'2px'} id={el._id} />
                      </E.CardTag>
                    </E.RImageWrpper>
                    <E.RecommendCardDetails>
                      <E.RecommendCardTitle numberOfLines={1} ellipsizeMode="tail">
                        {el.name.split('/')[1]}
                      </E.RecommendCardTitle>
                      <E.RecommendBookmark>
                        {!props.dataForPicked?.fetchUseditemsIPicked
                          .map((pick) => pick._id)
                          .includes(el._id) ? (
                          <Icon
                            name="bookmark-outline"
                            size={20}
                            color={'rgba(0, 0, 0, 0.4)'}
                            onPress={props.onPressPick(el)}
                          />
                        ) : (
                          <Icon
                            name="bookmark"
                            size={20}
                            color={'#448800'}
                            onPress={props.onPressPick(el)}
                          />
                        )}
                      </E.RecommendBookmark>
                    </E.RecommendCardDetails>
                  </E.RecommendCard>
                ))
                .reverse()
                .splice(0, 4)}
            </E.RecommendList>
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
