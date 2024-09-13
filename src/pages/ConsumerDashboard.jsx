import { Routes, Route, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import UploadMeterReading from '@/components/consumer/UploadMeterReading';
import ViewBills from '@/components/consumer/ViewBills';
import EditProfile from '@/components/consumer/EditProfile';

const ConsumerDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4">
        <h1 className="text-2xl font-bold mb-4">Consumer Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/consumer/upload-reading"><Button variant="ghost" className="w-full justify-start">Upload Meter Reading</Button></Link></li>
            <li><Link to="/consumer/view-bills"><Button variant="ghost" className="w-full justify-start">View Bills</Button></Link></li>
            <li><Link to="/consumer/edit-profile"><Button variant="ghost" className="w-full justify-start">Edit Profile</Button></Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="upload-reading" element={<UploadMeterReading />} />
          <Route path="view-bills" element={<ViewBills />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default ConsumerDashboard;