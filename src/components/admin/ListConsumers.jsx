import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ListConsumers = () => {
  const consumers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">List of Consumers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consumers.map((consumer) => (
            <TableRow key={consumer.id}>
              <TableCell>{consumer.name}</TableCell>
              <TableCell>{consumer.email}</TableCell>
              <TableCell>{consumer.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListConsumers;