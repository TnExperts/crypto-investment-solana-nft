import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Button, Modal, Box } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <a>Crypto Trading</a>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button onClick={handleOpen}>Get Started</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '50%',
                backgroundColor: 'primary.dark',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            />
          </Modal>
        </Grid>
      </Grid>
      <header className="App-header">
        <h1>Crypto Trading 📈 </h1>
        <p>Learn and trade crypto!</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
