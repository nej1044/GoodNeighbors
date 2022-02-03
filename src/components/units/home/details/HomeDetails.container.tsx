import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import HomeDetailsUI from './HomeDetails.presenter';
import { IPropNavigation } from './HomeDetails.types';
import { useQuery, useMutation } from '@apollo/client';
import {
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS,
} from './HomeDetails.queries';

export default function HomeDetails({ route, navigation }: IPropNavigation) {
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });

  const { data: dataForPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: '',
    },
  });

  const [firedata, setFiredata] = useState({});
  const [homeData, setHomeData] = useState({});
  const [planTitle, setPlanTitle] = useState('');
  const [people, setPeople] = useState(0);
  const HomeCollection = firestore().collection('home');
  const docRef = HomeCollection.doc(data?.fetchUseditem._id);
  const suppoterRef = HomeCollection.doc(route.params?.useditemId);

  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      await docRef.get().then((doc) => setHomeData({ ...doc.data()?.EndAt }));
      await docRef.get().then((doc) => setPlanTitle(doc.data()?.plansTitle));
      await docRef.get().then((doc) => setPeople(doc.data()?.suppoters));
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const getDate = new Date(homeData._seconds * 1000);

  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      HomeCollection.doc(route.params?.useditemId)
        .get()
        .then((doc) => setFiredata({ ...doc.data() }));
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const onPressSupport = () => {
    suppoterRef.update({ suppoters: firedata?.suppoters + 1 });

    navigation.navigate('homePayment', { useditemId: route.params.useditemId });
  };

  const onPressPick = (el: any) => async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              search: '',
            },
          },
          {
            query: FETCH_USEDITEMS_I_PICKED,
            variables: {
              search: '',
            },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HomeDetailsUI
      route={route}
      data={data}
      dataForPicked={dataForPicked}
      getDate={getDate}
      planTitle={planTitle}
      people={people}
      onPressSupport={onPressSupport}
      navigation={navigation}
      onPressPick={onPressPick}
    />
  );
}
