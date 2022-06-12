import React from 'react';
import styled from 'styled-components';
import { BusinessData } from '@/data/businessData';

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
  /* margin-bottom: 200px; */
  margin-bottom: ${(props) => (props.isLast ? 0 : props.isAsset ? 200 : 160)}px;
  padding-bottom: ${(props) => (props.isAsset ? 0 : 40)}px;
`;

const RightAlignTextBox = styled.div`
  width: 100%;
  text-align: right;
  margin-right: 100px;
  min-width: 362px;
`;

const LeftAlignTextBox = styled.div`
  width: 100%;
  text-align: left;
  min-width: 362px;
  margin-left: 100px;
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

const ImageLayout = styled.div`
  width: 100%;
  height: 100%;
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
  return (
    <ContentsLayout>
      <FlexBox id="kingdom">
        <RightAlignTextBox>
          <SubValue>{BusinessData[language].data[0].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[0].title}</TitleValue>
          <Value>{BusinessData[language].data[0].value}</Value>
        </RightAlignTextBox>
        <ImageLayout>
          <Image src={'/image/business_golf.png'} />
        </ImageLayout>
      </FlexBox>
      <FlexBox id="cc">
        <ImageLayout>
          <Image src={'/image/business_golf.png'} />
        </ImageLayout>
        <LeftAlignTextBox>
          <SubValue>{BusinessData[language].data[1].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[1].title}</TitleValue>
          <Value>{BusinessData[language].data[1].value}</Value>
        </LeftAlignTextBox>
      </FlexBox>
      <FlexBox id="asset" isAsset>
        <RightAlignTextBox>
          <SubValue>{BusinessData[language].data[2].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[2].title}</TitleValue>
          <Value>{BusinessData[language].data[2].value}</Value>
        </RightAlignTextBox>
        <ImageLayout>
          <Image src={'/image/bitcoin.png'} />
        </ImageLayout>
      </FlexBox>
      <FlexBox id="blockChain">
        <ImageLayout>
          <Image src={'/image/block_chain.png'} />
        </ImageLayout>
        <LeftAlignTextBox>
          <SubValue>{BusinessData[language].data[3].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[3].title}</TitleValue>
          <Value>{BusinessData[language].data[3].value}</Value>
        </LeftAlignTextBox>
      </FlexBox>
      <FlexBox isLast id="josun">
        <RightAlignTextBox>
          <SubValue>{BusinessData[language].data[4].subTitle}</SubValue>
          <TitleValue>{BusinessData[language].data[4].title}</TitleValue>
          <Value>{BusinessData[language].data[4].value}</Value>
        </RightAlignTextBox>
        <ImageLayout>
          <Image src={'/image/hotel.png'} />
        </ImageLayout>
      </FlexBox>
      <LastSectionPadding />
    </ContentsLayout>
  );
};

export default DesktopContents;
