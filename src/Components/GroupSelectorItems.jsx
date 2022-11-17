import React, { useState, Children, cloneElement } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from '@rneui/themed';
import EStyleSheet from 'react-native-extended-stylesheet';
import { t } from 'i18next';

  const headerByDisplayMode = {

    Timer: (props) => {
      const { enableSwitch, title, headerParams } = props;
      const isEnabled = enableSwitch.value;

      const showTimerDatesOrDailyTimes = () => {
        const timerHasStop = headerParams.stopDateTime;
        const { dailyIsActive } = headerParams;

        const dailyTime = timerHasStop
          ? `${headerParams.startDateTime.time} — ${headerParams.stopDateTime.time}`
          : headerParams.startDateTime.time;

          const datesStartStop = timerHasStop
          ? `${headerParams.startDateTime.date} — ${headerParams.stopDateTime.date}`
          : `${headerParams.startDateTime.date}, ${headerParams.startDateTime.time}`;

          return dailyIsActive
          ? `${headerParams.dailyMessage}: ${dailyTime}` : datesStartStop;
      };
      return (
        <>
          <MaterialCommunityIcons
            name={isEnabled ? 'timer' : 'timer-off'}
            size={30}
            color={isEnabled ? EStyleSheet.value('$primaryColor') : EStyleSheet.value('$primaryLightColor')}
            style={isEnabled ? styles.icon : styles.iconDisabled}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {title || t('GROUP_TIMER_TITLE')}
            </ListItem.Title>
            {isEnabled ? (
              <ListItem.Subtitle style={styles.subTitle}>
                {showTimerDatesOrDailyTimes()}
              </ListItem.Subtitle>
            ) : null}
          </ListItem.Content>
        </>
      );
    },

    Clock: (props) => {
      const { enableSwitch, title } = props;
      const isEnabled = enableSwitch.value;
      return (
        <>
          <MaterialCommunityIcons
            name={isEnabled ? 'clock-time-three' : 'clock-time-three-outline'}
            size={30}
            color={isEnabled ? EStyleSheet.value('$primaryColor') : EStyleSheet.value('$primaryLightColor')}
            style={isEnabled ? styles.icon : styles.iconDisabled}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {title || t('GROUP_TITLE_CLOCK')}

            </ListItem.Title>
          </ListItem.Content>
        </>
    );
  },

  Files: (props) => {
    const { enableSwitch, title } = props;
    const isEnabled = enableSwitch.value;
    return (
      <>
        <MaterialCommunityIcons
          name={isEnabled ? 'server' : 'server-off'}
          size={30}
          color={isEnabled ? EStyleSheet.value('$primaryColor') : EStyleSheet.value('$primaryLightColor')}
          style={isEnabled ? styles.icon : styles.iconDisabled}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>
            {title || t('GROUP_TITLE_FILESLIMIT')}
          </ListItem.Title>
        </ListItem.Content>
      </>
  );
},

    Vas: (props) => {
      const { enableSwitch, title } = props;
      const isEnabled = enableSwitch.value;

      return (
        <>
          <MaterialCommunityIcons
            name={isEnabled ? 'account-tie-voice' : 'account-tie-voice-off'}
            size={30}
            color={isEnabled ? EStyleSheet.value('$primaryColor') : EStyleSheet.value('$primaryLightColor')}
            style={isEnabled ? styles.icon : styles.iconDisabled}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {title || t('GROUP_TITLE_VAS')}
            </ListItem.Title>
          </ListItem.Content>
        </>
    );
},

    Password: (props) => {
      const { enableSwitch, title } = props;
      const isEnabled = enableSwitch.value;

      return (
        <>
          <MaterialCommunityIcons
            name={isEnabled ? 'account-tie-voice' : 'account-tie-voice-off'}
            size={30}
            color={isEnabled ? EStyleSheet.value('$primaryColor') : EStyleSheet.value('$primaryLightColor')}
            style={isEnabled ? styles.icon : styles.iconDisabled}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {title || t('GROUP_TITLE_PASSWORD')}
            </ListItem.Title>
          </ListItem.Content>
        </>
    );
},

  };

export default function GroupSelectorItems(props) {
  const [expanded, setExpanded] = useState(false);
  const { headerDisplayMode, children } = props;

  const capitalizeMode = (string) => {
  const arr = string.split('');
    arr[0] = arr[0].toUpperCase();
  return arr.join('');
  };

  return (
    <ListItem.Accordion
      topDivider
      bottomDivider={!expanded}
      content={headerByDisplayMode[capitalizeMode(headerDisplayMode)](props)}
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      {Children.map(children, (child) => cloneElement(child))}
    </ListItem.Accordion>
  );
}

const styles = EStyleSheet.create({
icon: { paddingRight: 10, opacity: 1 },
iconDisabled: { paddingRight: 10, opacity: 0.6 },
  title: { color: '$secondaryColor', fontSize: '$titleFontSize' },
  subTitle: { color: '$regularTextColor', fontSize: '$regularFontSize' },
  disabled: '$disabledTextColor',
});
