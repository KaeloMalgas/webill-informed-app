import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Users, FileText, Settings, User, BarChart } from 'lucide-react';
import AddCustomer from '@/components/admin/AddCustomer';
import ListConsumers from '@/components/admin/ListConsumers';
import AddMeter from '@/components/admin/AddMeter';
import EditAdminProfile from '@/components/admin/EditAdminProfile';
import ManageMeters from '@/components/admin/ManageMeters';
import GenerateBill from '@/components/admin/GenerateBill';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', icon: <Home className="h-6 w-6" />, label: 'Home' },
    { path: '/admin/list-consumers', icon: <Users className="h-6 w-6" />, label: 'Consumers' },
    { path: '/admin/generate-bill', icon: <FileText className="h-6 w-6" />, label: 'Bills' },
  ];

  const HomePage = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome, Admin</h1>
      
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-primary">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">No recent activity to display.</p>
        </CardContent>
      </Card>

      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-primary">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Link to="/admin/add-customer">
            <Button variant="outline" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </Link>
          <Link to="/admin/add-meter">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Add Meter
            </Button>
          </Link>
          <Link to="/admin/manage-meters">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Manage Meters
            </Button>
          </Link>
          <Link to="/admin/edit-profile">
            <Button variant="outline" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <nav className="bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Admin Dashboard</span>
            </div>
            <div className="flex items-center">
              <Button onClick={handleLogout} variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 overflow-auto">
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="list-consumers" element={<ListConsumers />} />
            <Route path="add-meter" element={<AddMeter />} />
            <Route path="edit-profile" element={<EditAdminProfile />} />
            <Route path="manage-meters" element={<ManageMeters />} />
            <Route path="generate-bill" element={<GenerateBill />} />
          </Routes>
        </main>
      </div>

      <nav className="bg-secondary shadow-md fixed bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-around py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center p-2 transition-colors duration-200 ${
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
    </div>
  );
};

export default AdminDashboard;
