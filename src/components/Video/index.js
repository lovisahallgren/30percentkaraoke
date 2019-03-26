import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoStyled = styled.iframe`
    width: 40vw;
    height: 40vh;
    background: blue;
`

const Video = props => {
    return (
        <VideoStyled
            src="https://www.youtube.com/embed/35DY0vyVn_Y"
        
        >
        </VideoStyled>
    );
};

            // <iframe 
            //     width="100%" 
            //     height="100%" 
            //     src="https://www.youtube.com/embed/35DY0vyVn_Y" 
            //     frameborder="0" 
            //     allow="autoplay">
            // </iframe>
Video.propTypes = {
    // video: PropTypes.string
};

export default Video;