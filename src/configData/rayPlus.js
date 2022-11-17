import i18n from 'i18next';

export default {
  parameters: {
    fileName: 'CONFIG_CARD24.INI',
    type: 'rayPlus',
    readableType: 'Edic-mini Ray+',
    dateTimeSplitters: { date: '/', time: ':' },
    name: 'EDIC-mini Ray+',

    fields: {

      sampleRate: {
        type: 'SelectorItem',
        inputType: 'ButtonsInput',
        value: 16,
        values: [8, 16, 32],
        names: [
        `8 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
        `16 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
        `32 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
      ],
        title: i18n.t('CONFIG__SAMPLE_RATE__TITLE'),
        helper: i18n.t('CONFIG__SAMPLE_RATE__HELPER'),
      },

      bitDepth: {
        type: 'SelectorItem',
        inputType: 'ButtonsInput',
        value: 8,
        values: [8, 16, 24],
        names: [
        `8 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
        `16 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
        `24 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
      ],
        title: i18n.t('CONFIG__BIT_DEPTH__TITLE'),
        helper: i18n.t('CONFIG__BIT_DEPTH__HELPER'),
      },

      channelsNum: {
        type: 'SelectorItem',
        inputType: 'ButtonsInput',
        value: 1,
        values: [1, 2, 4, 6, 8],
        names: [
          i18n.t('CONFIG__CHANNELS_NUM__MONO'),
          i18n.t('CONFIG__CHANNELS_NUM__STEREO'),
          '4', '6', '8',
        ],
        title: i18n.t('CONFIG__CHANNELS_NUM__TITLE'),
        helper: i18n.t('CONFIG__CHANNELS_NUM__HELPER_CARD'),
      },

      gainLevel: {
        type: 'SelectorItem',
        inputType: 'SliderInput',
        minValue: 1,
        maxValue: 7,
        value: 5,
        title: i18n.t('CONFIG__MIC_GAIN__TITLE'),
        helper: i18n.t('CONFIG__MIC_GAIN__HELPER'),
      },

      softLimiter: {
        type: 'SelectorItem',
        inputType: 'SwitchInput',
        displayMode: 'inline',
        value: false,
        title: i18n.t('CONFIG__SOFT_LIMITER__TITLE'),
        helper: i18n.t('CONFIG__SOFT_LIMITER__HELPER'),
      },

      loopRec: {
        type: 'SelectorItem',
        inputType: 'SwitchInput',
        displayMode: 'inline',
        value: false,
        title: i18n.t('CONFIG__LOOPREC__TITLE'),
        helper: i18n.t('CONFIG__LOOPREC__HELPER'),
      },

      fileSizeLimit: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'files',

          fields: {
            enableSwitch: {
              type: 'SelectorItem',
              inputType: 'SwitchInput',
              value: false,
              displayMode: 'inline',
              title: i18n.t('CONFIG__FILELIMIT__TITLE'),
              helper: i18n.t('CONFIG__FILELIMIT__HELPER'),
},

          min: {
            type: 'SelectorItem',
            inputType: 'SpinnerInput',
            minValue: 1,
            maxValue: 2000,
            value: 1,
            title: i18n.t('CONFIG__FILELIMIT_MIN__TITLE'),
            helper: i18n.t('CONFIG__FILELIMIT_MIN__HELPER'),
          },

          max: {
            type: 'SelectorItem',
            inputType: 'SpinnerInput',
            minValue: 1,
            maxValue: 2000,
            value: 1000,
            title: i18n.t('CONFIG__FILELIMIT_MAX__TITLE'),
            helper: i18n.t('CONFIG__FILELIMIT_MAX__HELPER'),
          },
      },
      },

      vas: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'vas',

        fields: {
          enableSwitch: {
            type: 'SelectorItem',
            inputType: 'SwitchInput',
            displayMode: 'inline',

            value: false,

            title: i18n.t('CONFIG__VAS__TITLE'),
            helper: i18n.t('CONFIG__VAS__HELPER'),
        },

          sens: {
            type: 'SelectorItem',
            inputType: 'SliderInput',

            minValue: 0,
            maxValue: 100,
            value: 50,

            minName: i18n.t('LOWER'),
            maxName: i18n.t('HIGHER'),
            title: i18n.t('CONFIG__VAS_SENS__TITLE'),
            helper: i18n.t('CONFIG__VAS_SENS__HELPER_CARD'),
          },

          interval: {
            type: 'SelectorItem',
            inputType: 'ButtonsInput',
            value: 30,
            values: [0, 15, 30, 60, 120],

            names: [i18n.t('CONFIG__VAS_INTERVAL__NAMES_ZERO'),
            `15 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`,
            `30 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`,
            `60 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`,
            `120 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`],
            title: i18n.t('CONFIG__VAS_INTERVAL__TITLE'),
            helper: i18n.t('CONFIG__VAS_INTERVAL__HELPER'),
          },

          length: {
            type: 'SelectorItem',
            inputType: 'SpinnerInput',
            value: 60,

            minValue: 10,
            maxValue: 600,

            title: i18n.t('CONFIG__VAS_LENGTH__TITLE'),
            helper: i18n.t('CONFIG__VAS_LENGTH__HELPER'),
          },
       },
      },

      timer1: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'timer',
        headerTitle: i18n.t('GROUP_TIMER1_TITLE'),

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
              helper: i18n.t('CONFIG__TIMER_PICKER_SINGLE__HELPER'),
              value: { startDateTime: { date: '01/01/2018', time: '12:00' } },
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

            length: {
              type: 'SelectorItem',
              inputType: 'SpinnerInput',
              value: 1,
              minValue: 1,
              maxValue: 600,
              title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__HOURS')})`,
              helper: i18n.t('CONFIG__TIMER_LENGTH__HELPER'),
            },
          },
      },

      timer2: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'timer',
        headerTitle: i18n.t('GROUP_TIMER2_TITLE'),

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
              helper: i18n.t('CONFIG__TIMER_PICKER_SINGLE__HELPER'),
              value: { startDateTime: { date: '01/01/2018', time: '12:00' } },
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

            length: {
              type: 'SelectorItem',
              inputType: 'SpinnerInput',
              value: 1,
              minValue: 1,
              maxValue: 600,
              title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__HOURS')})`,
              helper: i18n.t('CONFIG__TIMER_LENGTH__HELPER'),
            },
          },
      },

      timer3: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'timer',
        headerTitle: i18n.t('GROUP_TIMER3_TITLE'),

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
              helper: i18n.t('CONFIG__TIMER_PICKER_SINGLE__HELPER'),
              value: { startDateTime: { date: '01/01/2018', time: '12:00' } },
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

            length: {
              type: 'SelectorItem',
              inputType: 'SpinnerInput',
              value: 1,
              minValue: 1,
              maxValue: 600,
              title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__HOURS')})`,
              helper: i18n.t('CONFIG__TIMER_LENGTH__HELPER'),
            },
          },
      },

      timer4: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'timer',
        headerTitle: i18n.t('GROUP_TIMER4_TITLE'),

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
              helper: i18n.t('CONFIG__TIMER_PICKER_SINGLE__HELPER'),
              value: { startDateTime: { date: '01/01/2018', time: '12:00' } },
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

            length: {
              type: 'SelectorItem',
              inputType: 'SpinnerInput',
              value: 1,
              minValue: 1,
              maxValue: 600,
              title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__HOURS')})`,
              helper: i18n.t('CONFIG__TIMER_LENGTH__HELPER'),
            },
          },
      },

      password: {
        type: 'SelectorItem',
        inputType: 'Password',
        validationScheme: 'digits',
        keyboardType: 'number-pad',
        leaveUnchangedValue: '********',
        maxLength: 8,

        disabledValue: '00000000',
        value: '',
        errorMessage: i18n.t('CONFIG__PASSWORD__ERROR_CARD24'),
        placeholder: i18n.t('CONFIG__PASSWORD__PLACEHOLDER_NOCHANGES'),

        title: i18n.t('CONFIG__PASSWORD__TITLE'),
        helper: i18n.t('CONFIG__PASSWORD__HELPER_CARD24'),
      },

      clock: {
        type: 'GroupSelectorItems',
        headerDisplayMode: 'clock',

        fields: {

            enableSwitch: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                helper: i18n.t('CONFIG__CLOCK_UPDATE__HELPER'),
                displayMode: 'inline',
                value: false,
            },

            dateTimeSelector: {
                type: 'SelectorItem',
                inputType: 'DateTimePickerInput',
                displayMode: 'dateTimePicker',
                helper: i18n.t('CONFIG__CLOCK_PICKER__HELPER'),
                value: { startDateTime: { date: '01/01/2017', time: '12:00' } },
            },

            autoUpdateClock: {
                type: 'SelectorItem',
                inputType: 'SwitchInput',
                helper: i18n.t('CONFIG__CLOCK_UPDATE_AUTO__HELPER'),
                message: i18n.t('CONFIG__CLOCK_UPDATE_AUTO__MESSAGE'),
                displayMode: 'inline',
                value: false,
            },
        },
    },

    },
  },

  template: (configData, currentDate = '', currentTime = '') => {
    const recordModes = [
      '8,16', '16,16', '32,16', '8,24', '16,24', '32,24', '8,8', '16,8', '32,8',
    ];

    return `
    ;-------------------------------------------------------------------------------
    ; Параметры записи
    [Record parameters]
    
    ; Режим записи
    ; Record mode
    ; 0 - PCM   8 KHz 16 bit
    ; 1 - PCM  16 KHz 16 bit
    ; 2 - PCM  32 KHz 16 bit
    ; 3 - PCM   8 KHz 24 bit
    ; 4 - PCM  16 KHz 24 bit
    ; 5 - PCM  32 KHz 24 bit
    ; 6 - uLaw  8 KHz  8 bit
    ; 7 - uLaw 16 KHz  8 bit
    ; 8 - uLaw 32 KHz  8 bit
    
    RecordMode=${recordModes.indexOf(`${configData.sampleRate.value.toString()},${configData.bitDepth.value.toString()}`)}
    
    ; Количество каналов записи (1-моно, 2-стерео и т.д.)
    ; Number of recording channels (1-mono, 2-stereo, etc.)
    
    NumRecChannels=${configData.channelsNum.value}
    
    ; Уровень усиления микрофона: 1..7
    ; Microphone gain level: 1..7
    ; 1 - самый низкий (0dB), 2 - (+6dB (2)), 3 - (+12dB (4)),.... 7 - (+42dB (128)) самый высокий
    ; 1 - lowest (0dB), 2 - (+6dB (2)), 3 - (+12dB (4)),.... 7 - (+42dB (128)) highest
    
    GainLevel=${configData.gainLevel.value}
    
    ; Мягкое ограничение перегрузки микрофона: 0 – выключено; 1 - включено
    ; Soft limiting microphone overload: 0 – disabled; 1 - enabled
    
    SoftLimitation=${+configData.softLimiter.value}
    
    ; Режим циклической записи: 0 – выключен; 1 - включен
    ; Cycle recording mode: : 0 – disabled; 1 - enabled
    
    CircularRecording=${+configData.loopRec.value}
    
    ;-------------------------------------------------------------------------------
    ; Ограничения записываемых файлов
    [Recording file limitations]
    
    ; Ограничение размера файлов: 0 – выключено; 1 - включено
    ; Record File size limit: 0 – disabled; 1 - enabled
    
    LimitEnable=${+configData.fileSizeLimit.fields.enableSwitch.value}
    
    ; Максимальный размер файла (значение не должно превышать 2000 МБ)
    ; Maximum file size (value must not exceed 2000 MB)
    
    MaxFileSizeMB=${configData.fileSizeLimit.fields.max.value}
    
    ; Минимальный размер файла (значение не должно превышать 2000 МБ)
    ; Minimum file size (value must not exceed 2000 MB)
    
    MinFileSizeMB=${configData.fileSizeLimit.fields.min.value}
    
    ;-------------------------------------------------------------------------------
    ; Система голосовой активации (VAS)
    [Voice activation system]
    
    ; Система голосовой активации (VAS): 0 – выключена; 1 - включена
    ; Voice activation system (VAS): 0 – disabled; 1 - enabled
    
    VasEnabled=${+configData.vas.fields.enableSwitch.value}
    
    ; Уровень звука для срабатывания VAS: 0-100(%)
    ; Silence level: 0-100(%)
    
    VasLevel=${configData.vas.fields.sens.value}
    
    ; Продолжительность записи при отсутствии звука:  (10..600 сек)
    ; Duration of recording, in the absence of sound: (10..600 sec)
    
    VasDuration=${configData.vas.fields.length.value}
    
    ; Периодичность проверки: (0/15/30/60/120 сек)
    ; Checking Period: (0/15/30/60/120 sec)
    
    VasCheckingPeriod=${configData.vas.fields.interval.value}
    
    ;-------------------------------------------------------------------------------
    ; Таймеры записи
    ; Recording timers
    
    ; TimerType - Режим работы таймера: 0 – выключен; 1 – Включается ежедневно; 2 - Включается однократно
    ; TimerType - Timer recording mode: : 0 – off; 1 – Triggered Daily; 2 - Triggered Once
    
    ; TimerStartDate - Дата старта записи (формат DD/MM/YYYY).
    ; TimerStartDate - Start date (DD/MM/YYYY format) for timer recording.
    
    ; TimerStartTime - Время старта записи (формат HH:MM).
    ; TimerStartTime - Start time (HH:MM format) for timer recording.
    
    ; RecordDuration - Продолжительность записи по таймеру, в часах
    ; RecordDuration - Record duration, hours
    
    [Timer 1]
    TimerType=${configData.timer1.fields.enableSwitch.value ? configData.timer1.fields.daily.value ? '1' : '2' : '0'}
    TimerStartDate=${configData.timer1.fields.dateTimeSelector.value.startDateTime.date}
    TimerStartTime=${configData.timer1.fields.dateTimeSelector.value.startDateTime.time}
    RecordDuration=${configData.timer1.fields.length.value}
    
    [Timer 2]
    TimerType=${configData.timer2.fields.enableSwitch.value ? configData.timer2.fields.daily.value ? '1' : '2' : '0'}
    TimerStartDate=${configData.timer2.fields.dateTimeSelector.value.startDateTime.date}
    TimerStartTime=${configData.timer2.fields.dateTimeSelector.value.startDateTime.time}
    RecordDuration=${configData.timer2.fields.length.value}
    
    [Timer 3]
    TimerType=${configData.timer3.fields.enableSwitch.value ? configData.timer3.fields.daily.value ? '1' : '2' : '0'}
    TimerStartDate=${configData.timer3.fields.dateTimeSelector.value.startDateTime.date}
    TimerStartTime=${configData.timer3.fields.dateTimeSelector.value.startDateTime.time}
    RecordDuration=${configData.timer3.fields.length.value}
    
    [Timer 4]
    TimerType=${configData.timer4.fields.enableSwitch.value ? configData.timer4.fields.daily.value ? '1' : '2' : '0'}
    TimerStartDate=${configData.timer4.fields.dateTimeSelector.value.startDateTime.date}
    TimerStartTime=${configData.timer4.fields.dateTimeSelector.value.startDateTime.time}
    RecordDuration=${configData.timer4.fields.length.value}
    
    ;-------------------------------------------------------------------------------
    ; Безопасность
    [Security]
    ; Пароль, должен содержать только цифры, длина  пароля не должна превышать 8 символов.
    ; Password, must contain only numbers, password must not exceed 8 characters.
    ; Для отмены функции защиты паролем, введите 00000000.
    ; To cancel the password protection function, enter 00000000.
    
    Password=${configData.password.value || configData.password.leaveUnchangedValue}
    
    ;-------------------------------------------------------------------------------
    ; Обслуживание
    [Service]
    ; Системная дата (DD/MM/YYYY)
    ; System Date (DD/MM/YYYY)
    
    SysDate=${configData.clock.fields.autoUpdateClock.value ? currentDate : configData.clock.fields.dateTimeSelector.value.startDateTime.date}
    
    ; Системное время (HH:MM)
    ; System Time (HH:MM)
    
    SysTime=${configData.clock.fields.autoUpdateClock.value ? currentTime : configData.clock.fields.dateTimeSelector.value.startDateTime.time}
    
    ; Обновить системные время и дату? 0 - Нет, 1 - Да.
    ; Update system time and date? 0 - No, 1 - Yes.
    
    SysUpdate=${+configData.clock.fields.enableSwitch.value}
    
    
    ; Системная информация
    [System information]
    
    SerialNumber=***
    
    Firmware version:
    ***
    `;
  },
};
