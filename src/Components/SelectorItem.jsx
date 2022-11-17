import { ListItem } from '@rneui/base';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
// import {default as Text} from 'react-native-text';

function Title({ title, disabled }) {
  return (
    <Text style={disabled ? { ...styles.title, ...styles.disabled } : styles.title}>{title}</Text>
  );
}

function Helper({ helper, disabled = false }) {
  return (
    <Text style={disabled ? { ...styles.subtitle, ...styles.disabled } : styles.subtitle}>
      {helper}
    </Text>
  );
}

const renderByDisplayMode = {
  dateTimePicker: (props) => {
    const { children, helper, disabled } = props;
    return (
      <>
        <View
          style={{
            marginTop: -30,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          {children}
        </View>
        <Helper disabled={disabled} helper={helper} />
      </>
    );
  },

  inline: (props) => {
    const { children, helper, disabled } = props;
    return (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Helper disabled={disabled} helper={helper} />
        <View style={{ flex: 0 }}>{children}</View>
      </View>
    );
  },

  helperAbove: (props) => {
    // default

    const { children, helper, disabled } = props;
    return (
      <View>
        <Helper disabled={disabled} helper={helper} />
        {children}
      </View>
    );
  },

  helperBelow: (props) => {
    const { children, helper, disabled } = props;
    return (
      <View>
        {children}
        <Helper disabled={disabled} helper={helper} />
      </View>
    );
  },
};

export default function SelectorItem(props) {
  const {
    title,
    displayMode = 'helperAbove',
    disabled = false,
    lastChildInGroup = false,
  } = props;

  return (
    <ListItem
      bottomDivider={lastChildInGroup}
      containerStyle={{ ...styles.container }}
    >
      <View style={{ width: '100%' }}>
        {title ? <Title disabled={disabled} title={title} /> : null}
        {renderByDisplayMode[displayMode]({ ...props, disabled })}
      </View>
    </ListItem>
  );
}

const styles = EStyleSheet.create({
container: {
  backgroundColor: '$generalBackgroundColor',
  margin: 0,

},

inGroupcontainer: { backgroundColor: '#fafafa' },

  title: {
    color: '$secondaryColor',
    fontSize: '$titleFontSize',
    marginBottom: 10,
  },
  subtitle: {
    color: '$regularTextColor',
    fontSize: '$regularFontSize',
    marginBottom: 15,
    marginRight: 5,
    flex: 1,
  },

  disabled: {
    color: '$disabledTextColor',
  },
});
