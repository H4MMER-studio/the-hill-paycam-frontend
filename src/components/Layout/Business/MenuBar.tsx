import React from 'react';
import styled from 'styled-components';

const STDMenuBarContainer = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  font-size: 24px;
  font-weight: 800;
  height: 77px;
  width: 278px;
  color: #a3a3a3;
  /* background: #a3a3a3; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBar: React.VFC = () => {
  return (
    <STDMenuBarContainer>
      <Menu>KKingdom of State</Menu>
      <Menu>The Hill Lake CC</Menu>
      <Menu>TEBAH Project</Menu>
      <Menu>Blockchain Service</Menu>
      <Menu>Josun Palace</Menu>
    </STDMenuBarContainer>
  );
};

export default MenuBar;
