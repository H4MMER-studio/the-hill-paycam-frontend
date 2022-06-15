import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SideMenu from '../Side-menu';
import { Language } from '@/interface';
import { useRouter } from 'next/router';
import { useResize, useScrollDirection } from '@/hooks';

interface IProps {
  language: Language;
  isShowNav:boolean;
  setLanguage: (lan: Language) => void;
}

const STDMainNavContainer = styled.div<{ isTop: boolean, isShowNav:boolean }>`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  z-index: 100;
  padding: 0 60px;
  ${({ isTop }) =>
    !isTop &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      border-bottom: 0.5px solid white;
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px); ;
    `}
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    height: 55px;
    padding: 0 16px;
    display:${(props) => props.isShowNav ? "flex" : "none"};
  }
`;

const LogoImage = styled.img`
  width: 100px;
  cursor: pointer;

  @media (max-width: 1023px) {
    width: 65px;
  }
`;

const RightSideLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Languages = styled.div<{ isSelected?: boolean }>`
  font-family: 'Inter';
  color: #fff;
  margin: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected
      ? css`
          border-bottom: 1px solid #fff;
        `
      : css`
          margin-bottom: 7px;
        `}

  @media (max-width: 1023px) {
    width: 42px;
    height: 54px;
    margin: 0;
  }
`;

const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: #fff;
  margin: 0 4px;
`;

const MenuIcon = styled.img`
  margin-left: 12px;
  cursor: pointer;

  @media (max-width: 1023px) {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
`;

const MainNav: React.VFC<IProps> = ({ language, isShowNav, setLanguage }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const route = useRouter();
  const { width } = useResize();
  const { scrollY } = useScrollDirection({ off: false, thresholdPixels: 10 });

  return (
    <>
      <STDMainNavContainer isTop={scrollY < 20} isShowNav={isShowNav}>
        <LogoImage src={'/image/logo.png'} onClick={() => route.push('/')} />
        <RightSideLayout>
          {width > 1023 ? (
            <>
              <Languages
                onClick={() => setLanguage('ENG')}
                isSelected={language === 'ENG'}
              >
                ENG
              </Languages>
              <Divider />
              <Languages
                onClick={() => setLanguage('KHM')}
                isSelected={language === 'KHM'}
              >
                KHM
              </Languages>
            </>
          ) : language === 'ENG' ? (
            <Languages onClick={() => setLanguage('KHM')}>KHM</Languages>
          ) : (
            <Languages onClick={() => setLanguage('ENG')}>ENG</Languages>
          )}
          <MenuIcon
            src={'/icon/menu_icon.svg'}
            onClick={() => setOpenSideMenu(true)}
          />
        </RightSideLayout>
      </STDMainNavContainer>
      <SideMenu isOpen={openSideMenu} close={() => setOpenSideMenu(false)} />
    </>
  );
};

export default MainNav;
