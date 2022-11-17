import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import './i18n.config';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Toast from 'react-native-toast-message';
import store from './src/slices/index';

import theme from './src/styles/theme';
import handleToasts, { toastConfig } from './src/utils/handleToasts';

import ScreensStack from './src/Screens/ScreensStack';

SplashScreen.preventAutoHideAsync();

EStyleSheet.build(theme);

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise((resolve) => { setTimeout(resolve, 2000); });
            } catch (e) {
                console.log(e);
            } finally {
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    handleToasts();

    return appIsReady ? (
      <Provider store={store}>
        <MenuProvider>
          <NavigationContainer>
            <ScreensStack />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </MenuProvider>
      </Provider>
    ) : null;
}
