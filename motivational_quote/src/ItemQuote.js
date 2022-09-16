import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemQuote = (props) => {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item><h2>{props.text}</h2> <pre>{props.author}</pre></Item>
      </Stack>
    </Box>
    </div>
  )
}

export default ItemQuote;
