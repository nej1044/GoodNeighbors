import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import 'react-native-gesture-handler';
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
// import { getAccessToken } from './src/commons/libraries/getAccessToken';
// import { onError } from '@apollo/client/link/error';
import { firebase } from '@react-native-firebase/firestore';
import { MenuProvider } from 'react-native-popup-menu';
import Navigation from './pages/navigation';
import SplashScreen from 'react-native-splash-screen';
import { LogBox, YellowBox } from 'react-native';

interface IGlobalContext {
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

const firebaseConfig = {
  appId: '1:872992369963:ios:2799b8dbd35b15931be96e',
  apiKey: 'AIzaSyBBC3a_zaO5NkPP3elblUo1jGr-XlMKIxQ',
  projectId: 'goodneighbors-7aa5f',
  storageBucket: 'goodneighbors-7aa5f.appspot.com',
  messagingSenderId: '872992369963',
  databaseURL: 'goodneighbors-7aa5f.firebaseapp.com',
};

export const firebaseStorage = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const App = () => {
  const [accessToken, setMyAccessToken] = useState('');

  LogBox.ignoreAllLogs();

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2500);
    } catch (error) {
      console.warn('에러발생');
      console.warn(error);
    }
  });

  const value = {
    setAccessToken: setMyAccessToken,
  };

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === 'UNAUTHENTICATED') {
  //         operation.setContext({
  //           headers: {
  //             ...operation.getContext().headers,
  //             authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
  //           },
  //         });
  //         return forward(operation);
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: 'https://backend05.codebootcamp.co.kr/graphql',
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // useEffect(() => {
  //   async function accessToken() {
  //     const result = await AsyncStorage.getItem('refreshToken', (_, result) => {
  //       console.log('refreshToken', result);
  //       if (result) {
  //         setMyAccessToken(result);
  //       }
  //     });
  //     console.log(result);
  //   }
  //   accessToken();
  // }, []);

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <MenuProvider>
          <Navigation />
          {/* <SafeAreaView /> */}
        </MenuProvider>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;
