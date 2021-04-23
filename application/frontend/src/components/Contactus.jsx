
import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField'
import {Button} from 'react-bootstrap';

const Contactus = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div class="main">
            <p style={{justifySelf: 'left'}}/>Email:
            <input type='text' placeholder='Email' required/>
            Write your comment:
            <div style={{paddingTop: 20, paddingBottom: 20}}>
                <textarea type="text" rows = "8" cols = "50" name = "contactFormBody" wrap = "hard"></textarea>
            </div>
            <Button style={{ backgroundColor: '#00adb5'}} onClick={handleClickOpen}>
                Send Form
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    SYNC Contact us
            </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit?
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Send
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Contactus;