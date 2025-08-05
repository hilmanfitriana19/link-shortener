import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

export const UsernameForm: React.FC = () => {
  const { username, updateUsername } = useAuth();
  const { themeConfig } = useTheme();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  if (username) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      await updateUsername(name.trim());
    } catch (error) {
      console.error('Error setting username:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700 space-y-4"
      >
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Choose a username
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))
          }
          placeholder="username"
          className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          disabled={!name.trim() || loading}
          className={`w-full bg-gradient-to-r ${themeConfig.primary} hover:${themeConfig.secondary} text-white font-semibold py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};
