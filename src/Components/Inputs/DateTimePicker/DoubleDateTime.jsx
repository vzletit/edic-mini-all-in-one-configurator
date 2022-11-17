import React from 'react';
import { Text } from 'react-native';
import { t } from 'i18next';
import { MaterialIcons } from '@expo/vector-icons';
import SingleDateTime from './SingleDateTime';
import { stringToDate } from '../../../utils/dateTimeUtils';

export default function DoubleDateTime(props) {
  const {
    disabled,
    value,
    styles,
    dailyIsActive,
    dateTimeSplitters,
    dailyMessage = '',
    groupName,
    fieldKeyName,
    hasStop = false,
  } = props;

  const propsForPicker = {
    styles,
    disabled,
    dailyMessage,
    dailyIsActive,
    value,
    groupName,
    fieldKeyName,
    dateTimeSplitters,
    hasStop,
  };

const stopBeforeStart = hasStop
? stringToDate(value.stopDateTime) < stringToDate(value.startDateTime)
: false;

  return (
    <>
      <SingleDateTime {...propsForPicker} />
      { !dailyIsActive
      ? (
        <>
          <SingleDateTime {...propsForPicker} isStop />
          { stopBeforeStart
          ? (
            <Text style={styles.error}>
              <MaterialIcons name="error-outline" style={styles.error} />
              {' '}
              {t('ERROR_TIMER_STOPBEFORESTART')}
            </Text>
)
          : null}
        </>
)
      : null }
    </>
  );
}
