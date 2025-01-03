import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Grid2,
    Fab,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

const MenuManagement = () => {

    const [menuItems, setMenuItems] = useState([])

    // Fetch menu items on component load
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/menu')
                setMenuItems(response.data) // Assuming the backend returns an array of menu items
            } catch (error) {
                console.error('Error fetching menu items:', error)
            }
        }

        fetchMenuItems()
    }, [])

    const [open, setOpen] = useState(false)
    const [newItem, setNewItem] = useState({
        itemName: '',
        itemDescription: '',
        itemPrice: 0.0,
        itemCategory: '',
    })

    const handleDialogOpen = () => setOpen(true)
    const handleDialogClose = () => setOpen(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewItem((prev) => ({
            ...prev,
            [name]: name === 'itemPrice' ? parseFloat(value) : value,
        }))
    }

    const addItem = async () => {
        try {
            // API call to add a new menu item
            const response = await axios.post('http://localhost:8080/api/v1/menu', newItem)
            const createdItem = response.data

            // Update local state with the new item
            setMenuItems((prev) => [
                ...prev,
                { id: createdItem.id, name: createdItem.itemName, price: createdItem.itemPrice },
            ])

            // Close the dialog
            setOpen(false)
            setNewItem({ itemName: '', itemDescription: '', itemPrice: 0.0, itemCategory: '' })
        } catch (error) {
            console.error('Error adding item:', error)
        }
    }

    const removeItem = (id) => {
        setMenuItems(menuItems.filter((item) => item.id !== id))
    }

    return (
        <Box sx={{ padding: '24px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Menu Management
            </Typography>
            <Grid2 container spacing={3}>
                {menuItems.map((item) => (
                    <Grid2 item xs={12} sm={6} md={4} key={item.id}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                borderRadius: '12px',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
                                    {item.description || 'No description available'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: ${item.price ? item.price.toFixed(2) : 'N/A'}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <IconButton
                                    color="error"
                                    onClick={() => removeItem(item.id)}
                                    size="small"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            {/* Floating Action Button */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleDialogOpen}
                sx={{
                    position: 'fixed',
                    bottom: '16px',
                    right: '16px',
                    boxShadow: 3,
                }}
            >
                <AddIcon />
            </Fab>

            {/* Dialog for Adding a New Item */}
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Add New Menu Item</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Item Name"
                        name="itemName"
                        fullWidth
                        margin="dense"
                        value={newItem.itemName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Item Description"
                        name="itemDescription"
                        fullWidth
                        margin="dense"
                        value={newItem.itemDescription}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Item Price"
                        name="itemPrice"
                        type="number"
                        fullWidth
                        margin="dense"
                        value={newItem.itemPrice}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Item Category"
                        name="itemCategory"
                        fullWidth
                        margin="dense"
                        value={newItem.itemCategory}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={addItem} color="primary" variant="contained">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default MenuManagement;
