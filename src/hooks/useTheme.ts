import { useState, useEffect } from 'react';
import { Theme, ThemeConfig, ThemePreference } from '../types';

const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'Light',
    primary: 'from-blue-500 to-cyan-400',
    secondary: 'from-blue-600 to-cyan-500',
    accent: 'blue',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
  },
  dark: {
    name: 'Dark',
    primary: 'from-blue-500 to-cyan-400',
    secondary: 'from-blue-600 to-cyan-500',
    accent: 'blue',
    gradient: 'bg-gradient-to-br from-gray-900 to-gray-800'
  }
};

export const useTheme = () => {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedPref = localStorage.getItem('themePreference') as ThemePreference;
    if (savedPref) {
      setPreference(savedPref);
    }
  }, []);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      const theme = preference === 'system'
        ? systemPrefersDark.matches
          ? 'dark'
          : 'light'
        : preference;
      setCurrentTheme(theme);
    };

    updateTheme();
    if (preference === 'system') {
      systemPrefersDark.addEventListener('change', updateTheme);
      return () => systemPrefersDark.removeEventListener('change', updateTheme);
    }
  }, [preference]);

  const changePreference = (pref: ThemePreference) => {
    setPreference(pref);
    localStorage.setItem('themePreference', pref);
  };

  const toggleDark = () => {
    changePreference(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, [currentTheme]);

  return {
    currentTheme,
    preference,
    themeConfig: themes[currentTheme],
    changePreference,
    toggleDark
  };
};