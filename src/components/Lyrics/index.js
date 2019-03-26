import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LyricsStyled = styled.p`
    width: 40%;
    height: auto;
    text-transform: none;
    font-size: 1.8rem;
    text-align: center;
    z-index: -2;
`

const Lyrics = props => {
    return (
        <LyricsStyled>
            {props.lyrics}
        </LyricsStyled>
    );
};

Lyrics.propTypes = {
    lyrics: PropTypes.string
};

export default Lyrics;