import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const ConsumerQRScanner = () => {
  const [qrData, setQrData] = useState(null); // Store the QR code result
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null); // Store the API response

  // This function is triggered when a QR code is successfully scanned
  const handleScan = (result) => {
    if (result) {
      setQrData(result); // Store the scanned QR data
      fetchMeterData(result); // Call the API with the scanned data
    }
  };

  // This function is triggered if there is an error in QR scanning
  const handleError = (error) => {
    setError(`Error scanning QR code: ${error}`);
  };

  // Function to fetch meter details from the server using the scanned QR code
  const fetchMeterData = async (qrCode) => {
    try {
      const response = await axios.post('/api/meter/verify', { qrCode }); // Call your API endpoint
      setApiResponse(response.data); // Store the API response
    } catch (err) {
      setError(`Error fetching data from API: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="qr-scanner-container">
      <h1>Scan Your Electricity Meter QR Code</h1>
      
      {/* QR Reader component */}
      <QrReader
        delay={300}
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result.text); // Call the handleScan function if a QR code is found
          }
          if (!!error) {
            handleError(error); // Handle any error
          }
        }}
        style={{ width: '100%' }}
      />

      {/* Display the scanned QR data */}
      {qrData && (
        <div className="qr-result">
          <h3>Scanned QR Data:</h3>
          <p>{qrData}</p>
        </div>
      )}

      {/* Display the API response */}
      {apiResponse && (
        <div className="api-response">
          <h3>Meter Information:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}

      {/* Display any error messages */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ConsumerQRScanner;
