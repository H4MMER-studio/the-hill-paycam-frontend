import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import { CompanyData } from '@/data/CompanyDatas';
import { useResize } from '@/hooks';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';

interface IProps {
  language: 'ENG' | 'KHM';
}

const STDCompanyContainer = styled.div``;

const ContentsLayout = styled.div`
  padding-top: 120px;
  background-color: #000;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 95px;

  @media (max-width: 1024px) {
    padding-bottom: 239px;
    padding-top: 48px;
  }
`;

const LogoLayout = styled.div<{ isShow: Boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 72px;

  opacity: ${(props) => (props.isShow ? 1 : 0)};
  top: ${(props) => (props.isShow ? 0 : 60)}px;
  transition-duration: 1s;
`;

const LogoImage = styled.img`
  width: 303px;
  height: 142px;
`;

const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CompanyContentsImage = styled.img`
  max-width: 1200px;
  height: auto;
  max-height: 463px;
  width: 100%;
  margin-bottom: 72px;
  /* object-fit: contain; */
`;

const InfoCardLayout = styled.div`
  position: relative;
  width: 100%;
  height: 471px;
`;

const CardTitle = styled.div<{ language: 'ENG' | 'KHM' }>`
  color: #fff;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  font-size: 36px;
  font-weight: 600;
`;

const CardContents = styled.div<{ language: Language }>`
  color: #fff;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  font-size: 20px;
  font-weight: 500;
  bottom: 0px;
`;

const InfoCard = styled.div<{ idx: number; isShow: Boolean }>`
  position: absolute;
  padding: 24px;
  width: 264px;
  height: 279px;
  background-color: rgba(31, 31, 31, 0.6);
  border-radius: 13px;
  border: 1px solid #3c3c3c;
  left: ${(props) => props.idx * 25}%;
  top: ${(props) => {
    if (props.isShow) {
      if (props.idx === 0) {
        return '0px';
      } else if (props.idx === 1) {
        return '64px';
      } else if (props.idx === 2) {
        return '128px';
      } else if (props.idx) {
        return '192px';
      }
    } else {
      return '0px';
    }
  }};
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = styled.div`
  padding: 0 100px;

  @media (max-width: 1023px) {
    padding: 0 20px;
    padding-bottom: 32px;
  }
`;

const MobileCard = styled.div<{ isShow: Boolean; idx: number }>`
  position: relative;
  width: 100%;
  min-height: 143px;
  background-color: rgba(31, 31, 31, 0.6);
  border-radius: 13px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  right: ${(props) => (props.isShow ? 0 : (props.idx + 1) * 150)}px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.title``;

const CompanyContainer: React.VFC<IProps> = ({ language }) => {
  const { width } = useResize();
  const [isInCardView, targetCard] = useIsInViewport();
  const [isInLogo, targetLogo] = useIsInViewport();
  const [isInMobileCardView, targetMobileCard] = useIsInViewport();
  const [isShow, setIsShow] = useState(false);
  const [isShowLogo, setIsShowLogo] = useState(false);
  const [isShowMobileCard, setIsShowMobileCard] = useState(false);

  useEffect(() => {
    isInCardView && !isShow && setIsShow(true);
  }, [isInCardView]);

  useEffect(() => {
    isInLogo && !isShowLogo && setIsShowLogo(true);
  }, [isInLogo]);

  useEffect(() => {
    isInMobileCardView && isInMobileCardView && setIsShowMobileCard(true);
  }, [isInMobileCardView]);

  return (
    <STDCompanyContainer>
      <Title>Company Info</Title>
      <Common.Banner imageSrc={'/image/company.png'} title={'Company Info'} />
      <Layout>
        <ContentsLayout>
          <LogoLayout isShow={isShowLogo}>
            <LogoImage src={'/image/logo.png'} ref={targetLogo} />
          </LogoLayout>
          <CenterLayout>
            <div>
              <CompanyContentsImage src={'/image/company-contents.png'} />
              <InfoCardLayout ref={targetCard}>
                {CompanyData[language].data.map((d, index) => {
                  if (width > 1023) {
                    return (
                      <InfoCard key={index} idx={index} isShow={isShow}>
                        <CardTitle language={language}>{d.title}</CardTitle>
                        <CardContents language={language}>
                          {d.value}
                        </CardContents>
                      </InfoCard>
                    );
                  } else {
                    return (
                      <MobileCard
                        key={index}
                        isShow={isShowMobileCard}
                        idx={index}
                        ref={index === 0 ? targetMobileCard : () => {}}
                      >
                        <CardTitle language={language}>{d.title}</CardTitle>
                        <CardContents language={language}>
                          {d.value}
                        </CardContents>
                      </MobileCard>
                    );
                  }
                })}
              </InfoCardLayout>
            </div>
          </CenterLayout>
        </ContentsLayout>
      </Layout>
    </STDCompanyContainer>
  );
};

export default CompanyContainer;
