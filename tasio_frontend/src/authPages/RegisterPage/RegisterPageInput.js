import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInput = (props) => {
    const {email, setEmail, username, setUsername, password, setPassword} = props;
  return(
    <div>
        <InputWithLabel
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter Username'
        />
        <InputWithLabel
            value={email}
            setValue={setEmail}
            label='E-mail'
            type='text'
            placeholder='Enter Email Address'
        />
        <InputWithLabel
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter Password'
        />
    </div>
    );
  }

export default RegisterPageInput;