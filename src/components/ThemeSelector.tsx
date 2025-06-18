import React from 'react';
import { Palette, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types';

export const ThemeSelector: React.FC = () => {
  const {
    currentTheme,
    allThemes,
    changeTheme,
    isDarkMode,
    toggleDarkMode
  } = useTheme();

  return (
    <div className="relative group">
      <button className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/70 transition-all duration-200">
        <Palette className="w-5 h-5 text-white" />
      </button>

      <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Choose Theme</h3>
        <div className="space-y-2">
          {(Object.keys(allThemes) as Theme[]).map((theme) => (
            <button
              key={theme}
              onClick={() => changeTheme(theme)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${
                currentTheme === theme
                  ? 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${allThemes[theme].primary}`} />
              <span className="text-sm text-gray-700 dark:text-gray-100">{allThemes[theme].name}</span>
            </button>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            <span className="text-sm text-gray-700 dark:text-gray-100">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};