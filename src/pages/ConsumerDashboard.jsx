import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from 'lucide-react';
import UploadMeterReading from '@/components/consumer/UploadMeterReading';
import ViewBills from '@/components/consumer/ViewBills';
import EditProfile from '@/components/consumer/EditProfile';
import { useTheme } from '@/components/ThemeProvider';
import ThemeCustomizer from '@/components/ThemeCustomizer';

const ConsumerDashboard = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <nav className="bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Consumer Dashboard</span>
            </div>
            <div className="flex items-center">
              <Button onClick={toggleTheme} variant="ghost" className="mr-2">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button onClick={handleLogout} variant="outline" className="hidden md:block">Logout</Button>
              <button onClick={toggleNav} className="md:hidden p-2">
                {isNavOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className={`w-64 bg-secondary p-4 shadow-md md:block ${isNavOpen ? 'block' : 'hidden'} absolute md:relative z-10 md:z-0 h-full`}>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/consumer/upload-reading" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary">Upload Meter Reading</Button></Link></li>
              <li><Link to="/consumer/view-bills" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary">View Bills</Button></Link></li>
              <li><Link to="/consumer/edit-profile" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary">Edit Profile</Button></Link></li>
              <li><Link to="/consumer/customize-theme" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary">Customize Theme</Button></Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="upload-reading" element={<UploadMeterReading />} />
            <Route path="view-bills" element={<ViewBills />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="customize-theme" element={<ThemeCustomizer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
