import React, { useState } from 'react';
import styled from 'styled-components';
import { Common } from '@/components';
import MenuBar from './MenuBar';
import { useResize } from '@/hooks';
import DropDownMenuBar from './DropDownMenuBar';
import DesktopContents from './DesktopContents';
import MobileContents from './MobileContents';
import { BusinessMenuYpe } from '@/interface';

interface IProps {
  language: 'ENG' | 'KHM';
}

const STDBusinessContainer = styled.div``;

const MenubarLayout = styled.div`
  padding: 0px 20px;
  margin-bottom: 48px;
  margin-top: 48px;
`;

const BusinessContainer: React.VFC<IProps> = ({ language }) => {
  const [selectedMenu, setSelectedMenu] = useState<BusinessMenuYpe>(
    'Kingdom of State'
  );
  const { width } = useResize();

  const clickMenu = (menu: BusinessMenuYpe) => {
    var ele: HTMLElement;
    setSelectedMenu(menu);

    switch (menu) {
      case 'Kingdom of State':
        ele = document.getElementById('kingdom');

        break;

      case 'The Hill Lake CC':
        ele = document.getElementById('cc');
        break;

      case 'TEBAH Project':
        ele = document.getElementById('asset');
        break;

      case 'Blockchain Service':
        ele = document.getElementById('blockChain');
        break;

      case 'Josun Palace Sihanoukville':
        ele = document.getElementById('josun');
        break;

      default:
        break;
    }

    ele.scrollIntoView({
      behavior: 'smooth',
      block: width > 1023 ? 'end' : 'end',
    });
  };
  return (
    <STDBusinessContainer>
      <Common.Banner imageSrc="/image/business.png" title="Business" />
      {width > 1023 ? (
        <MenuBar selectedMenu={selectedMenu} clickMenu={clickMenu} />
      ) : (
        <MenubarLayout>
          <DropDownMenuBar
            selectedMenu={selectedMenu}
            setSelectedMenu={clickMenu}
          />
        </MenubarLayout>
      )}
      {width > 1023 ? (
        <DesktopContents language={language} />
      ) : (
        <MobileContents language={language} />
      )}
    </STDBusinessContainer>
  );
};

export default BusinessContainer;
