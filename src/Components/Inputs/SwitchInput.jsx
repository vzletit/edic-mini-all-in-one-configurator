import React from 'react';
import { Switch } from '@rneui/themed';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { t } from 'i18next';
import { setConfigItem } from '../../slices/settingsSlice';

export default function SwitchInput(props) {
const {
 groupName = null, value, fieldKeyName, disabled = false, confirm,
 } = props;

  const dispatch = useDispatch();
    return (
      <Switch
        disabled={disabled}
        color={EStyleSheet.value('$primaryColor')}
        value={value}
        onValueChange={(newValue) => {
            confirm && !value ? Alert.alert(confirm.title, confirm.helper, [
              {
 text: t('YES'),
onPress: () => {
                dispatch(setConfigItem({ groupName, keyName: fieldKeyName, value: newValue }));
              },
},
              { text: t('NO'), onPress: () => { } },
            ])
            : dispatch(setConfigItem({ groupName, keyName: fieldKeyName, value: newValue }));
}}
      />
    );
}
