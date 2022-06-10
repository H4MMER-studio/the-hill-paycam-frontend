import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../Side-menu';
import { Language } from '@/interface';
import { useRouter } from 'next/router';

interface IProps {
  setLanguage: (lan: Language) => void;
}

const STDMainNavContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100px;
  z-index: 100;
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 124px;
  height: 58px;
  cursor: pointer;
`;

const RightSideLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Languages = styled.div`
  font-family: 'Inter';
  color: #fff;
  width: 59px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
`;

const MainNav: React.VFC<IProps> = ({ setLanguage }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const route = useRouter();

  return (
    <>
      <STDMainNavContainer>
        <LogoImage src={'/image/logo.png'} onClick={() => route.push('/')} />
        <RightSideLayout>
          <Languages onClick={() => setLanguage('ENG')}>ENG</Languages>
          <Divider />
          <Languages onClick={() => setLanguage('KHM')}>KHM</Languages>
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
