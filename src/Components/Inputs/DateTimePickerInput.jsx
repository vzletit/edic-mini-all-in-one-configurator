import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import SingleDateTime from './DateTimePicker/SingleDateTime';
import DoubleDateTime from './DateTimePicker/DoubleDateTime';

function ClockMessage({
  styles,
  clockMessage,
  disabled,
}) {
  return (
    <View style={{
    ...styles.singleContainerWithMsg.singleContainer,
    ...disabled ? styles.disabled : null,
    }}
    >
      <MaterialIcons name="phone-iphone" style={{ ...styles.clockMsg.icon, ...disabled ? styles.disabled : null }} />
      <Text style={{ ...styles.clockMsg.text, ...disabled ? styles.disabled : null }}>{clockMessage}</Text>
    </View>
  );
}

export default function DateTimePickerInput(props) {
  const {
    disabled,
    clockMode = false,
    value,
    dailyIsActive = false,
    dailyMessage = null,
    dateTimeSplitters,
    groupName,
    fieldKeyName,
    displayClockMessage = false,
    clockMessage = '',
  } = props;

  const hasStop = Boolean(value.stopDateTime);

  const propsForPicker = {
    disabled,
    value,
    styles,
    clockMode,
    dateTimeSplitters,
    dailyIsActive,
    dailyMessage,
    displayClockMessage,
    clockMessage,
    groupName,
    fieldKeyName,
    hasStop,
  };

  const propsForClockMessage = { styles, clockMessage, disabled };

  return (
    <View style={styles.mainContainer}>
      {displayClockMessage ? (
        <ClockMessage {...propsForClockMessage} />
      ) : hasStop ? (
        <DoubleDateTime {...propsForPicker} />
      ) : (
        <SingleDateTime {...propsForPicker} />
      )}
    </View>
  );
}

const styles = EStyleSheet.create({
  disabled: {
    color: '$disabledTextColor',
    borderColor: '$disabledTextColor',
  },

  error: {
    color: '$errorColor',
    fontSize: '$smallFontSize',
  },

  mainContainer: {
    flexDirection: 'column',
    flex: 1,
  },

  clockMsg: {
    icon: {
      fontSize: '$largeFontSize',
      color: '$primaryLightColor',
      paddingTop: 3,
      marginRight: 5,
      marginLeft: -10,
    },

    text: {
      color: '$darkTextColor',
      fontSize: '$largeFontSize',
    },
  },

  dailyMode: {
    container: {},
    message: {
      fontSize: '$largeFontSize',
      color: '$darkTextColor',
      marginRight: 10,
      marginLeft: -10,
    },
  },

  date: {

    container: {
      flexDirection: 'row',
      marginRight: 10,
      borderRadius: 10,
    },
    textDate: {
      color: '$primaryColor',
      fontSize: '$largeFontSize',
      borderWidth: 0,
      alignSelf: 'baseline',

    },
    textYear: {
      alignSelf: 'baseline',
      color: '$darkTextColor',
      fontSize: '$largeFontSize',
      marginLeft: 5,
    },
  },

  time: {
    container: {},
    icon: {
      container: {
        borderWidth: 1,
      },
      fontSize: '$smallFontSize',
      color: '$mutedTextColor',
    },

    text: {
      color: '$primaryColor',
      fontWeight: 'bold',
      alignSelf: 'baseline',
      textAlign: 'center',
      fontSize: '$largeFontSize',
    },
  },

  singleContainerWithMsg: {
    message: {
      alignSelf: 'flex-start',
      backgroundColor: '$generalBackgroundColor',
      color: '$regularTextColor',
      fontSize: '$smallFontSize',
      flex: 0,
      marginRight: -15,
      marginTop: 10,
      zIndex: 100,
    },

    singleContainer: {
      flexDirection: 'row',
      borderColor: '$primaryLightColor',
      borderWidth: 1,
      borderRadius: 15,
      padding: 5,
      paddingLeft: 20,
      paddingRight: 10,
      marginBottom: 10,
      alignSelf: 'flex-start',
    },

    flexDirection: 'row',
    alignContent: 'flex-start',
  },

  doubleContainer: {},

  dash: {
    fontSize: '$titleFontSize',
    color: '$regularTextColor',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
});
