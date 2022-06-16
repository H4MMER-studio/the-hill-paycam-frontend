import React from 'react';
import styled from 'styled-components';
import { BusinessMenuYpe } from '@/interface';

interface IProps {
  selectedMenu: BusinessMenuYpe;
  clickMenu: (menu: BusinessMenuYpe) => void;
}

const STDMenuBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 100px;
  text-align: center;
  margin-top: 80px;

`;

const Menu = styled.div<{ isSelected: Boolean }>`
  /* padding: 24px 36px; */
  padding: 24px;
  font-size: 24px;
  line-height: 120%;
  font-weight: 800;
  color: ${(props) => (props.isSelected ? '#000' : '#a3a3a3')};
  background: ${(props) =>
    props.isSelected ? '#fff' : 'rgba(255, 255, 255, 0.2)'};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover{
    background-color:#6D6D6D;
  }
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
        isSelected={selectedMenu === 'Josun Palace Sihanoukville'}
        onClick={() => clickMenu('Josun Palace Sihanoukville')}
      >
        Josun Palace Sihanoukville
      </Menu>
    </STDMenuBarContainer>
  );
};

export default MenuBar;
