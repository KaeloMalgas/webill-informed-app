import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const ViewBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Fetch bills data
    // This is a mock fetch, replace with actual API call
    const fetchBills = async () => {
      // Simulating API call
      const response = await new Promise(resolve => setTimeout(() => resolve([
        { id: 1, date: '2023-03-01', amount: 50.25, status: 'Paid', fileUrl: '/bills/bill_1.pdf' },
        { id: 2, date: '2023-04-01', amount: 62.50, status: 'Unpaid', fileUrl: '/bills/bill_2.pdf' },
      ]), 500));
      setBills(response);
    };
    fetchBills();
  }, []);

  const handleDownload = (fileUrl) => {
    // In a real application, this would trigger a file download
    console.log('Downloading file:', fileUrl);
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary">View Bills</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.date}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleDownload(bill.fileUrl)} variant="outline">Download</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewBills;
