import React from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader = () => {
  return (<div>
    <Typography variant='h5' sx={{color:'white'}}>
        Welcome To Tasio WebApp!
    </Typography>
    <Typography sx={{color:'#b9bbbe'}}>
        We are happy that YOU are with us!
    </Typography>
    </div>
   );
}

export default LoginPageHeader;

