import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import { VisionData } from '@/data/VisionDatas';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';

interface IProps {
  language: 'ENG' | 'KHM';
}

const STDVisionLayout = styled.div``;

const ContentsLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 100px;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }
`;

const YoungerPopulatinoLayout = styled.div`
  position: relative;
  margin-top: 390px;
  margin-bottom: 420px;
  height: 329px;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 48px;
    margin-bottom: 0px;
  }
`;

const InfiniteGlowthLayout = styled.div`
  position: relative;
  margin-top: 390px;
  margin-bottom: 150px;
  height: 329px;
  width: 1000px;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 48px;
    margin-bottom: 0px;
  }
`;

const Vistion2Image = styled.img<{ isShow: boolean }>`
  position: absolute;
  width: 363px;
  height: 383px;
  bottom: 216px;
  border-radius: 13px;
  right: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: auto;
  }
`;

const Title = styled.div<{ language: Language; isShow: Boolean }>`
  position: relative;
  color: #fff;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 84px;
  text-align: center;
  z-index: 2;

  top: ${(props) => (props.isShow ? 0 : 100)}px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const Value = styled.div<{ language: Language; isShow: Boolean }>`
  position: relative;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  color: #fff;
  white-space: pre-wrap;
  text-align: center;
  z-index: 2;
  font-size: 30px;
  height: 329px;
  max-width: 1000px;
  top: ${(props) => (props.isShow ? 0 : 100)}px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    font-size: 16px;
    text-align: left;
    height: auto;
  }
`;

const YoungerImage = styled.img<{ isShow: boolean }>`
  position: absolute;
  width: 363px;
  height: 383px;
  bottom: 216px;
  border-radius: 13px;
  left: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: auto;
  }
`;

const Vistion3Image = styled.img<{ isShow: boolean }>`
  position: absolute;
  width: 363px;
  height: 383px;
  bottom: 216px;
  border-radius: 13px;
  left: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: auto;
  }
`;

const CambodiaLayout = styled.div`
  position: relative;
  margin-top: 390px;
  margin-bottom: 150px;
  height: 329px;
  max-width: 1000px;

  @media (max-width: 1023px) {
    margin-top: 72px;
    padding-bottom: 176px;
    height: auto;
  }
`;

const VisionContainer: React.VFC<IProps> = ({ language }) => {
  const [isInYounger, targetYounger] = useIsInViewport();
  const [isInYoungerImg, targetYoungerImg] = useIsInViewport();

  const [isInInfinite, targetInfinite] = useIsInViewport();
  const [isInInfiniteImg, targetIsInInfiniteImg] = useIsInViewport();

  const [isInCambodiaImg, targetCambodiaImg] = useIsInViewport();
  const [isInCambodiaContents, targetIsInCambodiaContents] = useIsInViewport();

  const [isShowYoungerImg, setIsShowyoungerImg] = useState(false);
  const [isShowYoungerContents, setIsShowYoungerContents] = useState(false);

  const [isShowInfiniteContents, setIsShowInfiniteContents] = useState(false);
  const [isShowInfiniteImg, setIsShowInfiniteImg] = useState(false);

  const [isShowCambodiaContents, setIsShowCambodiaContents] = useState(false);
  const [isShowCambodiaImg, setIsShowCambodiaImg] = useState(false);

  useEffect(() => {
    isInYoungerImg && !isShowYoungerImg && setIsShowyoungerImg(true);
  }, [isInYoungerImg]);

  useEffect(() => {
    !isShowYoungerContents && isInYounger && setIsShowYoungerContents(true);
  }, [isInYounger]);

  useEffect(() => {
    isInInfinite && !isShowInfiniteContents && setIsShowInfiniteContents(true);
  }, [isInInfinite]);

  useEffect(() => {
    isInInfiniteImg && !isShowInfiniteImg && setIsShowInfiniteImg(true);
  }, [isInInfiniteImg]);

  useEffect(() => {
    isInCambodiaImg && !isShowCambodiaImg && setIsShowCambodiaImg(true);
  }, [isInCambodiaImg]);

  useEffect(() => {
    isInCambodiaContents &&
      !isShowCambodiaContents &&
      setIsShowCambodiaContents(true);
  }, [isInCambodiaContents]);

  return (
    <STDVisionLayout>
      <Common.Banner imageSrc="/image/vision.png" title="Vision" />
      <ContentsLayout>
        <div>
          <YoungerPopulatinoLayout>
            <YoungerImage
              src={'/image/vision-1.png'}
              isShow={isShowYoungerImg}
              ref={targetYoungerImg}
            />
            <Title
              isShow={isShowYoungerContents}
              language={language}
              ref={targetYounger}
            >
              {VisionData[language].data[0].title}
            </Title>
            <Value isShow={isShowYoungerContents} language={language}>
              {VisionData[language].data[0].value}
            </Value>
          </YoungerPopulatinoLayout>
          <InfiniteGlowthLayout>
            <Vistion2Image
              src={'/image/vision-2.png'}
              ref={targetIsInInfiniteImg}
              isShow={isShowInfiniteImg}
            />
            <Title
              language={language}
              ref={targetInfinite}
              isShow={isShowInfiniteContents}
            >
              {VisionData[language].data[1].title}
            </Title>
            <Value
              language={language}
              ref={targetInfinite}
              isShow={isShowInfiniteContents}
            >
              {VisionData[language].data[1].value}
            </Value>
          </InfiniteGlowthLayout>
          <CambodiaLayout>
            <Vistion3Image
              src={'/image/vision-3.png'}
              ref={targetCambodiaImg}
              isShow={isShowCambodiaImg}
            />
            <Title
              language={language}
              isShow={isShowCambodiaContents}
              ref={targetIsInCambodiaContents}
            >
              {VisionData[language].data[2].title}
            </Title>
            <Value language={language} isShow={isShowCambodiaContents}>
              {VisionData[language].data[2].value}
            </Value>
          </CambodiaLayout>
        </div>
      </ContentsLayout>
    </STDVisionLayout>
  );
};

export default VisionContainer;
