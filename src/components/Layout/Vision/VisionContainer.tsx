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
    width: 100%;
    overflow:hidden;
    padding: 0 16px;
  }
`;

const YoungerPopulatinoLayout = styled.div`
  position: relative;
  max-width: 1240px;
  width: 100%;
  margin: 80px auto 34px;


  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 48px;
    margin-bottom: 0px;
  }
`;



const InfiniteGlowthLayout = styled.div`
  position: relative;
  max-width: 1240px;
  width: 100%;
  margin: 0px auto 34px;
  /* margin-bottom: 34px; */

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin-top: 48px;
    margin-bottom: 0px;
  }
`;

const YoungerImage = styled.img<{ isShow: boolean }>`
  width: 100%;
  height: 420px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  object-fit: cover;

  @media (max-width: 1023px) {
    position: relative;
    bottom: 0px;
    width: 100%;
    min-height: 693.41px;
  }
`;


const Vistion2Image = styled.img<{ isShow: boolean }>`
  width: 100%;
  height: 420px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  object-fit: cover;

  @media (max-width: 1023px) {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: auto;
  }
`;

const Vistion3Image = styled.img<{ isShow: boolean }>`
  width: 100%;
  height: 420px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  object-fit: cover;

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
  z-index: 2;
  font-size: 30px;
  max-width: 1000px;
  top: ${(props) => (props.isShow ? 0 : 100)}px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1023px) {
    font-size: 16px;
    height: auto;
  }
`;


const CambodiaLayout = styled.div`
  position: relative;
  width:100%;
  margin-bottom: 150px;
  max-width: 1240px;
  margin: 0px auto 150px;


  @media (max-width: 1023px) {
    margin-top: 72px;
    padding-bottom: 176px;
    height: auto;
  }
`;

const RelativeBox = styled.div`
  position:relative;

`

const ContentsBoxLayout = styled.div`
   position:relative;
    width:100%;
    top: -66px;
    padding: 0 40px;

    @media(max-width:1023px){
      padding: 0 16px;
    }

 
`



const ContentsBox = styled.div`
  width:100%;
  background-color:#1E1E1E;
  display:flex;
  padding: 36px 40px;

  @media(max-width: 1023px){
    display:block;
    padding: 24px;
  }
`

const TitleValue = styled.div<{language:Language}>`
  font-size: 30px;
  font-weight: 800;
  color:#fff;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  min-width: 392px;

  @media(max-width:1023px){
    font-size:20px;
    margin-bottom:12px;
  }
`

const ValueContents = styled.div<{language:Language}>`
  font-size:20px;
  font-weight: 500;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  color:#EBEBEB;

  @media(max-width:1023px){
    font-size: 16px;
    line-height: 24px;
  }
`

const SecondValueLayout = styled.div`
  width: 203px;

  @media(max-width:1023px){
    width:100%;
  }
`


const CenterMarginLayout = styled.div`
  width: 100%;


`

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
        <CenterMarginLayout >

          <YoungerPopulatinoLayout>
            <YoungerImage
              src={'/image/vision-1.png'}
              isShow={isShowYoungerImg}
              ref={targetYoungerImg}
            />
            <ContentsBoxLayout>
            <ContentsBox>
              <TitleValue language={language}>
               {VisionData[language].data[0].title}
              </TitleValue>
              <ValueContents language={language}>
                {
                   VisionData[language].data[0].value
                }
             
              </ValueContents>

            </ContentsBox>
            </ContentsBoxLayout>
          </YoungerPopulatinoLayout>
       
    
          <InfiniteGlowthLayout>
            <Vistion2Image
              src={'/image/vision-2.png'}
              ref={targetIsInInfiniteImg}
              isShow={isShowInfiniteImg}
            />
            <ContentsBoxLayout>
            <ContentsBox>
              <TitleValue language={language}>
              <SecondValueLayout>
               {VisionData[language].data[1].title}
               </SecondValueLayout>
              </TitleValue>
              <ValueContents language={language}>
                {
                   VisionData[language].data[1].value
                }
              </ValueContents>
            </ContentsBox>
            </ContentsBoxLayout>
          </InfiniteGlowthLayout>
          <CambodiaLayout>
            <Vistion3Image
              src={'/image/vision-3.png'}
              ref={targetCambodiaImg}
              isShow={isShowCambodiaImg}
            />
             <ContentsBoxLayout>
              <ContentsBox>
                <TitleValue language={language}>
                {VisionData[language].data[2].title}
                </TitleValue>
                <ValueContents language={language}>
                  {
                    VisionData[language].data[2].value
                  }
              
                </ValueContents>

              </ContentsBox>
            </ContentsBoxLayout>
          </CambodiaLayout>
        </CenterMarginLayout>
      </ContentsLayout>
    </STDVisionLayout>
  );
};

export default VisionContainer;
