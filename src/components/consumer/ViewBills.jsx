import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ViewBills = () => {
  const bills = [
    { id: 1, date: '2023-03-01', amount: 50.25, status: 'Paid' },
    { id: 2, date: '2023-04-01', amount: 62.50, status: 'Unpaid' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">View Bills</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.date}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewBills;