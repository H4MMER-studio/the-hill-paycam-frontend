import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/CeoDatas';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';

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
    overflow: hidden;
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
  right: ${(props) => (props.isShow ? '0px' : '-200px')};
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
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

const Value = styled.div<{ language: Language; isShow: Boolean }>`
  position: absolute;
  font-weight: 500;
  color: #fff;
  font-size: 30px;
  white-space: pre-wrap;
  left: ${(props) => (props.isShow ? '0px' : '-200px')};
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
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

const Image = styled.img<{ isShow: Boolean }>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const SecondContents: React.VFC<IProps> = ({ language }) => {
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
    <SecondContentsContainer>
      <Layout>
        <Image
          src={'/image/ceo-2.png'}
          isShow={isShowImage}
          ref={targetImage}
        />
        <Title language={language} isShow={isShowTitle} ref={targetTitle}>
          {CEOData[language].data[1].title}
        </Title>
        <Value language={language} isShow={isShowValue} ref={targetValue}>
          {CEOData[language].data[1].value}
        </Value>
      </Layout>
    </SecondContentsContainer>
  );
};

export default SecondContents;
