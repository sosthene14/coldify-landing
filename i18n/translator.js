// i18n/translator.js
import I18nConfig from './config.js';
import frTranslations from './fr.js';
import enTranslations from './en.js';

class Translator {
  constructor() {
    this.translations = {
      fr: frTranslations,
      en: enTranslations,
    };
    this.currentLocale = this.getInitialLocale();
    this.listeners = new Set();
  }

  getInitialLocale() {
    // Check localStorage first
    if (I18nConfig.persistLocale) {
      const savedLocale = localStorage.getItem(I18nConfig.storageKey);
      if (savedLocale && I18nConfig.supportedLocales.includes(savedLocale)) {
        return savedLocale;
      }
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (I18nConfig.supportedLocales.includes(browserLang)) {
      return browserLang;
    }

    // Fallback to default
    return I18nConfig.defaultLocale;
  }

  translate(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLocale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to default locale
        let fallbackValue = this.translations[I18nConfig.fallbackLocale];
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key; // Return the key if translation not found
          }
        }
        return fallbackValue;
      }
    }
    
    return value;
  }

  setLocale(locale) {
    if (I18nConfig.supportedLocales.includes(locale)) {
      this.currentLocale = locale;
      
      if (I18nConfig.persistLocale) {
        localStorage.setItem(I18nConfig.storageKey, locale);
      }
      
      document.documentElement.lang = locale;
      this.notifyListeners();
    }
  }

  getCurrentLocale() {
    return this.currentLocale;
  }

  onChange(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentLocale));
  }
}

export default new Translator();