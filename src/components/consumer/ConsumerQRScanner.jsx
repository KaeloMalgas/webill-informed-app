import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import axios from 'axios';

const ConsumerQRScanner = () => {
  const [qrData, setQrData] = useState(null);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setQrData(result.text);
      fetchMeterData(result.text);
    }
  };

  const handleError = (error) => {
    setError(`Error scanning QR code: ${error}`);
  };

  const fetchMeterData = async (qrCode) => {
    try {
      const response = await axios.post('/api/meter/verify', { qrCode });
      setApiResponse(response.data);
    } catch (err) {
      setError(`Error fetching data from API: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="qr-scanner-container">
      <h1>Scan Your Electricity Meter QR Code</h1>
      
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />

      {qrData && (
        <div className="qr-result">
          <h3>Scanned QR Data:</h3>
          <p>{qrData}</p>
        </div>
      )}

      {apiResponse && (
        <div className="api-response">
          <h3>Meter Information:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ConsumerQRScanner;
