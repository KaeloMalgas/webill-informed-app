import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateContrast, adjustTextColor } from '@/utils/colorUtils';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [customTheme, setCustomTheme] = useState(() => {
    const savedCustomTheme = localStorage.getItem('customTheme');
    return savedCustomTheme ? JSON.parse(savedCustomTheme) : null;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    if (customTheme) {
      Object.entries(customTheme).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
      
      // Adjust text color based on background brightness
      const bgColor = customTheme.background || (theme === 'light' ? '#FFFFFF' : '#000000');
      const textColor = adjustTextColor(bgColor);
      root.style.setProperty('--foreground', textColor);

      localStorage.setItem('customTheme', JSON.stringify(customTheme));
    } else {
      root.removeAttribute('style');
    }
  }, [theme, customTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const updateCustomTheme = (newTheme) => {
    const adjustedTheme = { ...newTheme };
    adjustedTheme.foreground = adjustTextColor(newTheme.background);
    setCustomTheme(adjustedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, customTheme, updateCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
