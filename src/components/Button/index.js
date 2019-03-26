import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
    width: 200px;
    border-radius: 10px;
    padding: 15px;
    margin: 50px 0;
    color: #4c4c4c;
    font-size: 1.3rem;
    border: 3px solid black;
    box-shadow: 1px 1px #000;
    text-transform: uppercase;
    
    &:hover {
        transform: scaleY(1) translateY(1px) translateX(1px);
        background: #efefef;
        cursor: pointer;
    }
`
const Button = ({onClick, text}) => {
    return(
        <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;