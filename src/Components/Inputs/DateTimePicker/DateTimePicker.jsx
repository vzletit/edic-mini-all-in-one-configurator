import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { t } from 'i18next';
import { default as NativeDateTimePicker } from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { setConfigItem } from '../../../slices/settingsSlice';
import {
  getLaterDate,
  dateToString,
  timeToString,
  stringToDate,
  completeTimeWithZeros,
} from '../../../utils/dateTimeUtils';

const monthsUI = {
  0: t('JANUARY'),
  1: t('FEBRUARY'),
  2: t('MARCH'),
  3: t('APRIL'),
  4: t('MAY'),
  5: t('JUNE'),
  6: t('JULY'),
  7: t('AUGUST'),
  8: t('SEPTEMBER'),
  9: t('OCTOBER'),
  10: t('NOVEMBER'),
  11: t('DECEMBERBER'),
};

const renderByMode = {
  date: ({
 styles, disabled, handleOnPress, nativePickerValue,
}) => (
  <View style={styles.date.container}>
    <Text
      style={{
          ...styles.date.textDate,
          ...(disabled ? styles.disabled : null),
        }}
      onPress={handleOnPress}
    >
      {`${nativePickerValue.getDate()} ${monthsUI[nativePickerValue.getMonth()]}`}
    </Text>
    <Text
      style={{
          ...styles.date.textYear,
          ...(disabled ? styles.disabled : null),
        }}
      onPress={handleOnPress}
    >
      {nativePickerValue.getFullYear()}
    </Text>
  </View>

  ),

  time: ({
 styles, disabled, handleOnPress, nativePickerValue,
}) => (
  <View style={{
      ...styles.time.container,
      }}
  >
    <Text
      style={{
          ...styles.time.text,
          ...(disabled ? { ...styles.disabled } : null),
        }}
      onPress={handleOnPress}
    >
      {`${completeTimeWithZeros(nativePickerValue.getHours())}:${completeTimeWithZeros(
          nativePickerValue.getMinutes(),
        )}`}
    </Text>
  </View>
  ),
};

export default function DateTimePicker(props) {
  const {
    mode, // 'date' || 'time'
    isStop = false,
    disabled,
    styles = {},
    value,
    dateTimeSplitters,
    groupName,
    fieldKeyName,
  } = props;

  const { startDateTime, stopDateTime } = value;

  const [showNativePicker, setShowNativePicker] = useState(false);

  const nativePickerValue = isStop
  ? getLaterDate(stringToDate(stopDateTime), new Date(Date.now()))
  : getLaterDate(stringToDate(startDateTime), new Date(Date.now()));
  const dispatch = useDispatch();

  const handleOnPress = () => (!disabled ? setShowNativePicker(true) : null);

  const handleNewPickerValue = (event, newDateTimeObj) => {
    setShowNativePicker(false);

    if (event.type === 'set') {
      const formattedNewDateTime = {
        date: dateToString(newDateTimeObj, dateTimeSplitters.date),
        time: timeToString(newDateTimeObj, dateTimeSplitters.time),
      };

      const updatedKey = isStop ? 'stopDateTime' : 'startDateTime';

      const objForDispatch = {
        groupName,
        isStop,
        error,
        keyName: fieldKeyName,
        value: {
          ...value,
          [updatedKey]: formattedNewDateTime,
        },
      };

      dispatch(setConfigItem(objForDispatch));
    }
  };

  const error = isStop && (stringToDate(stopDateTime) < stringToDate(startDateTime));

 const propsForRenderByMode = {
 styles, disabled, handleOnPress, nativePickerValue,
};

  return (
    <>
      {renderByMode[mode](propsForRenderByMode)}
      {showNativePicker ? (
        <NativeDateTimePicker
          minimumDate={Date.now()}
          value={nativePickerValue}
          mode={mode}
          // вносим поправку на таймзону и меняем - на +, чтоб пикер показывал время, как ему подали из стейта
          timeZoneOffsetInMinutes={Math.abs(nativePickerValue.getTimezoneOffset())}
          is24Hour
          onChange={handleNewPickerValue}
        />
      ) : null}
    </>
  );
}
