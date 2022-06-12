import React from 'react';
import styled from 'styled-components';
import { BusinessMenuYpe } from '@/interface';

interface IProps {
  selectedMenu: BusinessMenuYpe;
  clickMenu: (menu: BusinessMenuYpe) => void;
}

const STDMenuBarContainer = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1319px;
  margin: 0 auto;
  padding: 0 100px;

  text-align: center;
`;

const Menu = styled.div<{ isSelected: Boolean }>`
  font-size: 24px;
  font-weight: 800;
  height: 77px;
  width: 278px;
  color: ${(props) => (props.isSelected ? '#000' : '#a3a3a3')};
  background: ${(props) => (props.isSelected ? '#fff' : '#000')};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const MenuBar: React.VFC<IProps> = ({ selectedMenu, clickMenu }) => {
  return (
    <STDMenuBarContainer>
      <Menu
        isSelected={selectedMenu === 'Kingdom of State'}
        onClick={() => clickMenu('Kingdom of State')}
      >
        Kingdom of State
      </Menu>
      <Menu
        isSelected={selectedMenu === 'The Hill Lake CC'}
        onClick={() => clickMenu('The Hill Lake CC')}
      >
        The Hill Lake CC
      </Menu>
      <Menu
        isSelected={selectedMenu === 'TEBAH Project'}
        onClick={() => clickMenu('TEBAH Project')}
      >
        TEBAH Project
      </Menu>
      <Menu
        isSelected={selectedMenu === 'Blockchain Service'}
        onClick={() => clickMenu('Blockchain Service')}
      >
        Blockchain Service
      </Menu>
      <Menu
        isSelected={selectedMenu === 'Josun Palace'}
        onClick={() => clickMenu('Josun Palace')}
      >
        Josun Palace
      </Menu>
    </STDMenuBarContainer>
  );
};

export default MenuBar;