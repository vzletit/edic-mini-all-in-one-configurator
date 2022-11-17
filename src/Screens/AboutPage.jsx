import {
 View, Image, Linking,
} from 'react-native';
import {default as Text} from 'react-native-text';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { t } from 'i18next';
import appJSON from '../../app.json';
import imageLogo from '../../assets/emc_logo_green.png';

function OpenURL({ url, showURL, style }) {
  const handlePress = async () => { await Linking.openURL(url); };
  return (
    <Text style={style} onPress={handlePress}>
      {showURL || url}
    </Text>
  );
}

export default function AboutPage() {
  const { version } = appJSON.expo;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Image
          resizeMode="contain"
          style={{ width: 200, height: 80, alignSelf: 'center' }}
          source={imageLogo}
        />
        <Text style={styles.text}>
          {`${t(
          'ABOUT_VERSION',
        )}: ${version}, © 2022`}
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{t('ABOUT_LICENSE')}</Text>

        <OpenURL
          style={styles.url}
          url="http://agurkov.ru/em-config-app"
          showURL={t('ABOUT_DOCS')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{t('ABOUT_DEVSUPPORT')}</Text>
        <OpenURL
          style={styles.url}
          r
          url="mailto://dmitry@agurkov.ru"
          showURL="dmitry@agurkov.ru"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{t('ABOUT_EM_COPYRIGHT')}</Text>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{t('ABOUT_TELESYS')}</Text>
          <OpenURL style={styles.url} url="http://telesys.ru" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{t('ABOUT_TELESYSSHOP')}</Text>
          <OpenURL style={styles.url} url="http://telesys-shop.ru" />
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    alignContent: 'flex-start',
    alignItems: 'center',
    color: '$primaryDarkColor',
    flex: 1,
  },
  textContainer: { margin: 10 },
  text: { color: '$regularTextColor', textAlign: 'center' },
  url: { textAlign: 'center' },
});
