import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BusinessData } from '@/data/BusinessDatas';
import useIsInViewPort from 'use-is-in-viewport';

interface IProps {
  language: 'ENG' | 'KHM';
}

const ContentsLayout = styled.div`
  max-width: 1510px;
  margin: 0 auto;
  margin-top: 120px;
  padding: 0 100px;
`;

const FlexBox = styled.div<{ isLast?: Boolean; isAsset?: Boolean }>`
  display: flex;
  margin-bottom: ${(props) => (props.isLast ? 0 : props.isAsset ? 200 : 160)}px;
  padding-bottom: ${(props) => (props.isAsset ? 0 : 40)}px;
`;

const RightAlignTextBox = styled.div<{ isShow: boolean }>`
  position: relative;
  width: 100%;
  margin-right: 100px;
  min-width: 362px;

  right: ${(props) => (props.isShow ? 0 : 200)}px;
  transition-duration: 1s;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
`;

const LeftAlignTextBox = styled.div<{ isShow: boolean }>`
  position: relative;
  width: 100%;
  min-width: 362px;
  margin-left: 100px;

  left: ${(props) => (props.isShow ? 0 : 200)}px;
  transition-duration: 1s;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
`;

const SubValue = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  font-family: 'Inter';
  margin-bottom: 16px;
`;

const TitleValue = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  font-family: 'Inter';
  margin-bottom: 54px;
`;

const Value = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: #b5b5b5;
  white-space: pre-wrap;
`;

const ImageLayout = styled.div<{ isShow: Boolean }>`
  width: 100%;
  height: 100%;

  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
`;

const Image = styled.img`
  width: 100%;
  max-height: 432px;
  height: 100%;
`;

const LastSectionPadding = styled.div`
  padding-bottom: 300px;
`;

const DesktopContents: React.VFC<IProps> = ({ language }) => {
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
    <ContentsLayout>
      <FlexBox id="kingdom" ref={targetKingdom}>
        <RightAlignTextBox isShow={isShowKingdom}>
          <SubValue>{BusinessData[language].data[0].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[0].title}</TitleValue>
          <Value>{BusinessData[language].data[0].value}</Value>
        </RightAlignTextBox>
        <ImageLayout isShow={isShowKingdom}>
          <Image src={'/image/business_golf.png'} />
        </ImageLayout>
      </FlexBox>
      <FlexBox id="cc" ref={targetIsInGolf}>
        <ImageLayout isShow={isShowGolf}>
          <Image src={'/image/business_golf.png'} />
        </ImageLayout>
        <LeftAlignTextBox isShow={isShowGolf}>
          <SubValue>{BusinessData[language].data[1].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[1].title}</TitleValue>
          <Value>{BusinessData[language].data[1].value}</Value>
        </LeftAlignTextBox>
      </FlexBox>
      <FlexBox id="asset" isAsset ref={targetIsAsset}>
        <RightAlignTextBox isShow={isShowAsset}>
          <SubValue>{BusinessData[language].data[2].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[2].title}</TitleValue>
          <Value>{BusinessData[language].data[2].value}</Value>
        </RightAlignTextBox>
        <ImageLayout isShow={isShowAsset}>
          <Image src={'/image/bitcoin.png'} />
        </ImageLayout>
      </FlexBox>
      <FlexBox id="blockChain" ref={targetBlockChain}>
        <ImageLayout isShow={isShowBlockChain}>
          <Image src={'/image/block_chain.png'} />
        </ImageLayout>
        <LeftAlignTextBox isShow={isShowBlockChain}>
          <SubValue>{BusinessData[language].data[3].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[3].title}</TitleValue>
          <Value>{BusinessData[language].data[3].value}</Value>
        </LeftAlignTextBox>
      </FlexBox>
      <FlexBox isLast id="josun" ref={targetIsInJosun}>
        <RightAlignTextBox isShow={isShowJosun}>
          <SubValue>{BusinessData[language].data[4].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[4].title}</TitleValue>
          <Value>{BusinessData[language].data[4].value}</Value>
        </RightAlignTextBox>
        <ImageLayout isShow={isShowJosun}>
          <Image src={'/image/hotel.png'} />
        </ImageLayout>
      </FlexBox>
      <LastSectionPadding />
    </ContentsLayout>
  );
};

export default DesktopContents;
