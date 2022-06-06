import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export const SendButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button sx={{
        borderRadius: "20px"
      }} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
