import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const getFormNotValidMessage = () => {
  return 'Enter Correct E-Mail , Password > 8 characters!'
}

const getFormValidMessage = () => {
  return 'Press to Log in!'
}


const LoginPageFooter = ({handleLogin, isFormValid}) => {

  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
  <div>
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
    <div>
        <CustomPrimaryButton
            label='Log in'
            additionalStyles={{marginTop: '30px'}}
            disabled={!isFormValid}
            onClick={handleLogin}
        />
    </div>
    </Tooltip>
    <div>
      <RedirectInfo
      text={'New to Tasio ?'}
      redirectText={' Create New Account.'}
      aditionalStyles={{marginTop: '5px'}}
      redirectHandler={handlePushToRegisterPage}>

      </RedirectInfo>
    </div>
  </div>
  );
};

export default LoginPageFooter;