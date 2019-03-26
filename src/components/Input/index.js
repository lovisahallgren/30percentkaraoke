import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyled = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 5px 50px 5px;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
    border: 3px solid black;
    background: #efefef;
    z-index: 2;

    &::placeholder {
        color: green;
    }
`

const Input = ({type, name, value, placeholder, onChange}) => {
    return (
        <InputStyled 
            type={type} 
            name={name} 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        >   
        </InputStyled>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;