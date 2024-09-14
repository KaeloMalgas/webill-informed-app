import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { extractGPSData, verifyMeterLocation, processImage } from '@/utils/imageProcessing';

const UploadMeterReading = () => {
  const [image, setImage] = useState(null);
  const [meterReading, setMeterReading] = useState('');
  const [gpsData, setGpsData] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      try {
        const extractedGPSData = await extractGPSData(file);
        setGpsData(extractedGPSData);
        const isLocationVerified = await verifyMeterLocation(extractedGPSData);
        setVerificationStatus(isLocationVerified ? 'Verified' : 'Not Verified');
      } catch (error) {
        console.error('Error processing image:', error);
        setVerificationStatus('Error');
        toast.error('Error processing image. Please try again.');
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
        toast.success('Meter reading submitted successfully!');
      } catch (error) {
        console.error('Error processing image:', error);
        toast.error('Error submitting meter reading. Please try again.');
      }
    } else {
      toast.error('Please upload a verified meter image before submitting.');
    }
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary">Upload Meter Reading</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="meterImage" className="block text-sm font-medium text-foreground mb-2">Meter Image</label>
          <Input
            type="file"
            id="meterImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="bg-background text-foreground"
            required
          />
        </div>
        {gpsData && (
          <div className="text-foreground">
            <p>GPS Data: Lat {gpsData.latitude}, Long {gpsData.longitude}</p>
            <p>Location Verification: {verificationStatus}</p>
          </div>
        )}
        <div>
          <label htmlFor="meterReading" className="block text-sm font-medium text-foreground mb-2">Meter Reading</label>
          <Input
            type="number"
            id="meterReading"
            value={meterReading}
            onChange={(e) => setMeterReading(e.target.value)}
            placeholder="Enter meter reading"
            className="bg-background text-foreground"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={!image || verificationStatus !== 'Verified'}>
          Submit Reading
        </Button>
      </form>
    </div>
  );
};

export default UploadMeterReading;
