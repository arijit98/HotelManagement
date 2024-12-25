import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const OrderManagement = ({ tableId }) => {
  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/orders/${tableId}`)
//       .then(response => setOrders(response.data))
//       .catch(error => console.error(error));
//   }, [tableId]);

//   const markAsServed = (orderId) => {
//     axios.post(`/api/orders/${orderId}/status`, { status: 'served' })
//       .then(() => alert('Order marked as served'))
//       .catch(error => console.error(error));
//   };
  useEffect(() => {
    const localOrders = [
        { id: 1, items: ['Burger', 'Fries'] },
        { id: 2, items: ['Pizza', 'Salad'] }
    ];
    setOrders(localOrders);
}, [tableId]);

const markAsServed = (orderId) => {
    alert(`Order ${orderId} marked as served`);
};

  return (
    <List>
      {orders.map((order) => (
        <ListItem key={order.id}>
          <ListItemText primary={`Order ${order.id}`} secondary={`Items: ${order.items.length}`} />
          <Button onClick={() => markAsServed(order.id)}>Mark as Served</Button>
        </ListItem>
      ))}
    </List>
  );
};
export default OrderManagement;