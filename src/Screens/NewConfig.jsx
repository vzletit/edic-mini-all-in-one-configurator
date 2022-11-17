import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
 Overlay, Tab, Text, TabView,
} from '@rneui/themed';

import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentConfig } from '../slices/settingsSlice';

import { mapSerieToFile, mapModelToFile } from '../configData/configMapping';

export default function NewConfig({
  navigation,
  visible = false,
  setNewConfigOverlay,
}) {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleNewConfigPage = (configData) => {
    setNewConfigOverlay(false);
    dispatch(setCurrentConfig(configData.parameters));
    navigation.navigate('Config page', {
      name: configData.parameters.name,
    });
  };

  return (
    <Overlay
      isVisible={visible}
      overlayStyle={{
 width: '90%',
 height: 400,
 padding: 0,
borderRadius: 10,
}}
      onBackdropPress={() => {
        setNewConfigOverlay(false);
      }}
    >
      <Text
        style={{
          padding: 15,
          fontSize: 20,
          color: EStyleSheet.value('$primaryColor'),
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {t('NEW_CONFIG_TITLE')}
      </Text>

      <Tab
        value={index}
        style={{}}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: EStyleSheet.value('$primaryColor'),
          height: 1,
        }}
        variant="primary"
      >
        <Tab.Item
          title={t('NEW_CONFIG_BY_SERIE')}
          titleStyle={styles.tabItem.text}
          containerStyle={{ backgroundColor: 'white' }}
          icon={{
            name: 'view-list',
            type: 'materialicons',
            color: styles.tabItem.icon.color,
            size: 22,
          }}
        />

        <Tab.Item
          title={t('NEW_CONFIG_BY_MODEL')}
          titleStyle={styles.tabItem.text}
          containerStyle={{ backgroundColor: 'white' }}
          icon={{
            name: 'list',
            type: 'materialicons',
            color: styles.tabItem.icon.color,
            size: 22,
          }}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        containerStyle={{ overflow: 'hidden', height: 'auto' }}
      >
        <TabView.Item style={styles.tabViewArea}>
          <View
            style={styles.container}
          >
            {Object.keys(mapSerieToFile).map((serieName) => (
              <TouchableOpacity
                key={serieName}
                onPress={() => {
                    handleNewConfigPage(mapSerieToFile[serieName]);
                  }}
              >
                <Text style={styles.itemButton}>
                  {mapSerieToFile[serieName].parameters.readableType}
                </Text>
              </TouchableOpacity>
              ))}
          </View>
        </TabView.Item>

        <TabView.Item style={styles.tabViewArea}>
          <View
            style={styles.container}

          >
            {Object.keys(mapModelToFile).map((modelName) => (
              <TouchableOpacity
                key={modelName}
                onPress={() => {
                    handleNewConfigPage(mapModelToFile[modelName]);
                  }}
              >
                <Text style={styles.itemButton}>{modelName}</Text>
              </TouchableOpacity>
              ))}
          </View>
        </TabView.Item>
      </TabView>
    </Overlay>
  );
}

const styles = EStyleSheet.create({
  tabItem: {
    icon: { color: '$secondaryColor' },
    text: { color: '$secondaryColor', fontSize: 14 },
  },

  itemButton: {
    color: '$primaryColor',
    borderWidth: 1,
    borderColor: '$primaryLightColor',
    borderRadius: 5,
    margin: 3,
    width: 'auto',
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    // borderWidth: 1,
    height: 250,

  },
  tabViewArea: {
    backgroundColor: 'none',
    width: '100%',
    padding: 15,

  },
});
