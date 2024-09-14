import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from 'lucide-react';
import AddCustomer from '@/components/admin/AddCustomer';
import ListConsumers from '@/components/admin/ListConsumers';
import AddMeter from '@/components/admin/AddMeter';
import { useTheme } from '@/components/ThemeProvider';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col h-screen bg-orange-500 text-white">
      <nav className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">Admin Dashboard</span>
            </div>
            <div className="flex items-center">
              <Button onClick={toggleTheme} variant="ghost" className="mr-2">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button onClick={handleLogout} variant="outline" className="hidden md:block">Logout</Button>
              <button onClick={toggleNav} className="md:hidden p-2">
                {isNavOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className={`w-64 bg-black p-4 shadow-md md:block ${isNavOpen ? 'block' : 'hidden'} absolute md:relative z-10 md:z-0 h-full`}>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/admin/add-customer" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-orange-500 hover:text-white hover:bg-orange-600">Add Customer</Button></Link></li>
              <li><Link to="/admin/list-consumers" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-orange-500 hover:text-white hover:bg-orange-600">List Consumers</Button></Link></li>
              <li><Link to="/admin/add-meter" onClick={() => setIsNavOpen(false)}><Button variant="ghost" className="w-full justify-start text-orange-500 hover:text-white hover:bg-orange-600">Add Meter</Button></Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="list-consumers" element={<ListConsumers />} />
            <Route path="add-meter" element={<AddMeter />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
