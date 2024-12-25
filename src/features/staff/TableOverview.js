import React, { useEffect, useState } from 'react';
import { Card, Typography, Grid2 } from '@mui/material';
import axios from 'axios';

const TableOverview = () => {
  const [tables, setTables] = useState([]);

//   useEffect(() => {
//     axios.get('/api/tables')
//       .then(response => setTables(response.data))
//       .catch(error => console.error(error));
//   }, []);

const tablesData = [
    { id: 1, status: 'Available' },
    { id: 2, status: 'Occupied' },
    { id: 3, status: 'Reserved' },
    { id: 4, status: 'Available' },
    { id: 5, status: 'Available' },
    { id: 6, status: 'Occupied' },
    { id: 7, status: 'Reserved' },
    { id: 8, status: 'Available' },
    { id: 9, status: 'Available' },
    { id: 10, status: 'Occupied' },
    { id: 11, status: 'Reserved' },
    { id: 12, status: 'Available' },
    { id: 13, status: 'Available' },
    { id: 14, status: 'Occupied' },
    { id: 15, status: 'Reserved' },
    { id: 16, status: 'Available' },
];

useEffect(() => {
    setTables(tablesData);
}, []);

  return (
    <Grid2 container spacing={2}>
      {tables.map((table) => (
        <Grid2 item xs={3} key={table.id}>
          <Card style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6">Table {table.id}</Typography>
            <Typography>Status: {table.status}</Typography>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default TableOverview;
