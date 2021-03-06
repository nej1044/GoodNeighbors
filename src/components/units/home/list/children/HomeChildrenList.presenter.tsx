import * as E from './HomeChildrenList.styles';
import ColoredTag from '../../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as React from 'react';
import { IPropsHomeChildrenListUI } from './HomeChildrenList.types';

export default function HomeChildrenListUI(props: IPropsHomeChildrenListUI) {
  return (
    <>
      <E.Wrapper>
        {props.data?.fetchUseditems.map((el) => (
          <E.ChildrenList key={el._id}>
            <E.ChildImgWrapper
              onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
            >
              <Image
                style={{ width: 86, height: 86, borderRadius: 50 }}
                source={{
                  uri: `https://${el.images[0]}`,
                }}
              />
            </E.ChildImgWrapper>
            <E.ChildDetails>
              <E.ChildAbout
                onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
              >
                <E.ChildName>{el.name.split('/')[1]}</E.ChildName>
                <E.ChildBio>{el.remarks}</E.ChildBio>
                <E.ChildrenTags key={el._id}>
                  {el.tags?.map((el, index) => (
                    <ColoredTag
                      key={index}
                      text={`#${el}`}
                      fontSize='8px'
                      padding='4px 8px'
                    />
                  ))}
                </E.ChildrenTags>
              </E.ChildAbout>
              <E.ChildBookmark>
                {!props.dataForPicked?.fetchUseditemsIPicked
                  .map((pick) => pick._id)
                  .includes(el._id) ? (
                  <Icon
                    name="bookmark-outline"
                    size={22}
                    color={'rgba(0, 0, 0, 0.4)'}
                    onPress={props.onPressPick(el)}
                  />
                ) : (
                  <Icon
                    name="bookmark"
                    size={22}
                    color={'#448800'}
                    onPress={props.onPressPick(el)}
                  />
                )}
              </E.ChildBookmark>
            </E.ChildDetails>
          </E.ChildrenList>
        ))}
      </E.Wrapper>
    </>
  );
}
