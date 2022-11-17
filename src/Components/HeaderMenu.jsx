import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';

import { t } from 'i18next';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function HeaderMenu({ navigation }) {
  return (
    <Menu>
      <MenuTrigger>
        <Entypo name="menu" size={28} color={EStyleSheet.value('$invertedTextColor')} />
      </MenuTrigger>
      <MenuOptions style={{ padding: 10 }}>
        <MenuOption
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onSelect={() => { navigation.navigate('About page'); }}

        >
          <Text
            style={{ fontSize: 16, color: EStyleSheet.value('$primaryColor') }}
          >
            {t('MENU_ABOUT')}
          </Text>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={EStyleSheet.value('$primaryColor')}

          />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
