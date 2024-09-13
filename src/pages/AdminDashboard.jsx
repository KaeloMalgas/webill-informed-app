import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AddCustomer from '@/components/admin/AddCustomer';
import ListConsumers from '@/components/admin/ListConsumers';
import AddMeter from '@/components/admin/AddMeter';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button onClick={handleLogout} variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className="w-64 bg-white p-4 shadow-md">
          <nav>
            <ul className="space-y-2">
              <li><Link to="/admin/add-customer"><Button variant="ghost" className="w-full justify-start">Add Customer</Button></Link></li>
              <li><Link to="/admin/list-consumers"><Button variant="ghost" className="w-full justify-start">List Consumers</Button></Link></li>
              <li><Link to="/admin/add-meter"><Button variant="ghost" className="w-full justify-start">Add Meter</Button></Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
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