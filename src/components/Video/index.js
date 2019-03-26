import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoStyled = styled.iframe`
    width: 30px;
    height: 30px;
    background: blue;
`
const Video = props => {
    return (
        <VideoStyled
            src = {
                `https://www.youtube.com/embed/?listType=search;list=${props.song}${props.artist}`
            }
            id="video"
            width="100%" 
            height="100%"  
            frameborder="0" 
            allow="autoplay"
            autoplay="1"
        >
        </VideoStyled>
    );
};

Video.propTypes = {
    song: PropTypes.string,
    artist: PropTypes.string
};

export default Video;