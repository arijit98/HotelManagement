import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, Typography, Grid2 } from '@mui/material'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import PendingActionsIcon from '@mui/icons-material/PendingActions'

const TableOverview = ({ onTableClick }) => {
  const [tables, setTables] = useState([])

  // Mock Data
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
  ]

  useEffect(() => {
    setTables(tablesData)
  }, [])

  // Define color and icon based on status
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Available':
        return { color: '#4caf50', icon: <EventSeatIcon /> }
      case 'Occupied':
        return { color: '#f44336', icon: <RestaurantIcon /> }
      case 'Reserved':
        return { color: '#ff9800', icon: <PendingActionsIcon /> }
      default:
        return { color: '#9e9e9e', icon: <EventSeatIcon /> }
    }
  }

  return (
    <Grid2 container spacing={2}>
      {tables.map((table) => {
        const { color, icon } = getStatusStyles(table.status)
        return (
          <Grid2 item xs={6} sm={4} md={3} key={table.id}>
            <CardActionArea onClick={() => onTableClick(table.id)}>
              <Card
                sx={{
                  padding: '16px',
                  textAlign: 'center',
                  borderRadius: '12px',
                  backgroundColor: `${color}20`, // Slightly transparent background
                  border: `2px solid ${color}`,
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                {icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#333', marginTop: '8px' }}
                >
                  Table {table.id}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', color: color }}
                >
                  {table.status}
                </Typography>
              </Card>
            </CardActionArea>
          </Grid2>
        )
      })}
    </Grid2>
  )
}

export default TableOverview;
