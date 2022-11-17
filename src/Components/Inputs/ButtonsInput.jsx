import { ListItem } from '@rneui/base';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch, useSelector } from 'react-redux';
import { setConfigItem } from '../../slices/settingsSlice';

export default function ButtonsInput(props) {
  const {
    fieldKeyName,
    groupName = null,
    disabled = false,
    values,
    value,
    names,
    disabledArrKey = null,
    disabledArrMapping,
   } = props;

  const dispatch = useDispatch();

    const keyNameForDisabledArray = useSelector((state) => (disabledArrKey
      ? state.EMsettings.currentConfig.fields[disabledArrKey].value
      : null));

    const disabledArray = disabledArrKey ? disabledArrMapping[keyNameForDisabledArray] : null;

  return (
    <ListItem.ButtonGroup
      disabled={disabledArray || disabled}
      textStyle={styles.buttonNotSelected}
      containerStyle={styles.container}
      selectedButtonStyle={styles.buttonSelected}
      disabledSelectedTextStyle={styles.buttonSelectedDisabled}
      onPress={(newValue) => {
        dispatch(setConfigItem({
 keyName: fieldKeyName,
          groupName,
          value: values[newValue],
}));
      }}
      selectedIndex={values.indexOf(value)}
      buttons={names}
    />
  );
}

const styles = EStyleSheet.create({
  buttonSelected: {
    color: '$invertedTextColor',
    backgroundColor: '$primaryColor',
  },
  buttonSelectedDisabled: {},
  buttonNotSelected: {
    color: '$primaryLightColor',

  },
  container: {
    borderWidth: 0.5,

    flex: 1,
    color: '$primaryColor',
  },
});
