import React, { useState } from 'react';
import styled from 'styled-components';
import { BusinessMenuYpe } from '@/interface';

interface IProps {
  selectedMenu: BusinessMenuYpe;
  setSelectedMenu: (menu: BusinessMenuYpe) => void;
}

const STDDropDownMenuBarLayout = styled.div`
  position: relative;
`;

const MenuBar = styled.div`
  width: 100%;
  height: 54px;
  background-color: #6100ff;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .expand {
    transform: rotate(180deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
  .collapse {
    transform: rotate(360deg);
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  @media (max-width: 1023px) {
    position: relative;
  }
`;

const ExpandIcon = styled.img``;

const MenuList = styled.div`
  position: absolute;
  top: 54px;
  width: 100%;
  left: 0px;
  z-index: 1;
  background-color: #333;
`;

const MenuItem = styled.div<{ selected: Boolean }>`
  font-family: 'Inter';
  font-weight: 800;
  font-size: 20px;
  width: 100%;
  height: 54px;
  background-color: ${(props) => (props.selected ? '#6100FF' : '#333')};
  color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-bottom:1px solid #858585;

  &:nth-last-child(1){
    border:none;

  }

  /* #808080 */
  /* '#ffffff4d' */
`;

const SelectedText = styled.div`
  font-family: 'Inter';
  font-weight: 800;
  font-size: 20px;
  color: #fff;
`;

const DropDownMenuBar: React.VFC<IProps> = ({
  selectedMenu,
  setSelectedMenu,
}) => {
  const [isExpand, setIsExpand] = useState('collapse');

  const clickMenuBar = () => {
    if (isExpand === 'collapse') {
      setIsExpand('expand');
    } else {
      setIsExpand('collapse');
    }
  };

  return (
    <STDDropDownMenuBarLayout>
      <MenuBar onClick={clickMenuBar}>
        <SelectedText>{selectedMenu}</SelectedText>
        <ExpandIcon src={'/icon/expand_more_white.svg'} className={isExpand} />

        {isExpand === 'expand' && (
          <MenuList>
            {MENU_LIST.map((m) => (
              <MenuItem
                key={m}
                selected={selectedMenu === m}
                onClick={() => setSelectedMenu(m)}
              >
                {m}
              </MenuItem>
            ))}
          </MenuList>
        )}
      </MenuBar>
    </STDDropDownMenuBarLayout>
  );
};

export default DropDownMenuBar;

const MENU_LIST: BusinessMenuYpe[] = [
  'Kingdom of State',
  'The Hill Lake CC',
  'TEBAH Project',
  'Blockchain Service',
  'Josun Palace Sihanoukville',
];
