import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

const ToastNotification = ({ 
    notificationContent, 
    severity, 
    width,
    isSnackBarOpen
 }) => {
    const [open, setOpen] = useState(isSnackBarOpen);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

  return (
    <Snackbar open={ open } autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={ severity } sx={{ width, marginTop: '2rem' }} onClose={ handleClose }>
            { notificationContent }
        </Alert>
    </Snackbar>
  )
}

export default ToastNotification;