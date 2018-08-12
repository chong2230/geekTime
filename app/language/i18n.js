import I18n from 'react-native-i18n';
import zh from './zh';
import en from './en';

// I18n.defaultLocale = 'zh';
I18n.locale = 'zh';
I18n.fallbacks = true;

I18n.translations = {
	zh,
	en
};

export default I18n;