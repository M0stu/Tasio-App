import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInput = ({email,setEmail,password, setPassword}) => {
  return (<div>
    <InputWithLabel
        value={email}
        setValue={setEmail}
        label='E-Mail'
        type='text'
        placeholder='Enter Your Email'
    />
    <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter Your Password'
    />
    </div>
    
  );
};

export default LoginPageInput;