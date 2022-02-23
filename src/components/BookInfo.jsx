import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Switch from './Switch';
import ResponsiveDatePickers from './DatePicker';
import ButtonAction from './ButtonAction';
import LibraryContext from '../context/LibraryContext';
import { useContext, useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {

    const { title, author, pages, isRead, readDate, open,
         handleOpen, handleClose, handleChange, handleDateChange,
         addBook } = useContext(LibraryContext)

    

    return (
        <div>
            <Button onClick={handleOpen}><LocalHospitalIcon className="plus" /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <form>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Book Information
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <input onChange={handleChange}
                                    type="text" id='title' placeholder='Title*' defaultValue={title} required />
                                <input onChange={handleChange}
                                    type="text" id='author' placeholder='Author*' defaultValue={author} required />
                                <input onChange={handleChange}
                                    type="number" id='pages' placeholder='Pages' defaultValue={pages} />
                            </Typography>
                            <Switch handleChange={handleChange} />
                            <ResponsiveDatePickers handleDateChange={handleDateChange} date={readDate} />
                            <div className='control modal'>
                                <ButtonAction className='cancel' icon="" text="Cancel" onPress={handleClose} />
                                <ButtonAction className='ok' icon="" text="Ok" onPress={addBook} />
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
