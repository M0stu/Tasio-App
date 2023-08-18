import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const getFormNotValidMessage = () => {
  return 'Enter Correct E-Mail , Password > 8 characters!'
}

const getFormValidMessage = () => {
  return 'Press to Register!'
}


const RegisterPageFooter = ({handleRegister, isFormValid}) => {

  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
  <div>
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
    <div>
        <CustomPrimaryButton
            label='Register'
            additionalStyles={{marginTop: '25px'}}
            disabled={!isFormValid}
            onClick={handleRegister}
        />
    </div>
    </Tooltip>
    <div>
      <RedirectInfo
      text={'Already a Tasio User ?'}
      redirectText={' Sign in!'}
      aditionalStyles={{marginTop: '5px'}}
      redirectHandler={handlePushToLoginPage}>

      </RedirectInfo>
    </div>
  </div>
  );
};

export default RegisterPageFooter;