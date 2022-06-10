import React from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/ceoData';

interface IProps {
  language: 'ENG' | 'KHM';
}

const FirstContentsContainer = styled.div`
  position: relative;
`;

const Layout = styled.div`
  width: 100%;
  height: 751px;

  @media (max-width: 1024px) {
    position: relative;
    height: 602px;
  }

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
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0px;

  @media (max-width: 1024px) {
    top: 462px;
  }

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const Value = styled.div`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 30px;
  white-space: pre-wrap;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 42px;

  @media (max-width: 1024px) {
    bottom: 0px;
    top: auto;
    transform: translateY(0%);
  }
  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    white-space: unset;
    line-height: 24px;
  }
`;

const FirstContents: React.FC<IProps> = ({ language }) => {
  return (
    <FirstContentsContainer>
      <Layout>
        <Image src={'/image/ceo-1.png'} />
        <Title>{CEOData[language].data[0].title}</Title>
        <Value>{CEOData[language].data[0].value}</Value>
      </Layout>
    </FirstContentsContainer>
  );
};

export default FirstContents;
