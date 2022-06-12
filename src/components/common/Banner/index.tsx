import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface IProps {
  imageSrc: string;
  title: string;
}

const STDBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    height: 275px;
  }
`;

const BannerImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientLayout = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 99px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

const BannerContentsLayout = styled.div`
  z-index: 1;
`;
const MenuTitle = styled.div`
  color: #fff;
  font-family: 'Inter';
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1023px) {
    font-size: 32px;
  }
`;

const MenuLayout = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    position: absolute;
    left: 12px;
    bottom: 12px;
    height: 28px;
  }
`;

const HomeIcon = styled.img`
  cursor: pointer;

  @media (max-width: 1023px) {
    width: 24px;
    height: 24px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #fff;
  margin: 0 20px;

  @media (max-width: 1023px) {
    height: 100%;
    margin: 0 12px;
  }
`;

const HomeText = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: 'Inter';
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

const CurrentMenuLayout = styled.div`
  display: flex;
  align-items: center;
  width: 179px;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 1023px) {
    width: 171px;
  }
`;

const ExpandIcon = styled.img`
  @media (max-width: 1023px) {
    width: 24px;
    height: 24px;
  }
`;

const CurrentMenu = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  font-family: 'Inter';

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

const Banner: React.FC<IProps> = ({ imageSrc, title }) => {
  const router = useRouter();

  return (
    <STDBannerContainer>
      <BannerImage src={imageSrc} />
      <BannerContentsLayout>
        <MenuTitle>{title}</MenuTitle>
        <MenuLayout>
          <HomeIcon src={'/icon/home.svg'} onClick={() => router.push('/')} />
          <Divider />
          <HomeText onClick={() => router.push('/')}>Home</HomeText>
          <Divider />
          <CurrentMenuLayout>
            <CurrentMenu>{title}</CurrentMenu>
            <ExpandIcon src={'/icon/expand_more.svg'} />
          </CurrentMenuLayout>
        </MenuLayout>
      </BannerContentsLayout>
      <GradientLayout />
    </STDBannerContainer>
  );
};

export default Banner;
