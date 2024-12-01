import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Upload, FileText, User, QrCode, LogOut } from 'lucide-react';
import HomePage from '@/components/consumer/HomePage';
import UploadMeterReading from '@/components/consumer/UploadMeterReading';
import ViewBills from '@/components/consumer/ViewBills';
import EditProfile from '@/components/consumer/EditProfile';
import QrScanner from '@/components/consumer/ConsumerQRScanner';
import { toast } from "sonner";

const ConsumerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate('/login');
  };

  const navItems = [
    { path: '/consumer', icon: <Home className="h-5 w-5" />, label: 'Home' },
    { path: '/consumer/upload-reading', icon: <Upload className="h-5 w-5" />, label: 'Upload' },
    { path: '/consumer/view-bills', icon: <FileText className="h-5 w-5" />, label: 'Bills' },
    { path: '/consumer/edit-profile', icon: <User className="h-5 w-5" />, label: 'Profile' },
    { path: '/consumer/qr-scanner', icon: <QrCode className="h-5 w-5" />, label: 'Scan QR' },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/consumer" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Consumer Dashboard</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              className="h-9 w-9"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-6 md:py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="upload-reading" element={<UploadMeterReading />} />
          <Route path="view-bills" element={<ViewBills />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="qr-scanner" element={<QrScanner />} />
        </Routes>
      </main>

      {/* Navigation */}
      <nav className={`border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isMobile ? 'fixed bottom-0 left-0 right-0' : 'hidden md:block'}`}>
        <div className="container">
          <ul className="flex justify-around items-center py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
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
    </div>
  );
};

export default ConsumerDashboard;