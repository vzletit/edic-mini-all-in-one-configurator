import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Image } from '@rneui/themed';
import { t } from 'i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configs from './Configs';
import ConfigPage from './ConfigPage';

import HeaderMenu from '../Components/HeaderMenu';
import AboutPage from './AboutPage';

import imageLogo from '../../assets/emc_logo.png';

SplashScreen.preventAutoHideAsync();

const headerLogo = () => (
  <Image
    resizeMode="contain"
    style={{ width: 150, height: 70 }}
    source={imageLogo}
  />
);

function HeaderMenuButton(navigation) {
  return <HeaderMenu navigation={navigation} />;
}

export default function ScrensStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => HeaderMenuButton(navigation),
        headerStyle: {
          backgroundColor: EStyleSheet.value('$primaryColor'),
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Screen
        name="list"
        component={Configs}
        options={() => ({
          title: null,
          headerTitle: headerLogo,
        })}
      />

      <Stack.Screen
        name="Config page"
        component={ConfigPage}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />

      <Stack.Screen
        name="About page"
        component={AboutPage}
        options={{ title: t('MENU_ABOUT') }}
      />
    </Stack.Navigator>
  );
}
