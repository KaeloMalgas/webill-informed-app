// Example Node.js (Express.js) API endpoint
app.post('/api/meter/verify', async (req, res) => {
    const { qrCode } = req.body;
  
    try {
      // Here, lookup the meter information based on the QR code
      const meter = await Meter.findOne({ qr_code: qrCode }); // Assuming a MongoDB database
  
      if (!meter) {
        return res.status(404).json({ message: 'Meter not found' });
      }
  
      res.json({
        id: meter.id,
        meter_id: meter.meter_id,
        location: {
          latitude: meter.latitude,
          longitude: meter.longitude,
        },
        assigned_consumer: meter.consumer_name,
      });
    } catch (err) {
      res.status(500).json({ message: 'Error verifying meter' });
    }
  });
  