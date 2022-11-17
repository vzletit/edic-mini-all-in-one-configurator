import React from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@rneui/themed';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';
import { setConfigItem } from '../../slices/settingsSlice';

export default function SliderInput(props) {
  const {
 minValue,
 maxValue,
 fieldKeyName,
 groupName = null,
 value,
 minName = t('LESS'),
 maxName = t('MORE'),
 disabled,
} = props;

  const dispatch = useDispatch();
    return (
      <View style={{ flexDirection: 'column' }}>
        <Slider
          style={{ width: '100%', alignItems: 'stretch', height: 20 }}
          value={value}
          allowTouchTrack={!disabled}
          step={1}
          disabled={disabled}
          onValueChange={(newValue) => {
            dispatch(setConfigItem({ groupName, keyName: fieldKeyName, value: newValue }));
          }}
          maximumValue={maxValue}
          minimumValue={minValue}
          minimumTrackTintColor={disabled ? styles.disabled.color : styles.slider.primaryColor}
          thumbTintColor={disabled ? styles.disabled.color : styles.slider.primaryColor}
          thumbStyle={{ height: 15, width: 20 }}
        />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{
            fontSize: 12,
            color: disabled ? styles.disabled.color : styles.slider.secondaryColor,
}}
          >
            {minName}
          </Text>
          <Text style={{ color: disabled ? styles.disabled.color : styles.slider.primaryColor }}>
            {value}

          </Text>
          <Text style={{
            fontSize: 12,
            color: disabled ? styles.disabled.color : styles.slider.secondaryColor,
}}
          >
            {maxName}
          </Text>
        </View>
      </View>
    );
}

const styles = EStyleSheet.create({

  slider: {
    primaryColor: '$primaryColor',
    secondaryColor: '$regularTextColor',
  },

  container: {
    flex: 1,
  },

  disabled: {
    color: '$disabledTextColor',
},

});
