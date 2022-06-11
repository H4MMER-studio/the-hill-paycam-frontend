import React from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import MenuBar from './MenuBar';

const STDBusinessContainer = styled.div``;

const ContentsLayout = styled.div``;

const BusinessContainer: React.VFC = () => {
  return (
    <STDBusinessContainer>
      <Common.Banner imageSrc="/image/business.png" title="Business" />
      <MenuBar />
      <ContentsLayout></ContentsLayout>
    </STDBusinessContainer>
  );
};

export default BusinessContainer;
