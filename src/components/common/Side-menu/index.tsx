import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MenuType } from '@/interface';
import { useRouter } from 'next/router';

interface IProps {
  isOpen: Boolean;
  close: () => void;
}

const AllLayout = styled.div<{ isOpen: Boolean }>`
  position: absolute;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0px' : '-100%')};
  width: calc(100% - 424px);
  height: 100%;
  z-index: 100;
`;

const STDSideMenuLayout = styled.div<{ isOpen: Boolean }>`
  position: relative;
  position: fixed;
  right: ${(props) => (props.isOpen ? '0px' : '-100%')};
  height: 100%;
  width: 424px;
  background-color: #000;
  z-index: 1000;
  transition-duration: 0.5s;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 62px;
  top: 29px;
  cursor: pointer;
`;

const MenuLayout = styled.div`
  padding-top: 107px;
  padding-left: 70px;

  @media (max-width: 1024px) {
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Menu = styled.div<{ isSelected: Boolean }>`
  color: #fff;
  font-weight: 600;
  font-family: 'Inter';
  font-size: 28px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 30px;
  border-bottom: ${(props) => (props.isSelected ? '3px solid #fff' : 'none')};
  width: fit-content;
`;

const SideMenu: React.VFC<IProps> = ({ isOpen, close }) => {
  const router = useRouter();

  const clickMenu = (menu: {
    name: 'HOME' | 'Company info.' | 'CEO' | 'Vision' | 'Business';
    path: string;
  }) => {
    router.push(menu.path);

    close();
  };

  return (
    <>
      <AllLayout isOpen={isOpen} onClick={close} />
      <STDSideMenuLayout isOpen={isOpen}>
        <CloseIcon src={'/icon/close.svg'} onClick={close} />
        <MenuLayout>
          {MENULIST.map((menu) => {
            return (
              <Menu
                key={menu.name}
                isSelected={router.pathname === menu.path}
                onClick={() => clickMenu(menu)}
              >
                {menu.name}
              </Menu>
            );
          })}
        </MenuLayout>
      </STDSideMenuLayout>
    </>
  );
};

export default SideMenu;

const MENULIST: {
  name: 'HOME' | 'Company info.' | 'CEO' | 'Vision' | 'Business';
  path: string;
}[] = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'Company info.',
    path: '/company',
  },
  {
    name: 'CEO',
    path: '/ceo',
  },
  {
    name: 'Vision',
    path: '/vision',
  },
  {
    name: 'Business',
    path: '/business',
  },
];
