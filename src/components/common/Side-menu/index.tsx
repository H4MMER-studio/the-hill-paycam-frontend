import React from 'react';
import styled from 'styled-components';
import { MenuType } from '@/interface';
import { useRouter } from 'next/router';

interface IProps {
  isOpen: Boolean;
  close: () => void;
}

const STDSideMenuLayout = styled.div<{ isOpen: Boolean }>`
  position: relative;
  position: fixed;
  right: ${(props) => (props.isOpen ? '0px' : '-100%')};
  height: 100%;
  width: 424px;
  background-color: #000;
  z-index: 100;
  transition-duration: 0.5s;
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
`;

const Menu = styled.div<{ isSelected: Boolean }>`
  color: #fff;
  font-weight: 600;
  font-family: 'Inter';
  font-size: 36px;
  height: 49px;
  cursor: pointer;
  margin-bottom: 30px;
  border-bottom: ${(props) => (props.isSelected ? '1px solid #fff' : 'none')};
  width: fit-content;
`;

const SideMenu: React.VFC<IProps> = ({ isOpen, close }) => {
  const router = useRouter();

  const clickMenu = (menu: MenuType) => {
    switch (menu) {
      case 'HOME':
        router.push('/');
        break;

      case 'Company info.':
        router.push('/company');
        break;

      case 'CEO':
        router.push('ceo');
        break;

      case 'Vision':
        router.push('vision');
        break;

      case 'Business':
        router.push('business');
        break;

      default:
        break;
    }

    close();
  };

  return (
    <STDSideMenuLayout isOpen={isOpen}>
      <CloseIcon src={'/icon/close.svg'} onClick={close} />
      <MenuLayout>
        {MENULIST.map((menu) => {
          return (
            <Menu key={menu} isSelected onClick={() => clickMenu(menu)}>
              {menu}
            </Menu>
          );
        })}
      </MenuLayout>
    </STDSideMenuLayout>
  );
};

export default SideMenu;

const MENULIST: MenuType[] = [
  'HOME',
  'Company info.',
  'CEO',
  'Vision',
  'Business',
];
