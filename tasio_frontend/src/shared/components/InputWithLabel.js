import React from 'react';
import { styled } from '@mui/system';


const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    margin: 5,

});

const Label = styled('div')({
    color: '#b9abae',
    textTransform: 'uppercase',
    fontWeight: '60',
    fontSize: '18px',

});


const Input = styled('input')({
    flexGrow: '1',
    height: '40px',
    border: '1px solid white',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#35393f',
    margin: 10,
    fontSize: '16px',
    padding: '0 5 5px',

});

const InputWithLabel = (props) => {

    const {value, setValue, label, type, placeholder} = props;
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input 
            value={value}
            onChange={handleValueChange}
            type={type}
            placeholder={placeholder}
            />
        </Wrapper>
    
  );
};

export default InputWithLabel;