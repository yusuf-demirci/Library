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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const [pages, setPages] = React.useState()
    const [isRead, setIsRead] = React.useState(false)
    const [readDate, setReadDate] = React.useState(new Date());

    function handleChange(e){
        console.log(e)
        if(e.target.id === "title") setTitle(e.target.value)
        else if(e.target.id === "author") setAuthor(e.target.value)
        else if(e.target.id === "pages") setPages(e.target.value)
        else if(e.target.type === "checkbox") setIsRead(!isRead)
        
    }

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
                                type="text" id='title' placeholder='Title*' value={title}  required />
                                <input onChange={handleChange} 
                                type="text" id='author' placeholder='Author*' value={author} required />
                                <input onChange={handleChange} 
                                type="number" id='pages' placeholder='Pages' value={pages} />
                            </Typography>
                            <Switch handleChange={handleChange}/>
                            <ResponsiveDatePickers handleChange={handleChange} date={readDate}/>
                            <div className='control modal'>
                                <ButtonAction className='cancel' icon="" text="Cancel" onPress={handleClose} />
                                <ButtonAction className='ok' icon="" text="Ok" />
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
