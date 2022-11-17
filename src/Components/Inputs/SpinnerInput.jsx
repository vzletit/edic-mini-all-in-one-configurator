import React from 'react';
import InputSpinner from 'react-native-input-spinner';

import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import { setConfigItem } from '../../slices/settingsSlice';

export default function SpinnerInput(props) {
  const {
 value, minValue, maxValue, fieldKeyName,
 groupName = null,
 disabled = false,
} = props;

  const dispatch = useDispatch();

    return (
      <InputSpinner
        style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}
        height={40}
        width="80%"
        max={maxValue}
        min={minValue}
        disabled={disabled}
        editable={!disabled}
        longStep={5}
        colorLeft={disabled ? styles.disabled.color : styles.spinner.color}
        colorRight={disabled ? styles.disabled.color : styles.spinner.color}
        textColor={disabled ? styles.disabled.color : styles.spinner.color}
        value={value}
        speed={2}
        inputStyle={styles.spinner.input}
        background={styles.spinner.background.color}
        rounded
        onChange={(newValue) => { dispatch(setConfigItem({ groupName, keyName: fieldKeyName, value: newValue })); }}
      />
    );
}

const styles = EStyleSheet.create({
  disabled: {
    color: '$disabledTextColor',
},

  spinner: {
    color: '$primaryColor',
    background: { color: '$backgroundColor' },
    input: { fontSize: 18 },

  },
  container: {
    flex: 1,
  },

});
