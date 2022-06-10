import React from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import { CompanyData } from '@/data/companyData';
import { useResize } from '@/hooks';

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

const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 72px;
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

const CardTitle = styled.div`
  color: #d8d8d8;
  font-family: 'Inter';
  font-size: 36px;
  font-weight: 600;
`;

const CardContents = styled.div`
  color: #d8d8d8;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 500;
  bottom: 0px;
`;

const InfoCard = styled.div<{ idx: number }>`
  position: absolute;
  padding: 24px;
  width: 264px;
  height: 279px;
  background-color: rgba(31, 31, 31, 0.6);
  border-radius: 13px;
  border: 1px solid #3c3c3c;
  left: ${(props) => props.idx * 25}%;
  top: ${(props) => {
    if (props.idx === 0) {
      return '0px';
    } else if (props.idx === 1) {
      return '64px';
    } else if (props.idx === 2) {
      return '128px';
    } else {
      return '192px';
    }
  }};
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

const MobileCard = styled.div`
  width: 100%;
  min-height: 143px;
  background-color: rgba(31, 31, 31, 0.6);
  border-radius: 13px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const BannerContentsLayout = styled.div``;

const Title = styled.title``;

const MenuTitle = styled.div`
  color: #fff;
  font-family: 'Inter';
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 32px;
  }
`;

const CompanyContainer: React.VFC<IProps> = ({ language }) => {
  const { width } = useResize();

  return (
    <STDCompanyContainer>
      <Title>Company Info</Title>
      <Common.Banner imageSrc={'/image/company.png'} title={'Company Info'} />
      <Layout>
        <ContentsLayout>
          <LogoLayout>
            <LogoImage src={'/image/logo.png'} />
          </LogoLayout>
          <CenterLayout>
            <div>
              <CompanyContentsImage src={'/image/company-contents.png'} />
              <InfoCardLayout>
                {CompanyData[language].data.map((d, index) => {
                  if (width > 1023) {
                    return (
                      <InfoCard key={d.title} idx={index}>
                        <CardTitle>{d.title}</CardTitle>
                        <CardContents>{d.value}</CardContents>
                      </InfoCard>
                    );
                  } else {
                    return (
                      <MobileCard key={d.title}>
                        <CardTitle>{d.title}</CardTitle>
                        <CardContents>{d.value}</CardContents>
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
