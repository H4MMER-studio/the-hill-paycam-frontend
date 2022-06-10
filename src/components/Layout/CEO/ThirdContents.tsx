import React from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/ceoData';

interface IProps {
  language: 'ENG' | 'KHM';
}

const ThirdContentsContainer = styled.div`
  position: relative;
`;

const Layout = styled.div`
  width: 100%;
  height: 509px;

  @media (max-width: 1023px) {
    height: auto;
  }
`;

const Title = styled.div`
  position: absolute;
  font-weight: 800;
  color: #fff;
  font-size: 64px;
  font-family: 'Inter';
  white-space: pre-wrap;
  left: 0px;
  top: 0px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
  }
`;

const Value = styled.div`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 24px;
  white-space: pre-wrap;
  right: 0px;
  top: 141px;
  line-height: 42px;
  width: 692px;
  font-family: 'Inter';
  z-index: 2;
  line-height: 33.6px;

  @media (max-width: 1024px) {
    top: 141px;
    transform: translateY(0%);
    z-index: 2;
    font-size: 24px;
    line-height: 33.6px;
    width: 100%;
  }

  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    white-space: unset;
    line-height: 24px;
    top: 0px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 383px;
  left: 0px;
  width: 645px;
  height: 805.67px;

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`;

const ThirdContents: React.FC<IProps> = ({ language }) => {
  return (
    <ThirdContentsContainer>
      <Layout>
        <Image src={'/image/ceo_profile.png'} />
        <Title>{CEOData[language].data[2].title}</Title>
        <Value>{CEOData[language].data[2].value}</Value>
      </Layout>
    </ThirdContentsContainer>
  );
};

export default ThirdContents;
