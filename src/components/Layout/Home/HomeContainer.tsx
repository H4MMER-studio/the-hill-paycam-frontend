import React from 'react';
import styled from 'styled-components';

const STDHomeContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
`;

const HomeVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const OpacityLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0px;
  z-index: 2;
`;

const HomeContiner: React.VFC = () => {
  return (
    <STDHomeContainer>
      <OpacityLayer />
      <HomeVideo loop autoPlay muted>
        <source
          src={
            'https://the-hill-paycam.s3.ap-southeast-1.amazonaws.com/home.mp4'
          }
          type={'video/mp4'}
        />
      </HomeVideo>
    </STDHomeContainer>
  );
};

export default HomeContiner;
