import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/CeoDatas';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';

interface IProps {
  language: 'ENG' | 'KHM';
}

const FirstContentsContainer = styled.div`
  position: relative;

  @media (max-width: 1023px) {
    width: 100%;
    overflow: hidden;
  }
`;

const Layout = styled.div<{ language: Language }>`
  width: 100%;
  height: ${(props) => (props.language === 'ENG' ? 751 : 950)}px;

  @media (max-width: 1024px) {
    position: relative;
    height: 602px;
  }

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
  left: ${(props) => (props.isShow ? '0px' : '-200px')};
  opacity: ${(props) => (props.isShow ? 1 : 0)};

  top: 0px;
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const Image = styled.img<{ isShow: Boolean }>`
  position: absolute;
  bottom: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1024px) {
    top: 462px;
  }

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const Value = styled.div<{ language: Language; isShow: Boolean }>`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 30px;
  white-space: pre-wrap;
  right: ${(props) => (props.isShow ? '0px' : '-200px')};
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  /* top: 50%; */
  top: ${(props) => (props.language === 'ENG' ? '50%' : '58%')};
  transform: translateY(-50%);
  line-height: 42px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  max-width: 932px;
  /* width: ${(props) => (props.language === 'ENG' ? 'auto' : '932px')}; */

  @media (max-width: 1051px) {
    top: 58%;
  }

  @media (max-width: 1101px) {
    top: ${(props) => (props.language === 'ENG' ? '58%' : '67%')};
  }

  @media (max-width: 1024px) {
    bottom: 0px;
    top: auto;
    transform: translateY(0%);
    width: auto;
  }
  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    white-space: unset;
    line-height: 24px;
  }
`;

const FirstContents: React.FC<IProps> = ({ language }) => {
  const [isInImage, targetImage] = useIsInViewport();
  const [isInTitle, targetTitle] = useIsInViewport();
  const [isInValue, targetValue] = useIsInViewport();

  const [isShowImage, setIsShowImage] = useState(false);
  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowValue, setIsShowValue] = useState(false);

  useEffect(() => {
    isInImage && !isShowImage && setIsShowImage(true);
  }, [isInImage]);
  useEffect(() => {
    isInTitle && !isShowTitle && setIsShowTitle(true);
  }, [isInTitle]);
  useEffect(() => {
    isInValue && !isShowValue && setIsShowValue(true);
  }, [isInValue]);

  return (
    <FirstContentsContainer>
      <Layout language={language}>
        <Image
          src={'/image/ceo-1.png'}
          ref={targetImage}
          isShow={isShowImage}
        />
        <Title language={language} ref={targetTitle} isShow={isShowTitle}>
          {CEOData[language].data[0].title}
        </Title>
        <Value language={language} ref={targetValue} isShow={isShowValue}>
          {CEOData[language].data[0].value}
        </Value>
      </Layout>
    </FirstContentsContainer>
  );
};

export default FirstContents;
