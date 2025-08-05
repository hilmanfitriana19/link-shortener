import { useEffect, useState } from 'react';
import { ThemeConfig, Theme, ThemePreference } from '../types';

const theme: ThemeConfig = {
  name: 'Dark',
  primary: 'from-blue-500 to-cyan-400',
  secondary: 'from-blue-600 to-cyan-500',
  accent: 'blue',
  gradient: 'bg-gradient-to-br from-gray-900 to-gray-800'
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');
  const [preference, setPreference] = useState<ThemePreference>('dark');

  const applyTheme = (pref: ThemePreference) => {
    if (pref === 'dark') {
      document.documentElement.classList.add('dark');
      setCurrentTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      // Only dark theme is available, so we keep currentTheme as 'dark'
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme('dark');
      } else {
        setCurrentTheme('dark');
      }
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme-preference') as ThemePreference | null;
    const pref = stored ?? 'dark';
    setPreference(pref);
    applyTheme(pref);
  }, []);

  const changePreference = (pref: ThemePreference) => {
    setPreference(pref);
    localStorage.setItem('theme-preference', pref);
    applyTheme(pref);
  };

  const toggleDark = () => {
    const newPref = preference === 'dark' ? 'system' : 'dark';
    changePreference(newPref);
  };

  return {
    currentTheme,
    preference,
    themeConfig: theme,
    changePreference,
    toggleDark,
  };
};