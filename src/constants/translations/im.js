import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import gj from './gj.json';

const resources = {
  en: { translation: en },
  gj: { translation: gj },
};
const fallbackLng = 'en';
const deviceLng = RNLocalize.getLocales()[0]?.languageCode || fallbackLng;

i18next.use(initReactI18next).init({
  resources,
  lng: resources[deviceLng] ? deviceLng : fallbackLng,
  fallbackLng,
  interpolation: { escapeValue: false },
});
export default i18next;
