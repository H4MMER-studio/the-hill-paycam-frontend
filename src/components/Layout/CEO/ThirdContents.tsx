import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/CeoDatas';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';

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

const Title = styled.div<{ language: Language; isShow: Boolean }>`
  position: absolute;
  font-weight: 800;
  color: #fff;
  font-size: 64px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  white-space: pre-wrap;
  left: 0px;
  top: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
  }
`;

const Value = styled.div<{ language: Language; isShow: boolean }>`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 24px;
  white-space: pre-wrap;
  right: 0px;
  top: 141px;
  line-height: 42px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  z-index: 2;
  line-height: 33.6px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

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
  const [isInContents, targetContents] = useIsInViewport();

  const [isShowContents, setIsShowContents] = useState(false);

  useEffect(() => {
    isInContents && !isShowContents && setIsShowContents(true);
  }, [isInContents]);

  return (
    <ThirdContentsContainer>
      <Layout>
        <Image src={'/image/ceo_profile.png'} />
        <Title isShow={isShowContents} language={language} ref={targetContents}>
          {CEOData[language].data[2].title}
        </Title>
        <Value isShow={isShowContents} language={language}>
          {CEOData[language].data[2].value}
        </Value>
      </Layout>
    </ThirdContentsContainer>
  );
};

export default ThirdContents;
