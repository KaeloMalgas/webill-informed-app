import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';

const GenerateBill = () => {
  const [consumerId, setConsumerId] = useState('');
  const [meterReading, setMeterReading] = useState('');

  const handleGenerateBill = (e) => {
    e.preventDefault();
    // Mock bill generation
    const consumption = Math.floor(Math.random() * 1000);
    const payment = consumption * 2.32 + 200 - 500;

    // In a real application, you would send this data to the backend
    console.log(`Generated bill for consumer ${consumerId}: $${payment.toFixed(2)}`);
    toast.success(`Bill generated successfully for consumer ${consumerId}`);

    // Reset form
    setConsumerId('');
    setMeterReading('');
  };

  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Generate Bill</h2>
      <form onSubmit={handleGenerateBill} className="space-y-4">
        <Input
          type="text"
          value={consumerId}
          onChange={(e) => setConsumerId(e.target.value)}
          placeholder="Consumer ID"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="number"
          value={meterReading}
          onChange={(e) => setMeterReading(e.target.value)}
          placeholder="Meter Reading"
          required
          className="bg-white text-orange-800"
        />
        <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
          Generate Bill
        </Button>
      </form>
    </div>
  );
};

export default GenerateBill;