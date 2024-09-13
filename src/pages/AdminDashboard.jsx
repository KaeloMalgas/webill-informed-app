import { Routes, Route, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AddCustomer from '@/components/admin/AddCustomer';
import ListConsumers from '@/components/admin/ListConsumers';
import AddMeter from '@/components/admin/AddMeter';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <nav>
          <ul>
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
  );
};

export default AdminDashboard;