import React from 'react';
import { Palette, Moon, Sun, Laptop2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, preference, changePreference, toggleDark } = useTheme();

  const options = [
    { value: 'light', label: 'Light Mode', icon: Sun },
    { value: 'dark', label: 'Dark Mode', icon: Moon },
    { value: 'system', label: 'System', icon: Laptop2 }
  ] as const;

  return (
    <div className="relative group">
      <button className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/70 transition-all duration-200">
        <Palette className="w-5 h-5 text-white" />
      </button>

      <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">Choose Theme</h3>
        <div className="space-y-2">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => changePreference(opt.value)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${
                preference === opt.value
                  ? 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent'
              }`}
            >
              <opt.icon className="w-4 h-4" />
              <span className="text-sm text-gray-700 dark:text-gray-100">{opt.label}</span>
            </button>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
          <button
            onClick={toggleDark}
            className="w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            <span className="text-sm text-gray-700 dark:text-gray-100">
              Toggle Dark
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};