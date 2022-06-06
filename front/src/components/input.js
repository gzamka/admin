import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const InputWithIcon = () => {
  return (
    
      <Box className='inputWithIcon'>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField className='input' label="Цахим шуудан оруулах" variant="standard"/>
      </Box>
    
  );
}