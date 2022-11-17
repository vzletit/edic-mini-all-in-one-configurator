import React, { useEffect, useState } from 'react';
import {
 View, Alert, TouchableOpacity, ActivityIndicator, ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { ListItem, Icon } from '@rneui/themed';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { default as Text } from 'react-native-text';
import {
 Menu, MenuOptions, MenuOption, MenuTrigger,
} from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentConfig } from '../slices/settingsSlice';
import {
  configSelectors,
  removeConfig,
  loadStored,
  saveToStorage,
  setErrorMsg,
} from '../slices/configsSlice';
import exportFile from '../utils/exportFile';
import NewConfig from './NewConfig';

export default function Configs({ navigation }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [newConfigOverlay, setNewConfigOverlay] = useState(false);

  const allConfigs = useSelector(configSelectors.selectAll);
  const status = useSelector((store) => store.configs.status);

  useEffect(() => {
    switch (status) {
      case 'readySavingStorage':
        dispatch(saveToStorage(allConfigs));
        break;

      case 'readyLoadingStorage':
        dispatch(loadStored());
        break;

      default:
        setErrorMsg(t('ERROR_UNKNOWN_MODE'));
    }
  }, [status]);

  const setConfigDataToStore = (configData) => {
    dispatch(setCurrentConfig(configData.data));
  };

  const handlePressEdit = (item) => {
    setConfigDataToStore(allConfigs.filter((config) => config.id === item.id)[0]);

    navigation.navigate('Config page', { id: item.id, name: item.data.name });
  };

  const handlePressExport = (item) => exportFile(item.data);

  const handlePressDelete = (item) => Alert.alert(
      `${t('CONFIRM_DELETE_TITLE')}`,
      `${t('CONFIRM_DELETE_TEXT')} ${item.data.name}?`,
      [
        {
          text: t('YES'),
          onPress: () => {
            dispatch(removeConfig(item.id));
          },
          style: 'destructive',
        },
        {
          text: t('NO'),
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1, flexDirection: 'column' }}>
        {status === 'idle' ? (
          allConfigs.map((item) => (
            <ListItem bottomDivider key={item.id} onPress={() => handlePressEdit(item)}>
              <Icon name="settings" color={EStyleSheet.value('$primaryColor')} />
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{item.data.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>
                  {item.data.readableType}
                </ListItem.Subtitle>
              </ListItem.Content>

              <Menu>
                <MenuTrigger>
                  <Entypo
                    name="dots-three-vertical"
                    size={18}
                    color={EStyleSheet.value('$primaryColor')}
                  />
                </MenuTrigger>
                <MenuOptions style={{ padding: 10 }}>
                  <MenuOption style={styles.menuContainer} onSelect={() => handlePressExport(item)}>
                    <Text style={styles.menuItem}>{t('EXPORT')}</Text>
                    <MaterialCommunityIcons
                      name="download"
                      size={EStyleSheet.value('$veryLargeFontSize')}
                      color={EStyleSheet.value('$primaryColor')}
                    />
                  </MenuOption>

                  <MenuOption style={styles.menuContainer} onSelect={() => handlePressDelete(item)}>
                    <Text style={styles.menuItemRed}>{t('DELETE')}</Text>
                    <MaterialCommunityIcons
                      name="delete"
                      size={EStyleSheet.value('$veryLargeFontSize')}
                      color={EStyleSheet.value('$errorColor')}
                    />
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </ListItem>
          ))
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        <View
          style={{
            minHeight: 170,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setNewConfigOverlay(true)}
          >
            <Ionicons
              name="md-add-circle-outline"
              size={80}
              color={EStyleSheet.value('$primaryColor')}
            />
            <Text
              style={{ paddingTop: 10, color: EStyleSheet.value('$primaryColor'), fontSize: 18 }}
            >
              {t('ADD_CONFIG')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NewConfig
        visible={newConfigOverlay}
        setNewConfigOverlay={setNewConfigOverlay}
        navigation={navigation}
      />
    </>
  );
}

const styles = EStyleSheet.create({
  title: {
    color: '$primaryColor',
    fontSize: '$titleFontSize',
  },

  subtitle: {
    color: '$mutedTextColor',
    fontSize: '$subTitleFontSize',
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  menuItem: {
    fontSize: '$veryLargeFontSize',
    color: '$primaryColor',
  },

  menuItemRed: {
    fontSize: '$veryLargeFontSize',
    color: '$errorColor',
  },
});
