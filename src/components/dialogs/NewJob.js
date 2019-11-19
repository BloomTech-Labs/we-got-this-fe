import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';

import NewJobForm from '../forms/NewJobForm';

export default function NewCustomer() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                size="small"
                style={{ color: 'white', borderColor: 'white', marginLeft: 20 }}
                onClick={handleOpen}
            >
                New Job
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"
            >
                <DialogTitle>Create New Job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you wish to see all unscheduled times, leave
                        everything blank and just click schedule
                    </DialogContentText>
                    <NewJobForm />
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>Create!</Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}
