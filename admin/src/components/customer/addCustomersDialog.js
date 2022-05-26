import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Add_doc } from '../Add_doc'
import { useState } from 'react';
export const AddCustomersDiolog = () => {
    const [open, setOpen] = useState(false);
    const [values, setvalues] = useState('')
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(values);
    const sub = () => {
        Add_doc({ values }, 'customers')
        setOpen(false);
    }
    return (
        <div>
            <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
            >
                Add Customers
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add customer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setvalues(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sub}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
