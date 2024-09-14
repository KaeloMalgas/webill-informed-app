import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageMeters = () => {
  const [meters, setMeters] = useState([]);
  const [editingMeter, setEditingMeter] = useState(null);

  useEffect(() => {
    // Fetch meters data
    // This is a mock fetch, replace with actual API call
    const fetchMeters = async () => {
      // Simulating API call
      const response = await new Promise(resolve => setTimeout(() => resolve([
        { id: 1, meterId: 'Meter_1', longitude: 123.456, latitude: 78.910, qr: 'Meter_1' },
        { id: 2, meterId: 'Meter_2', longitude: 234.567, latitude: 89.012, qr: 'Meter_2' },
      ]), 500));
      setMeters(response);
    };
    fetchMeters();
  }, []);

  const handleEdit = (meter) => {
    setEditingMeter({ ...meter });
  };

  const handleSave = async () => {
    // Here you would typically send the updated meter to your backend
    console.log('Saving meter:', editingMeter);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setMeters(meters.map(m => m.id === editingMeter.id ? editingMeter : m));
    setEditingMeter(null);
    alert('Meter updated successfully!');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this meter?')) {
      // Here you would typically send a delete request to your backend
      console.log('Deleting meter:', id);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setMeters(meters.filter(m => m.id !== id));
      alert('Meter deleted successfully!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingMeter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Manage Meters</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meter ID</TableHead>
            <TableHead>Longitude</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>QR</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meters.map((meter) => (
            <TableRow key={meter.id}>
              <TableCell>{meter.meterId}</TableCell>
              <TableCell>{meter.longitude}</TableCell>
              <TableCell>{meter.latitude}</TableCell>
              <TableCell>{meter.qr}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(meter)} className="mr-2 bg-blue-500 hover:bg-blue-600">Edit</Button>
                <Button onClick={() => handleDelete(meter.id)} className="bg-red-500 hover:bg-red-600">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingMeter && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 text-orange-800">Edit Meter</h3>
          <Input
            type="number"
            name="longitude"
            value={editingMeter.longitude}
            onChange={handleInputChange}
            placeholder="Longitude"
            className="mb-2"
          />
          <Input
            type="number"
            name="latitude"
            value={editingMeter.latitude}
            onChange={handleInputChange}
            placeholder="Latitude"
            className="mb-2"
          />
          <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">Save Changes</Button>
        </div>
      )}
    </div>
  );
};

export default ManageMeters;