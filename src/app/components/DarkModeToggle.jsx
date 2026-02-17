import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors print:hidden z-10"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
