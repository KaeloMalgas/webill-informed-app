import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Users, FileText, Settings, Plus } from 'lucide-react';
import AddCustomer from '@/components/admin/AddCustomer';
import ListConsumers from '@/components/admin/ListConsumers';
import AddMeter from '@/components/admin/AddMeter';
import EditAdminProfile from '@/components/admin/EditAdminProfile';
import EditConsumerProfile from '@/components/admin/EditConsumerProfile';
import ManageMeters from '@/components/admin/ManageMeters';
import GenerateBill from '@/components/admin/GenerateBill';
import { useTheme } from '@/components/ThemeProvider';
import ThemeCustomizer from '@/components/ThemeCustomizer';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isMobile = window.innerWidth <= 768;

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { path: '/admin/manage-users', icon: <Users className="h-6 w-6" />, label: 'Manage Users' },
    { path: '/admin/view-reports', icon: <FileText className="h-6 w-6" />, label: 'View Reports' },
    { path: '/admin/settings', icon: <Settings className="h-6 w-6" />, label: 'Admin Settings' },
  ];

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {!isMobile && (
        <nav className="bg-secondary shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">Admin Dashboard</span>
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
            <Route path="manage-users" element={<ListConsumers />} />
            <Route path="view-reports" element={<div>Reports Page</div>} />
            <Route path="settings" element={<EditAdminProfile />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="add-meter" element={<AddMeter />} />
            <Route path="edit-consumer/:id" element={<EditConsumerProfile />} />
            <Route path="manage-meters" element={<ManageMeters />} />
            <Route path="generate-bill" element={<GenerateBill />} />
            <Route path="customize-theme" element={<ThemeCustomizer />} />
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
                    className="flex flex-col items-center p-2 text-foreground hover:text-primary"
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

export default AdminDashboard;
