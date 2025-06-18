import { useState, useEffect } from 'react';
import { Theme, ThemeConfig } from '../types';

const themes: Record<Theme, ThemeConfig> = {
  blue: {
    name: 'Ocean Blue',
    primary: 'from-blue-500 to-cyan-400',
    secondary: 'from-blue-600 to-cyan-500',
    accent: 'blue',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
  },
  purple: {
    name: 'Royal Purple',
    primary: 'from-purple-500 to-pink-400',
    secondary: 'from-purple-600 to-pink-500',
    accent: 'purple',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
  },
  green: {
    name: 'Forest Green',
    primary: 'from-green-500 to-teal-400',
    secondary: 'from-green-600 to-teal-500',
    accent: 'green',
    gradient: 'bg-gradient-to-br from-green-50 to-teal-50'
  },
  orange: {
    name: 'Sunset Orange',
    primary: 'from-orange-500 to-red-400',
    secondary: 'from-orange-600 to-red-500',
    accent: 'orange',
    gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
  }
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('blue');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    const savedDark = localStorage.getItem('darkMode');
    if (savedDark) {
      setIsDarkMode(savedDark === 'true');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return {
    currentTheme,
    themeConfig: themes[currentTheme],
    allThemes: themes,
    isDarkMode,
    changeTheme,
    toggleDarkMode
  };
};