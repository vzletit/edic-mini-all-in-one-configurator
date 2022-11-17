import i18n from 'i18next';

export default {
    parameters: {
        fileName: 'config_w.ini',
        type: 'weenyDime',
        readableType: 'Edic-mini Weeny/Dime (кроме B120)',
        dateTimeSplitters: { date: '/', time: ':' },
        name: 'EDIC-mini WEENY & DIME',
        fields: {
            sampleRate: {
                type: 'SelectorItem',

                disabledArrKey: 'bitDepth',
                disabledArrMapping: {
 4: [1, 2], 8: [1, 2], 16: [], 24: [],
},

                inputType: 'ButtonsInput',
                value: 16,
                values: [8, 16, 22],
                names: [`8 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
                `16 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
                `22 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
                ],
                title: i18n.t('CONFIG__SAMPLE_RATE__TITLE'),
                helper: i18n.t('CONFIG__SAMPLE_RATE__HELPER_WEENYDIME'),
            },

            bitDepth: {
                type: 'SelectorItem',
                inputType: 'ButtonsInput',
                value: 16,

                disabledArrKey: 'sampleRate',
                disabledArrMapping: { 8: [], 16: [0, 1], 22: [0, 1] },
                values: [4, 8, 16, 24],
                names: [
                    `4 ${i18n.t('CONFIG__BIT_DEPTH__BIT')} (ADPCM)`,
                    `8 ${i18n.t('CONFIG__BIT_DEPTH__BIT')} (uLaw)`,
                    `16 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
                    `24 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
                ],
                title: i18n.t('CONFIG__BIT_DEPTH__TITLE'),
                helper: i18n.t('CONFIG__BIT_DEPTH__HELPER_WEENYDIME'),
            },

            gainLevel: {
                type: 'SelectorItem',
                inputType: 'SliderInput',
                value: 5,

                minValue: 1,
                maxValue: 7,

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

            loopRec: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                displayMode: 'inline',
                value: false,

                title: i18n.t('CONFIG__LOOPREC__TITLE'),
                helper: i18n.t('CONFIG__LOOPREC__HELPER'),
              },

              usbStopsRecording: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                displayMode: 'inline',
                value: false,

                title: i18n.t('CONFIG__USBSTOPREC__TITLE'),
                helper: i18n.t('CONFIG__USBSTOPREC__HELPER'),
            },

            vas: {
                type: 'GroupSelectorItems',
                headerDisplayMode: 'vas',

                fields: {
                    enableSwitch: {
                        type: 'SelectorItem',
                        inputType: 'SwitchInput',
                        value: false,
                        displayMode: 'inline',

                        title: i18n.t('CONFIG__VAS__TITLE'),
                        helper: i18n.t('CONFIG__VAS__HELPER'),
                    },

                    sens: {
                        type: 'SelectorItem',
                        inputType: 'SliderInput',
                        value: 15,

                        minValue: 0,
                        maxValue: 100,

                        minName: i18n.t('LOWER'),
                        maxName: i18n.t('HIGHER'),
                        title: i18n.t('CONFIG__VAS_SENS__TITLE'),
                        helper: i18n.t('CONFIG__VAS_SENS__HELPER_WEENYDIME'),
                    },

                    length: {
                        type: 'SelectorItem',
                        inputType: 'SpinnerInput',
                        value: 5,

                        minValue: 1,
                        maxValue: 15,

                        title: i18n.t('CONFIG__VAS_LENGTH__TITLE'),
                        helper: i18n.t('CONFIG__VAS_LENGTH__HELPER'),
                },
},
            },

            timer: {
                type: 'GroupSelectorItems',
                headerDisplayMode: 'timer',

                fields: {
                    enableSwitch: {
                        type: 'SelectorItem',
                        inputType: 'SwitchInput',
                        helper: i18n.t('CONFIG__TIMER__HELPER'),
                        displayMode: 'inline',
                        value: false,
                    },

                    dateTimeSelector: {
                        type: 'SelectorItem',
                        inputType: 'DateTimePickerInput',
                        displayMode: 'dateTimePicker',
                        helper: i18n.t('CONFIG__TIMER_PICKER_DOUBLE__HELPER'),
                        value: {
                            startDateTime: { date: '01/01/2020', time: '12:00' },
                            stopDateTime: { date: '01/01/2021', time: '12:00' },
                            },
                    },

                    daily: {
                        type: 'SelectorItem',
                        inputType: 'SwitchInput',
                        displayMode: 'inline',
                        value: false,
                        message: i18n.t('CONFIG__TIMER_DAILY__MSG'),
                        title: i18n.t('CONFIG__TIMER_DAILY__TITLE'),
                        helper: i18n.t('CONFIG__TIMER_DAILY__HELPER'),
                    },

                    disableManualStartRec: {
                        type: 'SelectorItem',
                        inputType: 'SwitchInput',
                        displayMode: 'inline',
                        value: false,
                        helper: i18n.t('CONFIG__TIMER_DISABLEMANUALSTART__HELPER'),
                    },
                },
                },

            password: {
                type: 'SelectorItem',
                inputType: 'Password',

                value: '',
                shouldBeUpdated: { value: true },

                validationScheme: 'digitsAbc',
                keyboardType: 'default',
                errorMessage: i18n.t('CONFIG__PASSWORD__ERROR_WEENY'),
                placeholder: i18n.t('CONFIG__PASSWORD__PLACEHOLDER_NOTSET'),
                leaveUnchangedValue: null,
                disabledValue: '',
                maxLength: 8,

                title: i18n.t('CONFIG__PASSWORD__TITLE'),
                helper: i18n.t('CONFIG__PASSWORD__HELPER_WEENY'),
            },

            timeZoneOffset: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 0,

                minValue: -720,
                maxValue: 720,
                title: i18n.t('CONFIG__TIMEZONEOFFSET__TITLE'),
                helper: i18n.t('CONFIG__TIMEZONEOFFSET__HELPER'),
            },

            brightness: {
                type: 'SelectorItem',
                inputType: 'SliderInput',
                value: 9,

                minValue: 1,
                maxValue: 9,
                title: i18n.t('CONFIG__BRIGHTNESS__TITLE'),
                helper: i18n.t('CONFIG__BRIGHTNESS__HELPER'),
            },

            blinkInterval: {
                type: 'SelectorItem',
                inputType: 'SliderInput',
                value: 9,

                minValue: 1,
                maxValue: 9,
                title: i18n.t('CONFIG__BLINK_INTERVAL__TITLE'),
                helper: i18n.t('CONFIG__BLINK_INTERVAL__HELPER'),
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
        const recordModes = ['22,24', '22,16', '16,24', '16,16', '8,24', '8,16', '8,8', '8,4'];
        const result = `; Длина пароля не должна превышать 8 символов (допустимы только английские буквы и цифры).
  ; Для сброса забытого установленного пароля установите пароль 00000000. 
  ; При этом все записи будут стерты.Не существует способа их восстановить. Будьте внимательны.
  ; Password length might not exceed 8 characters (only English charset is supported).
  ; To reset a forgotten password type 00000000 as password value. 
  ; Warning! When you reset the password, all records will be erased without the possibility of recovery.
  
  Password=${configData.password.value}
  
  ; Режим записи (чем меньше макс. время записи (MaxTime), тем качество записи выше)
  ; Record mode (the shorter the max record time, the better the record quality)
  ; 0 - PCM  22 KHz 24 bit, MaxTime:  ~4 h 00 min
  ; 1 - PCM  22 KHz 16 bit, MaxTime:  ~6 h 00 min
  ; 2 - PCM  16 KHz 24 bit, MaxTime:  ~6 h 00 min
  ; 3 - PCM  16 KHz 16 bit, MaxTime:  ~9 h 00 min
  ; 4 - PCM   8 KHz 24 bit, MaxTime: ~12 h 00 min
  ; 5 - PCM   8 KHz 16 bit, MaxTime: ~18 h 00 min
  ; 6 - uLaw  8 KHz  8 bit, MaxTime: ~36 h 00 min
  ; 7 - ADPCM 8 KHz  4 bit, MaxTime: ~72 h 00 min
  
  RecordMode=${recordModes.indexOf(`${configData.sampleRate.value.toString()},${configData.bitDepth.value.toString()}`)}
  
  ; Уровень усиления микрофона: 1..7, 
  ; 1 - самый низкий (0dB), 2 - (+6dB (2)), 3 - (+12dB (4)),.... 7 - (+42dB (128)) самый высокий
  ; Microphone gain level: 1..7, 
  ; 1 - lowest (0dB), 2 - (+6dB (2)), 3 - (+12dB (4)),.... 7 - (+42dB (128)) highest
  
  GainLevel=${configData.gainLevel.value}
  
  ; Макс. длительность одного файла записи (минуты), 0 – без ограничений
  ; Max. duration of the one recording file (minutes), 0 – no limit

  MaxRecordLength=${configData.maxRecFileLength.value}

  ; Циклическая запись: 0 – выключена; 1 - включена
  ; Cyclic recording: 0 – disabled; 1 - enabled

  CyclicRecord=${+configData.loopRec.value}  
  
  ; Система голосовой активации (VAS): 0 – выключена; 1 - включена
  ; Voice activation system (VAS): 0 – disabled; 1 - enabled
  
  VasEnabled=${+configData.vas.fields.enableSwitch.value}
  
  
  ; Уровень звука для срабатывания VAS: 0-100(%)
  ; Silence level: 0-100(%)
  
  VasLevel=${configData.vas.fields.sens.value}
    
  
  
  ; Длительность отсутствия звука для выключения записи с VAS: (1..15 сек)
  ; Silence duration (1..15 sec)
  
  VasDuration=${configData.vas.fields.length.value}
  
  
  ; Прекращать запись при подключении к ПК: 0 - продолжать; 1 - прекращать
  ; Stop recording when connected to PC: 0 - don't stop; 1 - stop
  
  UsbStopsRecording=${+configData.usbStopsRecording.value}
  
  
  ; Включение записи по таймеру: 0 – выключено; 1 – Ежедневно; 2 - Однократно
  ; Timer recording: 0 – off; 1 – Daily; 2 - Once
  
  RecTimer=${configData.timer.fields.enableSwitch.value ? configData.timer.fields.daily.value ? '1' : '2' : '0'}
  
  ; Время/дата старта и окончания записи при записи с таймером (формат DD/MM/YYYY HH:MM).
  ; Для ежедневного таймера значения даты не учитываются, но обязательно должны быть указаны. 
  ; Start and end time (DD/MM/YYYY HH:MM format) for timer recording. 
  ; For Daily timer the start and the stop date is ignored, but must be present.
  
  TimerStartDateTime=${configData.timer.fields.dateTimeSelector.value.startDateTime.date} ${configData.timer.fields.dateTimeSelector.value.startDateTime.time}
  TimerStopDateTime=${configData.timer.fields.dateTimeSelector.value.stopDateTime.date} ${configData.timer.fields.dateTimeSelector.value.stopDateTime.time}
  
  ; Запретить ручное включение записи, если включена запись по таймеру: 0 - разрешить; 1 - запретить.
  ; Disable starting manual recording if timer recording is on: 0 - enable; 1 - disable
  
  TimerDisablesManualStart=${+configData.timer.fields.disableManualStartRec.value}
  
  
  ; Коррекция часового пояса (минуты); Time zone correction (minutes)
  TimeZoneCorrection=${configData.timeZoneOffset.value}
  
  
  ;Яркость индикации (1-мин...9-макс); Indication brightness (1-min...9-max)
  BrightnessLevel=${configData.brightness.value}
  ;Интервал индикации (1-мин...9-макс); Indication interval (1-min...9-max)
  IndicationInterval=${configData.blinkInterval.value}
  
  
  ; *** Сброс до заводских настроек: 42 - сброс. Внимание!!! ***
  ; Все записи будут безвозвратно стерты и установки будут установлены по умолчанию.
  ; *** Reset to factory state: 42 - reset. WARNING!!! ***
  ; All records will be erased and the settings will be set by default.
  
  ResetToFactoryState=${configData.reset.value ? '42' : '0'}
  
  
  `;

        return result;
    },
};
