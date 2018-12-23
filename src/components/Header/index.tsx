import Menu from 'antd/lib/menu';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import { IStyledProps } from '../../interfaces/StyledProps';
import LayoutPanel from './LayoutPanel';
import Menus from './Menus';

interface IProps {
  showLayoutPanel: boolean;
}

class Header extends PureComponent<IProps> {
  public render() {
    return (
      <HeaderContainer>
        <Brand>
          <BrandLogo src={logo} />
          <BrandName>关联分析</BrandName>
        </Brand>
        <Menus recentScenes={[]} checkedItems={{ infoPanel: true }} />
        {this.props.showLayoutPanel && <LayoutPanel />}
      </HeaderContainer>
    );
  }
}

export default Header;

const HeaderContainer = styled.header`
  height: ${props => (props as IStyledProps).theme.headerHeight + 'px'};
  line-height: 60px;
  background: ${props => (props as IStyledProps).theme.headerBgColor};
  color: white;
  position: relative;
`;

const Brand = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 20px;
  margin-right: 50px;
`;
const BrandLogo = styled.img`
  height: 70%;
  vertical-align: middle;
  margin-right: 10px;
`;

const BrandName = styled.span`
  font-size: 18px;
  letter-spacing: 1px;
`;
