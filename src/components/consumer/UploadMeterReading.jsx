import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { extractGPSData, verifyMeterLocation, processImage } from '@/utils/imageProcessing';

const UploadMeterReading = () => {
  const [meterNumber, setMeterNumber] = useState('');
  const [reading, setReading] = useState('');
  const [image, setImage] = useState(null);
  const [gpsData, setGpsData] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      try {
        const extractedGPSData = await extractGPSData(file);
        setGpsData(extractedGPSData);
        const isLocationVerified = await verifyMeterLocation(extractedGPSData, meterNumber);
        setVerificationStatus(isLocationVerified ? 'Verified' : 'Not Verified');
      } catch (error) {
        console.error('Error processing image:', error);
        setVerificationStatus('Error');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image && verificationStatus === 'Verified') {
      try {
        const processedData = await processImage(image);
        // Here you would typically send the processed data to your backend
        console.log('Processed data:', processedData);
        alert('Meter reading submitted successfully!');
      } catch (error) {
        console.error('Error processing image:', error);
        alert('Error submitting meter reading. Please try again.');
      }
    } else {
      alert('Please upload a verified meter image before submitting.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Meter Reading</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="meterNumber" className="block text-sm font-medium text-gray-700">Meter Number</label>
          <Input
            type="text"
            id="meterNumber"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
            placeholder="Enter meter number"
            className="mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="reading" className="block text-sm font-medium text-gray-700">Current Reading</label>
          <Input
            type="number"
            id="reading"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
            placeholder="Enter current reading"
            className="mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="meterImage" className="block text-sm font-medium text-gray-700">Meter Image</label>
          <Input
            type="file"
            id="meterImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1"
            required
          />
        </div>
        {gpsData && (
          <div>
            <p>GPS Data: Lat {gpsData.latitude}, Long {gpsData.longitude}</p>
            <p>Location Verification: {verificationStatus}</p>
          </div>
        )}
        <Button type="submit" disabled={!image || verificationStatus !== 'Verified'}>Submit Reading</Button>
      </form>
    </div>
  );
};

export default UploadMeterReading;
