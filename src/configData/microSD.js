import i18n from 'i18next';

export default {
  parameters: {
    fileName: 'CONFIG.INI',
    type: 'microSD',
    readableType: 'Edic-mini MicroSD',
    dateTimeSplitters: { date: '.', time: ':' },
    name: 'EDIC-mini microSD',
    fields: {
        sampleRate: {
            type: 'SelectorItem',
            inputType: 'ButtonsInput',
            value: 16,
            values: [8, 16],
            names: [`8 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
            `16 ${i18n.t('CONFIG__SAMPLE_RATE__KHZ')}`,
            ],
            title: i18n.t('CONFIG__SAMPLE_RATE__TITLE'),
            helper: i18n.t('CONFIG__SAMPLE_RATE__HELPER_WEENYDIME'),
        },

        bitDepth: {
            type: 'SelectorItem',
            inputType: 'ButtonsInput',
            value: 8,
            values: [8, 16],
            names: [
                `8 ${i18n.t('CONFIG__BIT_DEPTH__BIT')} (uLaw)`,
                `16 ${i18n.t('CONFIG__BIT_DEPTH__BIT')}`,
            ],
            title: i18n.t('CONFIG__BIT_DEPTH__TITLE'),
            helper: i18n.t('CONFIG__BIT_DEPTH__HELPER_WEENYDIME'),
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
    },
  },

  template: (configData, currentDate = '', currentTime = '') => `



    *****Конфигурация системы*****
    
    
    *Качество записи*
    Частота дискретизации, КГц (8/16).............................<${configData.sampleRate.value}>
    Разрядность, бит (8/16).......................................<${configData.bitDepth.value}>
    
    *Таймеры*
    Таймер 1
    Дата включения (dd.mm.yyyy)...................................<${configData.timer.fields.dateTimeSelector.value.startDateTime.date}>
    Время включения (hh:mm).......................................<${configData.timer.fields.dateTimeSelector.value.startDateTime.time}>
    Продолжительность записи, мин (1..600)........................<${configData.timer.fields.length.value}>
    Таймер включен (Y/N)..........................................<${configData.timer.fields.enableSwitch.value ? 'Y' : 'N'}>
    
    *Дата и время системы*
    Дата (dd.mm.yyyy).............................................<${configData.clock.fields.autoUpdateClock.value ? currentDate : configData.clock.fields.dateTimeSelector.value.startDateTime.date}>
    Время (hh:mm).................................................<${configData.clock.fields.autoUpdateClock.value ? currentTime : configData.clock.fields.dateTimeSelector.value.startDateTime.time}>
    Обновить время системы (Y/N)..................................<${configData.clock.fields.enableSwitch.value ? 'Y' : 'N'}>
    `,
};
