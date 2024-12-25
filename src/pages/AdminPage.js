import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import MenuManagement from '../features/admin/MenuManagement';
import StaffManagement from '../features/admin/StaffManagement';
import Analytics from '../features/admin/Analytics';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      {/* Tab Navigation */}
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ marginBottom: '16px' }}>
        <Tab label="Menu Management" />
        <Tab label="Staff Management" />
        <Tab label="Analytics" />
      </Tabs>

      {/* Tab Content */}
      {activeTab === 0 && <MenuManagement />}
      {activeTab === 1 && <StaffManagement />}
      {activeTab === 2 && <Analytics />}
    </Box>
  );
};

export default AdminPage;
