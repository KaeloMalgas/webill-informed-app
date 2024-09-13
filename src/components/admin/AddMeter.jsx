import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddMeter = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Meter</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="meterNumber" className="block text-sm font-medium text-gray-700">Meter Number</label>
          <Input type="text" id="meterNumber" placeholder="Enter meter number" className="mt-1" />
        </div>
        <div>
          <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer ID</label>
          <Input type="text" id="customerId" placeholder="Enter customer ID" className="mt-1" />
        </div>
        <div>
          <label htmlFor="installationDate" className="block text-sm font-medium text-gray-700">Installation Date</label>
          <Input type="date" id="installationDate" className="mt-1" />
        </div>
        <Button type="submit">Add Meter</Button>
      </form>
    </div>
  );
};

export default AddMeter;