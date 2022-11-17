import React from 'react';
import { View, Text } from 'react-native';
import { t } from 'i18next';
import DailyMode from './DailyMode';
import DateTimePicker from './DateTimePicker';

export default function SingleDateTime(props) {
  const {
    disabled,
    styles,
    groupName,
    fieldKeyName,
    hasStop,
    dateTimeSplitters,

    clockMode,

    isStop = false,
    value,

    dailyIsActive,
    dailyMessage,
  } = props;

  const propsForDailyMode = { styles, dailyMessage, disabled };

  const propsForPicker = {
    styles,
    disabled,
    value,
    groupName,
    fieldKeyName,
    dateTimeSplitters,
    hasStop,
  };

  return (
    <View style={{
      ...styles.singleContainerWithMsg,
      }}
    >
      { dailyIsActive || clockMode ? null
        : (
          <Text style={{
        ...styles.singleContainerWithMsg.message,
        ...(disabled ? styles.disabled : null),
        }}
          >
            {isStop ? t('TIMER_MSG_STOP') : t('TIMER_MSG_START')}
          </Text>
)}
      <View style={{
          ...styles.singleContainerWithMsg.singleContainer,
          ...(disabled ? styles.disabled : null),
          }}
      >

        { dailyIsActive ? (<DailyMode {...propsForDailyMode} />)
          : <DateTimePicker {...propsForPicker} mode="date" isStop={isStop} />}
        <DateTimePicker {...propsForPicker} mode="time" isStop={isStop} />
        {(dailyIsActive && hasStop) ? (
          <>
            <Text style={{
            ...styles.dash,
            ...(disabled ? styles.disabled : null),
          }}
            >
              —

            </Text>
            <DateTimePicker {...propsForPicker} mode="time" isStop />
          </>
          ) : null}
      </View>
    </View>
  );
}
