import { useState, useEffect } from 'react';
import { Theme, ThemeConfig } from '../types';

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
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
    }
  }, []);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return {
    currentTheme,
    themeConfig: themes[currentTheme],
    allThemes: themes,
    changeTheme,
    toggleTheme
  };
};