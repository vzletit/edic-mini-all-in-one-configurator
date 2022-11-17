import React from 'react';
import { Input } from '@rneui/themed';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { validateInput } from '../../utils/validateInput';
import { setConfigItem } from '../../slices/settingsSlice';

export default function Password(props) {
  const {

    fieldKeyName = 'password',
    groupName = 'password',
    value,
    maxLength,
    disabledValue,
    validationScheme,
    errorMessage,
    keyboardType,
    placeholder,
  } = props;

  const dispatch = useDispatch();
  const isValid = (inputValue) => validateInput(inputValue, validationScheme);
  const completeWithZeros = (input) => input + '0'.repeat(maxLength - input.length);

  const validateLength = (inputValue) => (inputValue.length > 0 ? completeWithZeros(inputValue) : inputValue);

  return (
    <View style={styles.container}>
      <Input
        style={{ textAlign: 'center', color: EStyleSheet.value('$primaryColor') }}
        returnKeyType="done"
        leftIcon={
          value === disabledValue
            ? { type: 'entypi', name: 'lock-open', color: EStyleSheet.value('$primaryLightColor') }
            : { type: 'entypi', name: 'lock', color: EStyleSheet.value('$primaryLightColor') }
        }
        keyboardType={keyboardType}
        maxLength={maxLength}
        minLength={0}
        value={value}
        placeholder={placeholder}
        onBlur={() => {
          if (value.length) {
            dispatch(setConfigItem({ groupName, keyName: fieldKeyName, value: validateLength(value.toString()) }));
          }
        }}
        onChangeText={(inputValue) => {
          isValid(inputValue) ? dispatch(setConfigItem({
            groupName,
            keyName: fieldKeyName,
            value: inputValue.toString(),
})) : null;
        }}
        errorStyle={styles.error}
        errorMessage={value.length > 0 && value.length !== maxLength ? errorMessage : null}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  disabled: {
    color: '$disabledTextColor',
  },

  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
  },

  error: { color: '$errorColor' },
});
