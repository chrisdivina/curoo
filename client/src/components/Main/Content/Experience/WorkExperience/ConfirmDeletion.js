import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';

const ConfirmDeletion = ({ fullScreen, show, onClose, onConfirm }) => {
  return (
    <Dialog
      fullScreen={fullScreen}
      open={show}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Deleting job?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete this job?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default withMobileDialog()(ConfirmDeletion);