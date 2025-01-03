import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TableOverview from '../features/staff/TableOverview';
import OrderManagement from '../features/staff/OrderManagement';

const StaffDashboard = () => {
  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleTableClick = (tableId) => {
    setSelectedTableId(tableId);
  };

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Staff Dashboard
      </Typography>

      {/* Table Overview Section */}
      <Typography variant="h5" gutterBottom sx={{ marginBottom: '16px' }}>
        Table Overview
      </Typography>
      <Box sx={{ marginBottom: '32px' }}>
        <TableOverview onTableClick={handleTableClick} />
      </Box>

      {/* Order Management Section */}
      {selectedTableId && (
        <Box sx={{ marginTop: '32px' }}>
          <Typography variant="h5" gutterBottom>
            Orders for Table {selectedTableId}
          </Typography>
          <OrderManagement tableId={selectedTableId} />
        </Box>
      )}
    </Box>
  );
};

export default StaffDashboard;
