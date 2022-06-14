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
  /* height: 751px; */

  @media (max-width: 1023px) {
    height: auto;
    overflow: hidden;
  }
`;

const Title = styled.div<{ language: Language; isShow: Boolean }>`
  /* position: absolute; */
  font-weight: 800;
  color: #fff;
  font-size: 36px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  white-space: pre-wrap;
  /* right: ${(props) => (props.isShow ? '0px' : '-200px')}; */
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  top: 0px;
  /* text-align: right; */
  max-width: 1052px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 20px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
  }
`;

const Value = styled.div<{ language: Language; isShow: Boolean }>`
  /* position: absolute; */
  font-weight: 500;
  color: #fff;
  font-size: 20px;
  white-space: pre-wrap;
  /* left: ${(props) => (props.isShow ? '0px' : '-200px')}; */
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  line-height: 32px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  max-width: 600px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    white-space: unset;
    line-height: 24px;
    max-width: none;
    /* top: 0px; */
    /* transform: translateY(0%); */
  }
`;

const Image = styled.img<{ isShow: Boolean }>`
  /* position: absolute; */
  bottom: 0px;
  right: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  width: 100%;
  height:100%;

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const TopeLayout = styled.div`
  margin-bottom: 48px;

`

const BottomLayout = styled.div`
display:flex;
`

const DesktopImageLayout = styled.div`
  max-width: 456px;
  max-height: 292px;
  margin-right: 48px;

  @media(max-width: 1023px){
    display: none;
  }
`

const MobileImageLayout = styled.div`
display:none;


@media(max-width: 1023px){
    display: block;
  }

`


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
        <MobileImageLayout>
          <Image
              src={'/image/ceo-2.png'}
              ref={targetImage}
              isShow={true}
            />
        </MobileImageLayout>
      <TopeLayout>
      <Title language={language} isShow={isShowTitle} ref={targetTitle}>
          {CEOData[language].data[1].title}
        </Title>
      </TopeLayout>
      <BottomLayout>
      <DesktopImageLayout>
          <Image
            src={'/image/ceo-2.png'}
            isShow={isShowImage}
            ref={targetImage}
          />
        </DesktopImageLayout>
    
        <Value language={language} isShow={isShowValue} ref={targetValue}>
          {CEOData[language].data[1].value}
        </Value>
        </BottomLayout>
      </Layout>
    </SecondContentsContainer>
  );
};

export default SecondContents;
