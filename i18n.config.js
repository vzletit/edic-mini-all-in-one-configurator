import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from './src/translations/ru.json';

// empty for now
const resources = {
    ru: { translation: ru },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,

    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
