import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    givenName: '',
    surname: '',
    address: '',
    electricMeterId: '',
    email: '',
    secretWord: '',
    enabled: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setCustomerData(prev => ({ ...prev, enabled: value === 'true' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful addition
    console.log('Customer data:', customerData);
    toast.success('Customer added successfully!');
    // Reset form
    setCustomerData({
      givenName: '',
      surname: '',
      address: '',
      electricMeterId: '',
      email: '',
      secretWord: '',
      enabled: true
    });
  };

  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Add Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="givenName"
          value={customerData.givenName}
          onChange={handleInputChange}
          placeholder="Given Name"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="text"
          name="surname"
          value={customerData.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="text"
          name="address"
          value={customerData.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="text"
          name="electricMeterId"
          value={customerData.electricMeterId}
          onChange={handleInputChange}
          placeholder="Electric Meter ID"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="password"
          name="secretWord"
          value={customerData.secretWord}
          onChange={handleInputChange}
          placeholder="Secret Word"
          required
          className="bg-white text-orange-800"
        />
        <Select onValueChange={handleSelectChange} defaultValue="true">
          <SelectTrigger className="bg-white text-orange-800">
            <SelectValue placeholder="Enabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Enabled</SelectItem>
            <SelectItem value="false">Disabled</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">Add Customer</Button>
      </form>
    </div>
  );
};

export default AddCustomer;
