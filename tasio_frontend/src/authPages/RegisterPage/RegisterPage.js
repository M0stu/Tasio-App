import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { Typography } from '@mui/material';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Validation
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateRegisterForm({
            username,
            email,
            password,
        }));
    }, [username, email, password]);

    //handler
    const handleRegister = () => {
        // console.log(username);
        // console.log(email);
        // console.log(password);
        // console.log('Registering'); 
        const userDetails = {
            username,
            email,
            password,
        };
        
        register(userDetails, navigate);

    };


    return(
        <AuthBox>
            <Typography variant='h5' sx={{color: 'white'}}>
                Create an Account!
            </Typography>
            <RegisterPageInput
                email={email}
                setEmail={setEmail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                />
                <RegisterPageFooter
                    handleRegister={handleRegister}
                    isFormValid={isFormValid}
                />
        </AuthBox>
    );
};


const mapActionsToProps = (dispatch) =>{
    return{  ...getActions(dispatch),};
  };

export default connect(null, mapActionsToProps) (RegisterPage);