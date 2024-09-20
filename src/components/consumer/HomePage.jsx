import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Upload, FileText, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const lastBill = {
    amount: 150.25,
    dueDate: '2023-04-15',
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome, Consumer</h1>
      
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-primary">Last Bill Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">Amount Due: ${lastBill.amount.toFixed(2)}</p>
          <p className="text-foreground">Due Date: {lastBill.dueDate}</p>
          <Link to="/consumer/view-bills">
            <Button variant="outline" className="mt-2">
              <FileText className="mr-2 h-4 w-4" />
              View Full Bill
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-primary">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link to="/consumer/upload-reading">
            <Button className="w-full justify-start">
              <Upload className="mr-2 h-4 w-4" />
              Upload Meter Reading
            </Button>
          </Link>
          <Link to="/consumer/view-bills">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              View All Bills
            </Button>
          </Link>
          <Link to="/consumer/qr-scanner">
            <Button variant="outline" className="w-full justify-start">
              <QrCode className="mr-2 h-4 w-4" />
              Scan QR Code
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
