import React from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import FirstContents from './FirstContents';
import SecondContents from './SecondContents';
import ThirdContents from './ThirdContents';

interface IProps {
  language: 'ENG' | 'KHM';
}

const CEOContainerContainer = styled.div``;

const ContentsLayout = styled.div`
  padding: 0 100px;
  margin-top: 120px;

  @media (max-width: 1023px) {
    padding: 0 20px;
    margin-top: 0px;
  }
`;

const MarginLayout = styled.div`
  margin-bottom: 180px;

  @media (max-width: 1024px) {
    margin-bottom: 402px;
  }

  @media (max-width: 1023px) {
    margin-bottom: 73px;
  }
`;

const LastMarginLayout = styled.div`
  padding-bottom: 979px;

  @media (max-width: 1024px) {
    padding-bottom: 845px;
  }

  @media (max-width: 1023px) {
    padding-bottom: 78px;
  }
`;

const SecondMarinLayout = styled.div`
  margin-bottom: 180px;

  @media (max-width: 1023px) {
    margin-bottom: 73px;
  }
`;

const CEOContainer: React.VFC<IProps> = ({ language }) => {
  return (
    <CEOContainerContainer>
      <Common.Banner imageSrc="/image/ceo.png" title="CEO" />
      <ContentsLayout>
        <FirstContents language={language} />
        <MarginLayout />
        <SecondContents language={language} />
        <SecondMarinLayout />
        <ThirdContents language={language} />
        <LastMarginLayout />
      </ContentsLayout>
    </CEOContainerContainer>
  );
};

export default CEOContainer;
