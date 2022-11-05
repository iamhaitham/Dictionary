import { Alert, Snackbar } from '@mui/material';
const ToastNotification = ({ 
    notificationContent, 
    severity, 
    width,
    errorNotification,
    setErrorNotification
 }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setErrorNotification({ ...errorNotification, isSearchTermNotFound: false });
    };

  return (
    <Snackbar open={ errorNotification.isSearchTermNotFound } autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={ severity } sx={{ width, marginTop: '2rem' }} onClose={ handleClose }>
            { notificationContent }
        </Alert>
    </Snackbar>
  )
}

export default ToastNotification;