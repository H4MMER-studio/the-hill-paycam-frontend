import React from 'react';
import styled from 'styled-components';

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
`;

const HomeIcon = styled.img`
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #fff;
  margin: 0 20px;
`;

const HomeText = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: 'Inter';
  font-weight: 600;
  cursor: pointer;
`;

const CurrentMenuLayout = styled.div`
  display: flex;
  align-items: center;
  width: 179px;
  justify-content: space-between;
  cursor: pointer;
`;

const ExpandIcon = styled.img``;

const CurrentMenu = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  font-family: 'Inter';
`;

const Banner: React.FC<IProps> = ({ imageSrc, title }) => {
  return (
    <STDBannerContainer>
      <BannerImage src={imageSrc} />
      <BannerContentsLayout>
        <MenuTitle>{title}</MenuTitle>
        <MenuLayout>
          <HomeIcon src={'/icon/home.svg'} />
          <Divider />
          <HomeText>Home</HomeText>
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
