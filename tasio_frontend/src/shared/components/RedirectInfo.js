import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

const RedirectText = styled('span')({
    color: '#00aff4',
    fontWeight: 500,
    fontSize: '18px',
    cursor: 'pointer',


});

const RedirectInfo = ({text, redirectText, aditionalStyles, redirectHandler}) => {
  return (
  <Typography
  sx={{color: "#72767d"}}
  style={aditionalStyles ? aditionalStyles : {}}
  variant='subtitle2'>
    {text}
    <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
  </Typography>);
};

export default RedirectInfo;
