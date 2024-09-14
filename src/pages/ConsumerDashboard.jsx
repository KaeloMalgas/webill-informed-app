import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Upload, FileText, User, Settings, Plus } from 'lucide-react';
import UploadMeterReading from '@/components/consumer/UploadMeterReading';
import ViewBills from '@/components/consumer/ViewBills';
import EditProfile from '@/components/consumer/EditProfile';
import { useTheme } from '@/components/ThemeProvider';
import ThemeCustomizer from '@/components/ThemeCustomizer';
import HomePage from '@/components/consumer/HomePage';

const ConsumerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const isMobile = window.innerWidth <= 768;

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { path: '/consumer/view-bills', icon: <FileText className="h-6 w-6" />, label: 'View Bills' },
    { path: '/consumer/upload-reading', icon: <Upload className="h-6 w-6" />, label: 'Upload Reading' },
    { path: '/consumer/edit-profile', icon: <User className="h-6 w-6" />, label: 'Profile' },
    { path: '/consumer/settings', icon: <Settings className="h-6 w-6" />, label: 'Settings' },
  ];

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {!isMobile && (
        <nav className="bg-secondary shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">Consumer Dashboard</span>
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-2 text-foreground hover:text-primary"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <Button onClick={handleLogout} variant="outline">Logout</Button>
            </div>
          </div>
        </nav>
      )}

      <div className="flex-1 overflow-auto">
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="upload-reading" element={<UploadMeterReading />} />
            <Route path="view-bills" element={<ViewBills />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="settings" element={<ThemeCustomizer />} />
          </Routes>
        </main>
      </div>

      {isMobile && (
        <nav className="bg-secondary shadow-md fixed bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex justify-around py-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center p-2 ${
                      location.pathname === item.path ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.icon}
                    <span className="text-xs mt-1">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <Button
        className="fixed bottom-4 right-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ConsumerDashboard;
