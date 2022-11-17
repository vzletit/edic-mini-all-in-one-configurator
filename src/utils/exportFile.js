import i18n from 'i18next';
import { Platform, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { dateToString, timeToString } from './dateTimeUtils';
import { mapSerieToFile } from '../configData/configMapping';
import store from '../slices/index';
import { setToastMsg, setErrorMsg } from '../slices/configsSlice';

const { StorageAccessFramework } = FileSystem;

export default function exportFile(currentConfigData) {
    const filename = currentConfigData.fileName.toLowerCase();
    const { template } = mapSerieToFile[currentConfigData.type];
    const usersAndroidVersion = Platform.constants.Release.split('.')[0];
    const splitters = currentConfigData.dateTimeSplitters;

    const showAlert = (type) => {
        const mapAlertByType = {
            noRoot: i18n.t('EXPORT_ANDROID_NOROOT', { filename }),
            noExisted: i18n.t('EXPORT_ANDROID_NOEXISTED', { filename }),
        };

        Alert.alert(
            `${i18n.t('EXPORT_ANDROID_LIMIT_WARNING_TITLE')}`,
            mapAlertByType[type],
            [
                {
                    text: 'OK',
                    onPress: async () => { await doExport(); },
                    style: 'cancel',
                },

            ],
            {
                cancelable: false,
                onDismiss: () => { },
            },
        );
    };

    async function doExport() {
        const date = new Date();

        const currentDate = splitters ? dateToString(date, splitters.date) : null;
        const currentTime = splitters ? timeToString(date, splitters.time) : null;

        const renderedData = template(
            currentConfigData.fields,
            currentDate,
            currentTime,
        );

        const downloadDir = StorageAccessFramework.getUriForDirectoryInRoot('Download');
        const safUri = await StorageAccessFramework.requestDirectoryPermissionsAsync(downloadDir);

        if (!safUri.granted) {
            // console.log("NO PERMS");
            store.dispatch(setErrorMsg(i18n.t('ERROR_EXPORT')));

            return false;
        }

        // console.log(`${safUri.directoryUri}   -- SafUri path, PERMS OK`);

        try {
            /*
            expo-file-system на свежих API странно работает с SAF путями. Проверить в лоб существование файла
            и удалить его перед записью нового с тем же именем не получается. Поэтому читаем всю директорию,
            выбираем из массива SAF путей те, которые оканчиваются именем нашего файла и среди них выбираем
            самый короткий путь, чтобы исключить всякие бэкапы, типа _filename.ext.
            */

             const dirContents = await StorageAccessFramework.readDirectoryAsync(safUri.directoryUri);

             const existingConfigFile = dirContents
             .filter((item) => item.toLowerCase().endsWith(filename))
             .sort((a, b) => a.length - b.length)[0];

             existingConfigFile
             ? await FileSystem.deleteAsync(existingConfigFile, { idempotent: false })
             : null;

            // пишем новый файл

             const destinationUri = await StorageAccessFramework.createFileAsync(safUri.directoryUri, filename, '');
            await StorageAccessFramework.writeAsStringAsync(destinationUri, renderedData).then(() => {
                store.dispatch(setToastMsg(`${filename} ${i18n.t('EXPORTED')}`));
            });
        } catch (e) { console.warn(e); }
    }

    return (usersAndroidVersion > 9
        ? showAlert('noRoot')
        : showAlert('noExisted'));
}
