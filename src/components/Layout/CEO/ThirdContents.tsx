import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CEOData } from '@/data/CeoDatas';
import { Language } from '@/interface';
import useIsInViewport from 'use-is-in-viewport';
import { mixins } from '@/styles';

interface IProps {
  language: 'ENG' | 'KHM';
}

const ThirdContentsContainer = styled.div`
  position: relative;
`;

const Layout = styled.div`
  width: 100%;
  height: 509px;

  @media (max-width: 1023px) {
    height: auto;
  }
`;

const Title = styled.div<{ language: Language; isShow: Boolean }>`
  /* position: absolute; */
  font-weight: 800;
  color: #fff;
  font-size: 36px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  white-space: pre-wrap;
  left: 0px;
  top: 0px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;
  margin-bottom: 48px;

  @media (max-width: 1023px) {
    position: relative;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
  }
`;

const Value = styled.div<{ language: Language; isShow: boolean }>`
  /* position: absolute; */
  max-width: 456px;
  font-weight: 500;
  color: #fff;
  font-size: 20px;
  white-space: pre-wrap;
  right: 0px;
  /* top: 141px; */
  line-height: 32px;
  font-family: ${(props) =>
    props.language === 'ENG' ? 'Inter' : 'Noto Sans Khmer'};
  z-index: 2;
  line-height: 33.6px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition-duration: 1s;

  @media (max-width: 1024px) {
    top: 141px;
    transform: translateY(0%);
    z-index: 2;
    font-size: 24px;
    line-height: 33.6px;
    width: 100%;
    max-width: unset;
  }

  @media (max-width: 1023px) {
    position: relative;
    font-size: 16px;
    line-height: 24px;
    top: 0px;
  }
`;

const STDFlexBox = styled.div`
  ${mixins.flexSet('flex-start', 'flex-start')}
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  .number_style {
    margin-right: 8px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  /* position: absolute; */
  /* top: 383px; */
  /* left: 0px; */
  /* width: 645px;
  height: 805.67px; */

  @media (max-width: 1023px) {
    position: relative;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`;

const TopeLayout = styled.div``

const BottomLayout = styled.div`
display:flex;
`

const DesktopImageLayout = styled.div`
  max-width: 456px;
  max-height: 292px;
  margin-right: 48px;

  @media(max-width: 1023px){
    display: none;
  }
`


const MobileImageLayout = styled.div`
    display:none;


    @media(max-width: 1023px){
        display: block;
  }
`


const ThirdContents: React.FC<IProps> = ({ language }) => {
  const [isInContents, targetContents] = useIsInViewport();

  const [isShowContents, setIsShowContents] = useState(false);

  useEffect(() => {
    isInContents && !isShowContents && setIsShowContents(true);
  }, [isInContents]);

  const getCustomNumber = (num: number) => {
    switch (num) {
      case 1:
        return '??';
      case 2:
        return '??';
      case 3:
        return '??';
      case 4:
        return '???';
      default:
        return '???';
    }
  };




  return (
    <ThirdContentsContainer>
      <Layout>
      <MobileImageLayout>
          <Image
              src={'/image/CEO-change.png'}
            />
        </MobileImageLayout>
      <TopeLayout>
        <Title isShow={isShowContents} language={language} ref={targetContents}>
          {CEOData[language].data[2].title}
        </Title>
      </TopeLayout>
      <BottomLayout>
        <DesktopImageLayout>
          
          <Image src={'/image/CEO-change.png'} />
        </DesktopImageLayout>
        <Value isShow={isShowContents} language={language}>
          {language === 'KHM'
            ? CEOData[language].data[2].value
            : CEOData.ENG.data[2].value.split('\n\n').map((text, index) => (
                <STDFlexBox key={text}>
                  <span className="number_style">
                    {getCustomNumber(index + 1)}
                  </span>
                  <p>{text.slice(2)}</p>
                </STDFlexBox>
              ))}
        </Value>
      </BottomLayout>
      </Layout>
    </ThirdContentsContainer>
  );
};

export default ThirdContents;
