import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UploadMeterReading = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Meter Reading</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="meterNumber" className="block text-sm font-medium text-gray-700">Meter Number</label>
          <Input type="text" id="meterNumber" placeholder="Enter meter number" className="mt-1" />
        </div>
        <div>
          <label htmlFor="reading" className="block text-sm font-medium text-gray-700">Current Reading</label>
          <Input type="number" id="reading" placeholder="Enter current reading" className="mt-1" />
        </div>
        <div>
          <label htmlFor="readingDate" className="block text-sm font-medium text-gray-700">Reading Date</label>
          <Input type="date" id="readingDate" className="mt-1" />
        </div>
        <Button type="submit">Submit Reading</Button>
      </form>
    </div>
  );
};

export default UploadMeterReading;