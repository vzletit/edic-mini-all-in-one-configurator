import i18n from 'i18next';

export default {
  parameters: {
    fileName: 'CONFIG.INI',
    type: 'card16',
    readableType: 'Edic-Mini Card16',
    dateTimeSplitters: { date: '.', time: ':' },
    name: 'EDIC-mini CARD16',
    fields: {
        sampleRate: {
          type: 'SelectorItem',
          inputType: 'ButtonsInput',
          value: 16,
          values: [8, 16],
          names: [
          `8 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
          `16 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
        ],
          title: i18n.t('CONFIG__SAMPLE_RATE__TITLE'),
          helper: i18n.t('CONFIG__SAMPLE_RATE__HELPER'),
        },

        bitDepth: {
          type: 'SelectorItem',
          inputType: 'ButtonsInput',
          value: 8,
          values: [8, 16],
          names: [
          `8 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
          `16 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
        ],
          title: i18n.t('CONFIG__BIT_DEPTH__TITLE'),
          helper: i18n.t('CONFIG__BIT_DEPTH__HELPER'),
        },

        micSens: {
          type: 'SelectorItem',
          inputType: 'SliderInput',
          minValue: 0,
          maxValue: 100,
          value: 100,
          title: i18n.t('CONFIG__MIC_SENS__TITLE'),
          helper: i18n.t('CONFIG__MIC_SENS__HELPER'),
        },

        agc: {
          type: 'SelectorItem',
          inputType: 'SwitchInput',
          value: false,
          displayMode: 'inline',
          title: i18n.t('CONFIG__AGC__TITLE'),
          helper: i18n.t('CONFIG__AGC__HELPER'),
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

        loopRec: {
          type: 'SelectorItem',
          inputType: 'SwitchInput',
          value: false,
          title: i18n.t('CONFIG__LOOPREC__TITLE'),
          helper: i18n.t('CONFIG__LOOPREC__HELPER'),
          displayMode: 'inline',
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
              minName: i18n.t('LOWER'),
              maxName: i18n.t('HIGHER'),

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
              values: [0, 30, 60, 120],

              names: [i18n.t('CONFIG__VAS_INTERVAL__NAMES_ZERO'),
              `30 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`,
              `60 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`,
              `120 ${i18n.t('CONFIG__VAS_INTERVAL__NAMES_SEC')}`],
              title: i18n.t('CONFIG__VAS_INTERVAL__TITLE'),
              helper: i18n.t('CONFIG__VAS_INTERVAL__HELPER'),
            },

            length: {
              type: 'SelectorItem',
              inputType: 'SpinnerInput',
              value: 30,

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
                value: { startDateTime: { date: '01.01.2018', time: '12:00' } },
                },

              length: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 1,
                minValue: 1,
                maxValue: 600,
                title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__MINUTES')})`,
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
                value: { startDateTime: { date: '01.01.2017', time: '12:00' } },
                },

              length: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 1,
                minValue: 1,
                maxValue: 600,
                title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__MINUTES')})`,
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
                value: { startDateTime: { date: '01.01.2017', time: '12:00' } },
                },

              length: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 1,
                minValue: 1,
                maxValue: 600,
                title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__MINUTES')})`,
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
                value: { startDateTime: { date: '01.01.2017', time: '12:00' } },
                },

              length: {
                type: 'SelectorItem',
                inputType: 'SpinnerInput',
                value: 1,
                minValue: 1,
                maxValue: 600,
                title: `${i18n.t('CONFIG__TIMER_LENGTH__TITLE')} (${i18n.t('CONFIG__TIMER_LENGTH__MINUTES')})`,
                helper: i18n.t('CONFIG__TIMER_LENGTH__HELPER'),
              },
            },
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
                  value: { startDateTime: { date: '01.01.2017', time: '12:00' } },
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

      reset: {
        type: 'SelectorItem',
        inputType: 'SwitchInput',
        displayMode: 'inline',
        value: false,

        title: i18n.t('CONFIG__RESET__TITLE'),
        helper: `${i18n.t('CONFIG__RESET__HELPER')} ${i18n.t('CONFIG__RESET__HELPER_RECWIPE')}`,

             },
          },
    },

    template: (configData, currentDate = '', currentTime = '') => `
    
  
  
  
    *****Конфигурация системы*****
  
  
    *Качество записи*
    Частота дискретизации, КГц (8/16).............................<${configData.sampleRate.value}>
    Разрядность, бит (8/16).......................................<${configData.bitDepth.value}>
    Чувствительность микрофона, % (0..100)........................<${configData.micSens.value}>
    АРУ включена (Y/N)............................................<${configData.agc.value ? 'Y' : 'N'}>
    
    *Ограничения для файлов*
    Максимальный размер, Мб (1..2000).............................<${configData.fileSizeLimit.fields.max.value}>
    Минимальный размер, Мб (1..2000)..............................<${configData.fileSizeLimit.fields.min.value}>
    Ограничение включено (Y/N)....................................<${configData.fileSizeLimit.fields.enableSwitch.value ? 'Y' : 'N'}>
    
    *Циклическая запись*
    Циклическая запись включена (Y/N).............................<${configData.loopRec.value ? 'Y' : 'N'}>
    
    *Автоматическое включение записи по уровню звука*
    Чувствительность, % (1..100)..................................<${configData.vas.fields.sens.value}>
    Периодичность проверки, с (0/30/60/120).......................<${configData.vas.fields.interval.value}>
    Продолжительность записи при отсутствии звука, сек (10..600)..<${configData.vas.fields.length.value}>
    Включено (Y/N)................................................<${configData.vas.fields.enableSwitch.value ? 'Y' : 'N'}>
    
    *Таймеры*
    Таймер 1
    Дата включения (dd.mm.yyyy)...................................<${configData.timer1.fields.dateTimeSelector.value.startDateTime.date}>
    Время включения (hh:mm).......................................<${configData.timer1.fields.dateTimeSelector.value.startDateTime.time}>
    Продолжительность записи, мин (1..600)........................<${configData.timer1.fields.length.value}>
    Таймер включен (Y/N)..........................................<${configData.timer1.fields.enableSwitch.value ? 'Y' : 'N'}>
    Таймер 2
    Дата включения (dd.mm.yyyy)...................................<${configData.timer2.fields.dateTimeSelector.value.startDateTime.date}>
    Время включения (hh:mm).......................................<${configData.timer2.fields.dateTimeSelector.value.startDateTime.time}>
    Продолжительность записи, мин (1..600)........................<${configData.timer2.fields.length.value}>
    Таймер включен (Y/N)..........................................<${configData.timer2.fields.enableSwitch.value ? 'Y' : 'N'}>
    Таймер 3
    Дата включения (dd.mm.yyyy)...................................<${configData.timer3.fields.dateTimeSelector.value.startDateTime.date}>
    Время включения (hh:mm).......................................<${configData.timer3.fields.dateTimeSelector.value.startDateTime.time}>
    Продолжительность записи, мин (1..600)........................<${configData.timer3.fields.length.value}>
    Таймер включен (Y/N)..........................................<${configData.timer3.fields.enableSwitch.value ? 'Y' : 'N'}>
    Таймер 4
    Дата включения (dd.mm.yyyy)...................................<${configData.timer4.fields.dateTimeSelector.value.startDateTime.date}>
    Время включения (hh:mm).......................................<${configData.timer4.fields.dateTimeSelector.value.startDateTime.time}>
    Продолжительность записи, мин (1..600)........................<${configData.timer4.fields.length.value}>
    Таймер включен (Y/N)..........................................<${configData.timer4.fields.enableSwitch.value ? 'Y' : 'N'}>
    
    *Дата и время системы*
    Дата (dd.mm.yyyy).............................................<${configData.clock.fields.autoUpdateClock.value ? currentDate : configData.clock.fields.dateTimeSelector.value.startDateTime.date}>
    Время (hh:mm).................................................<${configData.clock.fields.autoUpdateClock.value ? currentTime : configData.clock.fields.dateTimeSelector.value.startDateTime.time}>
    Обновить время системы (Y/N)..................................<${configData.clock.fields.enableSwitch.value ? 'Y' : 'N'}>
    
    *Сброс настроек*
    Сбросить все настройки на заводские (Y/N).....................<${configData.reset.value ? 'Y' : 'N'}>
    
    
    
    ****Сервисные данные*****
    S/N: ***
    Версия ПО: ***
    Bootloader ***
    
    `,
  };
