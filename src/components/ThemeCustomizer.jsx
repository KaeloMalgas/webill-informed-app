import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ThemeCustomizer = () => {
  const { customTheme, updateCustomTheme } = useTheme();
  const [tempTheme, setTempTheme] = useState(customTheme || {
    primary: '#FF4500',
    secondary: '#000000',
    background: '#FFFFFF',
    text: '#000000',
    accent: '#FF4500',
  });

  const handleColorChange = (e) => {
    setTempTheme({ ...tempTheme, [e.target.name]: e.target.value });
  };

  const applyTheme = () => {
    updateCustomTheme(tempTheme);
  };

  const resetTheme = () => {
    updateCustomTheme(null);
    setTempTheme({
      primary: '#FF4500',
      secondary: '#000000',
      background: '#FFFFFF',
      text: '#000000',
      accent: '#FF4500',
    });
  };

  return (
    <div className="p-4 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Customize Theme</h2>
      <div className="space-y-4">
        {Object.entries(tempTheme).map(([key, value]) => (
          <div key={key}>
            <Label htmlFor={key} className="text-foreground">{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
            <Input
              type="color"
              id={key}
              name={key}
              value={value}
              onChange={handleColorChange}
              className="w-full h-10"
            />
          </div>
        ))}
        <div className="flex space-x-2">
          <Button onClick={applyTheme} className="bg-primary text-primary-foreground hover:bg-primary/90">Apply Theme</Button>
          <Button onClick={resetTheme} variant="outline" className="text-foreground">Reset to Default</Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;