import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BusinessData } from '@/data/BusinessDatas';
import { Language } from '@/interface';
import useIsInViewPort from 'use-is-in-viewport';

interface IProps {
  language: 'ENG' | 'KHM';
}

const STDMobileContentsLayout = styled.div``;

const SectionLayout = styled.section`
  padding: 0 20px;
  padding-bottom: 100px;
`;

const TopLayout = styled.div`
  display: flex;
`;

const TopLeftLayout = styled.div<{ isShow: boolean }>`
  position: relative;
  width: 100%;
  right: ${(props) => (props.isShow ? 0 : 200)}px;
  transition-duration: 1s;
  opacity: ${(props) => (props.isShow ? 1 : 0)};

  @media (max-width: 1023px) {
    padding-right: 24px;
  }
`;

const SubValue = styled.div<{ language: Language }>`
  color: #cecece;
  font-weight: 800;
  margin-bottom: 16px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
`;

const Title = styled.div<{ language: Language }>`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  color: #fff;
  width: 202px;

  @media (max-width: 1023px) {
    width: 197px;
  }
`;

const ImageLayout = styled.div<{ isShow: Boolean }>`
  width: 100%;
  max-height: 165px;
  border-radius: 13px;
  overflow: hidden;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1023px) {
    min-width: 155.5px;
    min-height: 165px;
  }
`;

const ValueLayout = styled.div<{ language: Language; isShow: Boolean }>`
  position: relative;
  font-weight: 500;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  font-size: 14px;
  line-height: 21px;
  color: #ebebeb;
  white-space: pre-wrap;
  margin-top: 36px;

  top: ${(props) => (props.isShow ? 0 : 80)}px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
`;

const TopRightLayout = styled.div`
  width: 100%;
  padding-left: 24px;
`;

const MobileContents: React.VFC<IProps> = ({ language }) => {
  const [isInKingdom, targetKingdom] = useIsInViewPort();
  const [isInGolf, targetIsInGolf] = useIsInViewPort();
  const [isInAsset, targetIsAsset] = useIsInViewPort();
  const [isInBlockChain, targetBlockChain] = useIsInViewPort();
  const [isInJosun, targetIsInJosun] = useIsInViewPort();

  const [isShowKingdom, setIsShowKingdom] = useState(false);
  const [isShowGolf, setIsShowGolf] = useState(false);
  const [isShowAsset, setIsShowAsset] = useState(false);
  const [isShowBlockChain, setIsShowBlockChain] = useState(false);
  const [isShowJosun, setIsShowJosun] = useState(false);

  useEffect(() => {
    isInKingdom && !isShowKingdom && setIsShowKingdom(true);
  }, [isInKingdom]);
  useEffect(() => {
    isInGolf && !isShowGolf && setIsShowGolf(true);
  }, [isInGolf]);
  useEffect(() => {
    isInAsset && !isShowAsset && setIsShowAsset(true);
  }, [isInAsset]);
  useEffect(() => {
    isInBlockChain && !isShowBlockChain && setIsShowBlockChain(true);
  }, [isInBlockChain]);
  useEffect(() => {
    isInJosun && !isShowJosun && setIsShowJosun(true);
  }, [isInJosun]);

  return (
    <STDMobileContentsLayout>
      <SectionLayout id="kingdom" ref={targetKingdom}>
        <TopLayout>
          <TopLeftLayout isShow={isShowKingdom}>
            <SubValue language={language}>
              {BusinessData[language].data[0]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[0]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout isShow={isShowKingdom}>
            <Image src={'/image/business_golf.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language} isShow={isShowKingdom}>
          {BusinessData[language].data[0]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="cc" ref={targetIsInGolf}>
        <TopLayout>
          <ImageLayout isShow={isShowGolf}>
            <Image src={'/image/business_golf.png'} />
          </ImageLayout>
          <TopRightLayout>
            <SubValue language={language}>
              {BusinessData[language].data[1]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[1]?.title}
            </Title>
          </TopRightLayout>
        </TopLayout>
        <ValueLayout language={language} isShow={isShowGolf}>
          {BusinessData[language].data[1]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="asset" ref={targetIsAsset}>
        <TopLayout>
          <TopLeftLayout isShow={isShowAsset}>
            <SubValue language={language}>
              {BusinessData[language].data[2]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[2]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout isShow={isShowAsset}>
            <Image src={'/image/bitcoin.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language} isShow={isShowAsset}>
          {BusinessData[language].data[2]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="blockChain" ref={targetBlockChain}>
        <TopLayout>
          <ImageLayout isShow={isShowBlockChain}>
            <Image src={'/image/block_chain.png'} />
          </ImageLayout>
          <TopRightLayout>
            <SubValue language={language}>
              {BusinessData[language].data[3]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[3]?.title}
            </Title>
          </TopRightLayout>
        </TopLayout>
        <ValueLayout language={language} isShow={isShowBlockChain}>
          {BusinessData[language].data[3]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="josun" ref={targetIsInJosun}>
        <TopLayout>
          <TopLeftLayout isShow={isShowJosun}>
            <SubValue language={language}>
              {BusinessData[language].data[4]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[4]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout isShow={isShowJosun}>
            <Image src={'/image/hotel.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language} isShow={isShowJosun}>
          {BusinessData[language].data[4]?.value}
        </ValueLayout>
      </SectionLayout>
    </STDMobileContentsLayout>
  );
};

export default MobileContents;
