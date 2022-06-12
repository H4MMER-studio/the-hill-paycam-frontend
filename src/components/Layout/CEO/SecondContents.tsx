import React from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/CeoData';
import { Language } from '@/interface';

interface IProps {
  language: 'ENG' | 'KHM';
}

const SecondContentsContainer = styled.div`
  position: relative;
`;

const Layout = styled.div`
  width: 100%;
  height: 751px;

  @media (max-width: 1023px) {
    height: auto;
  }
`;

const Title = styled.div<{ language: Language }>`
  position: absolute;
  font-weight: 800;
  color: #fff;
  font-size: 64px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  white-space: pre-wrap;
  right: 0px;
  top: 0px;
  text-align: right;
  max-width: 1052px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
  }
`;

const Value = styled.div<{ language: Language }>`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 30px;
  white-space: pre-wrap;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 42px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  max-width: 600px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    white-space: unset;
    line-height: 24px;
    top: 0px;
    transform: translateY(0%);
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const SecondContents: React.VFC<IProps> = ({ language }) => {
  return (
    <SecondContentsContainer>
      <Layout>
        <Image src={'/image/ceo-2.png'} />
        <Title language={language}>{CEOData[language].data[1].title}</Title>
        <Value language={language}>{CEOData[language].data[1].value}</Value>
      </Layout>
    </SecondContentsContainer>
  );
};

export default SecondContents;
