import { View, Text } from 'react-native';
import React from 'react';

export default function DailyMode(props) {
  const { styles, dailyMessage, disabled } = props;

  return (
    <View style={{ ...styles.dailyMode.container }}>
      <Text
        style={{ ...styles.dailyMode.message, ...(disabled ? styles.disabled : null) }}
      >
        {dailyMessage}
      </Text>
    </View>
  );
}
