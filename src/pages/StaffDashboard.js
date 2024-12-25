import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import TableOverview from '../features/staff/TableOverview';
import OrderManagement from '../features/staff/OrderManagement';

const StaffDashboard = () => {
  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleTableClick = (tableId) => {
    setSelectedTableId(tableId);
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>

      {/* Table Overview Section */}
      <Typography variant="h5" gutterBottom>
        Table Overview
      </Typography>
      <Box sx={{ marginBottom: '24px' }}>
        <TableOverview onTableClick={handleTableClick} />
      </Box>

      {/* Order Management Section */}
      {selectedTableId && (
        <>
          <Typography variant="h5" gutterBottom>
            Orders for Table {selectedTableId}
          </Typography>
          <OrderManagement tableId={selectedTableId} />
        </>
      )}
    </Box>
  );
};

export default StaffDashboard;
