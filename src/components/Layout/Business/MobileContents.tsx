import React from 'react';
import styled from 'styled-components';
import { BusinessData } from '@/data/BusinessDatas';
import { Language } from '@/interface';

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

const TopLeftLayout = styled.div`
  width: 100%;

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

const ImageLayout = styled.div`
  width: 100%;
  max-height: 165px;
  border-radius: 13px;
  overflow: hidden;
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

const ValueLayout = styled.div<{ language: Language }>`
  font-weight: 500;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  font-size: 14px;
  line-height: 21px;
  color: #ebebeb;
  white-space: pre-wrap;
  margin-top: 36px;
`;

const TopRightLayout = styled.div`
  width: 100%;
  padding-left: 24px;
`;

const MobileContents: React.VFC<IProps> = ({ language }) => {
  return (
    <STDMobileContentsLayout>
      <SectionLayout id="kingdom">
        <TopLayout>
          <TopLeftLayout>
            <SubValue language={language}>
              {BusinessData[language].data[0]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[0]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout>
            <Image src={'/image/business_golf.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language}>
          {BusinessData[language].data[0]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="cc">
        <TopLayout>
          <ImageLayout>
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
        <ValueLayout language={language}>
          {BusinessData[language].data[1]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="asset">
        <TopLayout>
          <TopLeftLayout>
            <SubValue language={language}>
              {BusinessData[language].data[2]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[2]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout>
            <Image src={'/image/bitcoin.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language}>
          {BusinessData[language].data[2]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="blockChain">
        <TopLayout>
          <ImageLayout>
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
        <ValueLayout language={language}>
          {BusinessData[language].data[3]?.value}
        </ValueLayout>
      </SectionLayout>
      <SectionLayout id="josun">
        <TopLayout>
          <TopLeftLayout>
            <SubValue language={language}>
              {BusinessData[language].data[4]?.subTitle}
            </SubValue>
            <Title language={language}>
              {BusinessData[language].data[4]?.title}
            </Title>
          </TopLeftLayout>
          <ImageLayout>
            <Image src={'/image/hotel.png'} />
          </ImageLayout>
        </TopLayout>
        <ValueLayout language={language}>
          {BusinessData[language].data[4]?.value}
        </ValueLayout>
      </SectionLayout>
    </STDMobileContentsLayout>
  );
};

export default MobileContents;
