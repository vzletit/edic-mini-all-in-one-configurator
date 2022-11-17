import i18n from 'i18next';

export default {
    parameters: {
        fileName: 'config_w.ini',
        type: 'witness',
        readableType: 'Свидетель 3',
        dateTimeSplitters: { date: '/', time: ':' },
        name: 'Свидетель 3',
        fields: {
            recMode: {
                type: 'SelectorItem',
                inputType: 'ButtonsInput',
                value: 3,

                values: [3, 4],
                names: [
                    `16 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}, 16 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
                    `8 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}, 24 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
                ],
                title: i18n.t('CONFIG__REC_MODE__TITLE'),
                helper: i18n.t('CONFIG__REC_MODE__HELPER'),
            },

            gainLevel: {
                type: 'SelectorItem',
                inputType: 'SliderInput',
                value: 5,

                minValue: 3,
                maxValue: 5,

                title: i18n.t('CONFIG__MIC_GAIN__TITLE'),
                helper: i18n.t('CONFIG__MIC_GAIN__HELPER'),
            },

            maxRecFileLength: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 0,

                minValue: 0,
                maxValue: 999999,

                title: i18n.t('CONFIG__FILELIMIT__TITLE_WEENY'),
                helper: i18n.t('CONFIG__FILELIMIT_MAX__HELPER'),
            },

            usbStopsRecording: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                displayMode: 'inline',
                value: false,

                title: i18n.t('CONFIG__USBSTOPREC__TITLE'),
                helper: i18n.t('CONFIG__USBSTOPREC__HELPER'),
            },

            disableAutoStart: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                displayMode: 'inline',
                value: false,

                title: i18n.t('CONFIG__DISABLEAUTOSTART__TITLE'),
                helper: i18n.t('CONFIG__DISABLEAUTOSTART__HELPER'),
            },

            reset: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                displayMode: 'inline',
                value: false,

                title: i18n.t('CONFIG__RESET__TITLE'),
                helper: `${i18n.t('CONFIG__RESET__HELPER')} ${i18n.t('CONFIG__RESET__HELPER_RECWIPE')}`,
                confirm:
                {
                    title: i18n.t('CONFIG__RESET__CONFIRM_TITLE'),
                    helper: i18n.t('CONFIG__RESET__CONFIRM_HELPER'),
                },
            },

        },
    },
    template: (configData) => {
const result = `; Режим записи (чем меньше макс. время записи (MaxTime), тем качество записи выше)
; Record mode (the shorter the max record time, the better the record quality)
; 3 - PCM  16 KHz 16 bit, MaxTime:  ~9 h 00 min
; 4 - PCM   8 KHz 24 bit, MaxTime: ~12 h 00 min

RecordMode=${configData.recMode.value}

; Уровень усиления микрофона: 3..5, 
; Microphone gain level: 3..5, 
GainLevel=${configData.gainLevel.value}

; Макс. длительность одного файла записи (минуты), 0 – без ограничений
; Max. duration of the one recording file (minutes), 0 – no limit

MaxRecordLength=${configData.maxRecFileLength.value}

; Прекращать запись при подключении к ПК: 0 - продолжать; 1 - прекращать
; Stop recording when connected to PC: 0 - don't stop; 1 - stop

UsbStopsRecording=${+configData.usbStopsRecording.value}

; Не включать запись после отключения от ПК: 0 - включать; 1 - не включать
; Don't start recording when disconnected from PC: 0 - start; 1 - don't start

DisableAutoStart=${+!configData.disableAutoStart.value}

; *** Сброс до заводских настроек: 42 - сброс. Внимание!!! ***
; Все записи будут безвозвратно стерты и установки будут установлены по умолчанию.
; *** Reset to factory state: 42 - reset. WARNING!!! ***
; All records will be erased and the settings will be set by default.

ResetToFactoryState=${configData.reset.value ? '42' : '0'}


; *** Перейти в режим обновления прошивки ***
; *** Switch to firmware upgrade mode ***

UpgradeFirmware=0


; *** Системная информация ***
; *** System information ***
FW Version=2.14
Build date: 24.10.2022
BootLoader version: 1.0
UID: 004D005F 56535015 20363058 
MCU: 0002864885
S/N: 02864885
`;

        return result;
    },
};
