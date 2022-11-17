import React, { useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
 Text, View, Alert, ScrollView,
} from 'react-native';
import { Overlay, Input, Button } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';
import exportFile from '../utils/exportFile';
import * as handlers from '../slices/settingsSlice';

import {
 updateConfig, addConfig, configSelectors, setStatus,
} from '../slices/configsSlice';

import SelectorItem from '../Components/SelectorItem';

import GroupSelectorItems from '../Components/GroupSelectorItems';

import ButtonsInput from '../Components/Inputs/ButtonsInput';
import SliderInput from '../Components/Inputs/SliderInput';
import SwitchInput from '../Components/Inputs/SwitchInput';
import SpinnerInput from '../Components/Inputs/SpinnerInput';
import Password from '../Components/Inputs/Password';
import DateTimePickerInput from '../Components/Inputs/DateTimePickerInput';

const inputTypeMapping = {
  ButtonsInput: (params) => <ButtonsInput {...params} />,
  SliderInput: (params) => <SliderInput {...params} />,
  SwitchInput: (params) => <SwitchInput {...params} />,
  SpinnerInput: (params) => <SpinnerInput {...params} />,
  Password: (params) => <Password {...params} />,
  DateTimePickerInput: (params) => <DateTimePickerInput {...params} />,
};

function renderConfigFields(params) {
  const { confData, groupName = null, disabled = false } = params;

  return Object.keys(confData).map((fieldKeyName, index) => {
    const newParams = {
      ...params,
      ...confData[fieldKeyName],
      fieldKeyName,
      lastChildInGroup: index === Object.keys(confData).length - 1,
      groupName,
      disabled: groupName ? (index > 0 ? disabled : false) : disabled,
    };

    // Selector || Group
    return renderByType[confData[fieldKeyName].type](newParams);
  });
}

const renderByType = {
  SelectorItem: (params) => {
    const { fieldKeyName, groupName } = params;
    return (
      <SelectorItem key={fieldKeyName} {...params} inGroup={Boolean(groupName)}>
        {inputTypeMapping[params.inputType](params)}
      </SelectorItem>
    );
  },

  GroupSelectorItems: (params) => {
    const groupName = params.fieldKeyName;
    const { headerDisplayMode } = params;

    let headerParamsObj = {};
    let childrenParamsObj = {};

    switch (headerDisplayMode) {
      case 'timer': {
        const isDaily = Boolean(params.fields?.daily);
        const dailyIsActive = isDaily ? params.fields.daily.value : null;
        const dailyMessage = isDaily ? params.fields.daily.message : null;

        headerParamsObj = {
          dailyIsActive,
          dailyMessage,
          startDateTime: params.fields.dateTimeSelector.value.startDateTime,
          stopDateTime: params.fields.dateTimeSelector.value?.stopDateTime ?? null,
        };

        childrenParamsObj = {
          isDaily,
          dailyIsActive,
          dailyMessage,
        };
        break; }

      case 'clock': {
        headerParamsObj = {};
        childrenParamsObj = {
          clockMode: true,
          displayClockMessage: params.fields.autoUpdateClock.value,
          clockMessage: params.fields.autoUpdateClock.message,
        };
        break; }

        default: { break; }
    }

    const confParams = {
      ...params,
      ...childrenParamsObj,
      confData: params.fields,
      groupName,
      disabled: !params.fields.enableSwitch.value,
    };
    return (
      <GroupSelectorItems
        key={groupName}
        headerDisplayMode={params.headerDisplayMode}
        enableSwitch={params.fields.enableSwitch}
        headerParams={headerParamsObj}
        title={params.headerTitle}
      >
        {renderConfigFields(confParams)}
      </GroupSelectorItems>
    );
  },
};

function SaveAndExport() {
  const dispatch = useDispatch();

  const currentConfigData = useSelector((state) => state.EMsettings.currentConfig);

  const handleExport = async () => {
    dispatch(setStatus('idle'));
    await exportFile(currentConfigData);
  };

  return (
    <View style={styles.bottomPanel.container}>
      <Button
        type="clear"
        title={t('SAVE')}
        onPress={() => {
          dispatch(setStatus('showingSaveDialog'));
        }}
        icon={{
          name: 'save',
          type: 'font-awesome',
          size: 15,
          color: styles.bottomPanel.saveButton.color,
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{
          color: styles.bottomPanel.saveButton.color,
          textTransform: 'uppercase',
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        }}
        containerStyle={{
          flex: 1,
        }}
      />
      <Button
        type="clear"
        title={t('EXPORT')}
        onPress={handleExport}
        icon={{
          name: 'download',
          type: 'font-awesome',
          size: 15,
          color: styles.bottomPanel.exportButton.color,
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{
          color: styles.bottomPanel.saveButton.color,
          textTransform: 'uppercase',
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        }}
        containerStyle={{
          flex: 1,
        }}
      />
    </View>
  );
}

export default function ConfigPage({ navigation, route }) {
  const dispatch = useDispatch();

  const { id } = route.params;

  const currentConfigData = useSelector((state) => state.EMsettings.currentConfig);

  const ids = useSelector(configSelectors.selectIds);
  const status = useSelector((state) => state.configs.status);
  const isConfigModified = useSelector((state) => state.configs.isConfigModified);
  const tempConfigName = useSelector((state) => state.EMsettings.tempConfigName);

  const newId = () => (ids.length > 0 ? ids[ids.length - 1] + 1 : 0);

  useEffect(() => {
    dispatch(handlers.setTempConfigName(currentConfigData.name));
  }, []);

  useEffect(() => {
    dispatch(handlers.setTempConfigName(currentConfigData.name));
  }, []);

  useEffect(() => {
    const backButtonListener = () => {
      if (!isConfigModified || status === 'showingSaveDialog') {
        return;
      }

      // eslint-disable-next-line consistent-return
      return navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

        Alert.alert(`${t('CONFIRM_GO_BACK_TITLE')}`, `${t('CONFIRM_GO_BACK_TEXT')}`, [
          {
            text: t('YES'),
            style: 'destructive',
            onPress: () => {
              navigation.dispatch(e.data.action);
            },
          },
          {
            text: t('NO'),
            style: 'cancel',
          },
        ]);
      });
    };

    // вызываем при демонтировании ConfigPage
    return backButtonListener();
  }, [navigation, isConfigModified, status]);

  const handleSave = () => {
    if (typeof id !== 'undefined') {
      dispatch(
        updateConfig({
          id,
          changes: { data: { ...currentConfigData, name: tempConfigName } },
        }),
      );
    } else {
      dispatch(
        addConfig({
          id: newId(),
          data: { ...currentConfigData, name: tempConfigName },
        }),
      );
    }
    navigation.navigate('list');
  };

  return (
    <>
      <ScrollView style={{ ...styles.screen }}>
        {renderConfigFields({
          confData: currentConfigData.fields,
          dateTimeSplitters: currentConfigData.dateTimeSplitters,
        })}
      </ScrollView>
      <SaveAndExport />

      <Overlay
        isVisible={status === 'showingSaveDialog'}
        overlayStyle={{ width: '80%' }}
        onBackdropPress={() => dispatch(setStatus('idle'))}
      >
        <Text style={styles.header}>{t('NEW_CONFIG_SET_NAME')}</Text>
        <Input
          defaultValue={tempConfigName}
          onChangeText={(value) => dispatch(handlers.setTempConfigName(value))}
          selectTextOnFocus
          maxLength={30}
          style={styles.input}
          errorStyle={styles.error}
          errorMessage={tempConfigName.length < 2 ? t('NEW_CONFIG_SET_NAME_ERROR') : null}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Button
            type="clear"
            titleStyle={styles.button.ok}
            onPress={handleSave}
            containerStyle={{ marginRight: 10 }}
            title={t('OK')}
          />

          <Button
            titleStyle={styles.button.cancel}
            type="clear"
            title={t('CANCEL')}
            onPress={() => {
              dispatch(handlers.setTempConfigName(currentConfigData.name));
              dispatch(setStatus('idle'));
            }}
            containerStyle={{ marginRight: 10 }}
          />
        </View>
      </Overlay>
    </>
  );
}

const styles = EStyleSheet.create({
  screen: { backgroundColor: '$generalBackgroundColor' },
  header: {
    color: '$primaryColor',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: { width: '90%' },
  error: { color: '$errorColor' },

  button: {
    ok: { color: '$primaryColor', textTransform: 'uppercase' },
    cancel: { color: '$primaryLightColor', textTransform: 'uppercase' },
    save: {},
    export: { color: '$primaryColor', textTransform: 'uppercase' },
  },

  bottomPanel: {
    container: {
      padding: 5,
      backgroundColor: '$primaryColor',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },

    saveButton: { color: '$invertedTextColor', textTransform: 'uppercase' },
    exportButton: { color: '$invertedTextColor', textTransform: 'uppercase' },
  },
});
