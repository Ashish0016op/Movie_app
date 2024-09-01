import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function BottomDrawer({ open, onClose, children }) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{ height: '50%', overflow: 'auto' }}
    >
      <Box
        sx={{ width: '100%', padding: 2, position: 'relative' }}
        role="presentation"
      >
        <IconButton 
          onClick={onClose} 
          sx={{ position: 'absolute', top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Drawer>
  );
}
