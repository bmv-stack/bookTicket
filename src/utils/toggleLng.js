import i18n from '../constants/translations/im';

export const toggleLng = async () => {
  const currentLng = i18n.language;

  const nextLng = currentLng === 'en' ? 'gj' : 'en';

  await i18n.changeLanguage(nextLng);
};
